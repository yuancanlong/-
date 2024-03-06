export default function (initialState: any) {
  return {
    canReadFoo: true,
    canUpdateFoo: initialState?.role === 'admin',
    canDeleteFoo: (foo: { ownerId: any }) => {
      return foo.ownerId === initialState?.userId;
    },
    canReadPageA: (is: any) => {
      return true;
    },
  };
}
