import React from 'react';

class FormStore  {
    constructor() {
        this.data = {},
        this.fieldExist=[]
    }
    setValue =(newData)=> {
        this.data = {
            ...this.data,
            ...newData
        }
        // 更新某个组件
        this.fieldExist.forEach((entity)=> {

            Object.keys(newData).forEach((k)=>{
                if(k === entity.props.name) {
                    entity.onStoreChange()
                }
            })
        })
    }
    getValue = () => {
        return this.data
    }
    registerField = (entity) => {
        this.fieldExist.push(entity)

        return ()=> {
            this.fieldExist = this.fieldExist.filter(_entity => _entity!=entity)
            entity?.props?.name && delete this.data[entity.props.name]
        }
    }
}
const formStore = new FormStore
const CountContext = React.createContext({
    setValue:formStore.setValue,
    getValue: formStore.getValue,
    registerField : formStore.registerField
    
});
export default CountContext