import { cos, sin } from './translate';

const filterKeys = ['width', 'height', 'scale'];
const needUnit = [
  'fontSize',
  'width',
  'height',
  'top',
  'left',
  'borderWidth',
  'letterSpacing',
  'borderRadius',
];

export function getCanvasStyle(canvasStyleData: any) {
  const result = {};
  Object.keys(canvasStyleData)
    .filter((key) => !filterKeys.includes(key))
    .forEach((key) => {
      // @ts-ignore
      result[key] = canvasStyleData[key];
      if (key === 'fontSize') {
        // @ts-ignore
        result[key] += 'px';
      }
    });

  return result;
}
export function getStyle(style: { [x: string]: string }, filter = []) {
  const result: any = {};
  Object.keys(style).forEach((key) => {
    // @ts-ignore
    if (!filter.includes(key)) {
      if (key != 'rotate') {
        if (style[key] !== '') {
          // @ts-ignore
          result[key] = style[key];

          if (needUnit.includes(key)) {
            // @ts-ignore
            result[key] += 'px';
          }
        }
      } else {
        result.transform = key + '(' + style[key] + 'deg)';
      }
    }
  });

  return result;
}
export function getSVGStyle(style: { [x: string]: string }, filter: any = []) {
  const result: any = {};

  [
    'opacity',
    'width',
    'height',
    'top',
    'left',
    'rotate',
    'fontSize',
    'fontWeight',
    'lineHeight',
    'letterSpacing',
    'textAlign',
    'color',
    'position',
  ].forEach((key) => {
    if (!filter.includes(key)) {
      if (key != 'rotate') {
        if (style[key] !== '') {
          // @ts-ignore
          result[key] = style[key];

          if (needUnit.includes(key)) {
            // @ts-ignore
            result[key] += 'px';
          }
        }
      } else {
        result.transform = key + '(' + style[key] + 'deg)';
      }
    }
  });

  return result;
}
export function getShapeStyle(style: any) {
  const result = {};
  ['width', 'height', 'top', 'left', 'rotate'].forEach((attr) => {
    if (attr != 'rotate') {
      // @ts-ignore
      result[attr] = style[attr] + 'px';
    } else {
      // @ts-ignore
      result.transform = 'rotate(' + style[attr] + 'deg)';
    }
  });

  return result;
}
// 获取一个组件旋转 rotate 后的样式
export function getComponentRotatedStyle(style: any) {
  style = { ...style };
  if (style.rotate != 0) {
    const newWidth =
      style.width * cos(style.rotate) + style.height * sin(style.rotate);
    const diffX = (style.width - newWidth) / 2; // 旋转后范围变小是正值，变大是负值
    style.left += diffX;
    style.right = style.left + newWidth;

    const newHeight =
      style.height * cos(style.rotate) + style.width * sin(style.rotate);
    const diffY = (newHeight - style.height) / 2; // 始终是正
    style.top -= diffY;
    style.bottom = style.top + newHeight;

    style.width = newWidth;
    style.height = newHeight;
  } else {
    style.bottom = style.top + style.height;
    style.right = style.left + style.width;
  }

  return style;
}
