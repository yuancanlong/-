export default {
  namespace: 'lowCode',
  state: {
    editMode: 'edit', // 编辑器模式 edit preview
    canvasStyleData: {
      // 页面全局数据
      width: 400,
      height: 570,
      scale: 100,
      color: '#000',
      opacity: 1,
      background: '#fff',
      fontSize: 14,
    },
    isInEdiotr: false, // 是否在编辑器中，用于判断复制、粘贴组件时是否生效，如果在编辑器外，则无视这些操作
    componentData: [], // 画布组件数据
    curComponent: null,
    curComponentIndex: null,
    // 点击画布时是否点中组件，主要用于取消选中组件用。
    // 如果没点中组件，并且在画布空白处弹起鼠标，则取消当前组件的选中状态
    isClickComponent: false,
    rightList: true,
    isDarkMode: false,
    isDownward: null,
    isRightward: null,
  },
  effects: {
    *addComponent({ payload }: any, { call, put, select }: any) {
      yield put({
        type: 'addComponentReducers',
        payload,
      });
    },
    *curComponent({ payload }: any, { call, put, select }: any) {
      yield put({
        type: 'setCurComponent',
        payload,
      });
    },
  },
  reducers: {
    addComponentReducers(
      state: any,
      { payload: { index, ...component } }: any,
    ) {
      if (index !== undefined) {
        state.componentData.splice(index, 0, component);
      } else {
        state.componentData.push(component);
      }
      return { ...state };
    },
    setCurComponent(state: any, { payload }: any) {
      return {
        ...state,
        curComponent: payload.component,
        curComponentIndex: payload.index,
      };
    },
    setShapeStyle(state: any, { payload }: any) {
      const { top, left, width, height, rotate } = payload;
      if (top !== undefined) state.curComponent.style.top = Math.round(top);
      if (left !== undefined) state.curComponent.style.left = Math.round(left);
      if (width) state.curComponent.style.width = Math.round(width);
      if (height) state.curComponent.style.height = Math.round(height);
      if (rotate) state.curComponent.style.rotate = Math.round(rotate);
      return {
        ...state,
      };
    },
    setShapeSingleStyle(state: any, { payload: { key, value } }: any) {
      state.curComponent.style[key] = value;
      return {
        ...state,
      };
    },
    move(state: any, { payload }: any) {
      return {
        ...state,
        isDownward: payload.isDownward,
        isRightward: payload.isRightward,
      };
    },
    unmove(state: any, { payload }: any) {
      return {
        ...state,
        isDownward: null,
        isRightward: null,
      };
    },
  },
};
