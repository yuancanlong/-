const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const template = require('@babel/template').default;
const parser = require('@babel/parser');
const t = require("@babel/types");

const LinkReg = new RegExp('<(Link)[^>]*>','gi');
const PermissionReg = new RegExp('data-permissions');
const PermissionConditionReg = new RegExp('data-permissions-condition');
const guarderImport = template.ast("import PermissionGuarder, {hasUrlPermissions} from \"@/components/Permission/PermissionGuarder\";", {sourceType: "module"});
const hasPermissionImport = template.ast("import {hasPermissions} from \"@/components/Permission/CheckPermissions\";", {sourceType: "module"});
const placeholderPattern = /^PLACEHOLDER_[_$A-Z0-9]+$/

module.exports = function(source, map, meta) {
    
    // console.log(`permission-hoc-loader process ${this.context}`);
    if (LinkReg.test(source) || PermissionReg.test(source) || PermissionConditionReg.test(source)) {
        try{
            const ast = parser.parse(source, {
                // 根据源码内容添加 sourceType 和 plugins
                sourceType: 'module',
                plugins: ['typescript', 'jsx', 'classProperties']
            });
            traverse(ast, {
                Program(path) {
                    const imports = path.get("body").filter(p => p.isImportDeclaration());

                    const hasPermissionGuarderImport = imports.some(item => item.toString().includes('@/components/Permission/PermissionGuarder'));
                    const hasHasPermissionImport = imports.some(item => item.toString().includes('hasPermissions'));
                    const lastImport = path.get("body").filter(p => p.isImportDeclaration()).pop();
                    
                    if (lastImport) {
                        if (!hasHasPermissionImport) {
                          lastImport.insertAfter(hasPermissionImport);
                        }
                        if (!hasPermissionGuarderImport) {
                          lastImport.insertAfter(guarderImport);
                        
                        }
                    }
                },
                CallExpression(expression) {

                    if (expression.node.callee.type === 'MemberExpression') {
                      if (expression.node.callee.object.name === 'history' && expression.node.callee.property.name === 'push') {
                        const condition = template.expression(`hasUrlPermissions(PLACEHOLDER_ATTR)`, {
                          plugins: ['jsx'],
                        });
                        expression.replaceWith(t.conditionalExpression(condition({
                          PLACEHOLDER_ATTR: expression.node.arguments[0]
                        }), expression.node, t.nullLiteral()));
                        expression.skip();
                      }
                    }
                },
                JSXElement: {
                exit(path) {
                    if (path.node.openingElement.name.name === 'Link') {
                    let toAttr=''
                    path.traverse({
                        JSXAttribute(attribute) {
                            if (attribute.node.name.name === 'to') {
                                toAttr = attribute.toString();
                            }
                        }
                    })
                    const parent = template.ast(`<PermissionGuarder ${toAttr} exception={null} >${path.toString()}</PermissionGuarder>`, {
                        plugins: ['jsx']
                    });
                    path.replaceWith(parent);
                    path.skip();
                    } else {
                    if (path.node.openingElement.attributes.some(attribute => attribute.name && attribute.name.name === 'data-permissions')) {
                        // console.log('data-permissions enter');
                        const attribute = path.node.openingElement.attributes.filter(attr => attr.name.name === 'data-permissions')[0];
                        // const toAttr = (template.ast(attribute)).toString().replace('data-permissions', 'permissions');
                        // const jsxElement = attribute.findParent(node => node.isJSXElement());
                        if (attribute.value.value) {
                        const newJsxElement = template(`<PermissionGuarder permissions='PLACEHOLDER_ATTR' exception={null} >${path.toString()}</PermissionGuarder>`, {
                            plugins: ['jsx'],
                            placeholderPattern
                        });
                        path.replaceWith(newJsxElement({
                            PLACEHOLDER_ATTR: attribute.value.value
                        }));
                        } else {
                        const newJsxElement = template(`<PermissionGuarder permissions={PLACEHOLDER_ATTR} exception={null} >${path.toString()}</PermissionGuarder>`, {
                            plugins: ['jsx'],
                            placeholderPattern
                        });
                        path.replaceWith(newJsxElement({
                            PLACEHOLDER_ATTR: attribute.value.expression
                        }));
                        }
                        path.skip()
                    } else if (path.node.openingElement.attributes.some(attribute => attribute.name && attribute.name.name === 'data-permissions-condition')) {
                        // console.log('data-permissions-condition enter');
                        const attribute = path.node.openingElement.attributes.filter(attr => attr.name.name === 'data-permissions-condition')[0];
                        const condition = template.expression(`hasPermissions(PLACEHOLDER_ATTR)`, {
                        plugins: ['jsx'],
                        });
                        let attr = attribute.value;
                        if (!attribute.value.value) {
                        attr = attribute.value.expression
                        }
                        path.replaceWith(t.jsxExpressionContainer(t.conditionalExpression(condition({
                        PLACEHOLDER_ATTR: attr
                        }), path.node, t.nullLiteral())));
                        path.skip();
                    }
                    }
                }
                },
            })
            const {code} = generate(ast, {});
            return code;
        } catch (e) {
            console.error(e)
        }
    }
    return source
}