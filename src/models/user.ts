const UserModel = {
  namespace: 'user',

  state: {
    name: 'ycl',
  },

  effects: {
    *fetch({ payload }: any, { call, put }: any) {
      yield put({
        type: 'userInfoFetched',
        payload,
      });
    },
  },

  reducers: {
    userInfoFetched(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },
};

export default UserModel;
