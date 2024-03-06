import { useState } from 'react';

import { setupTheme } from './theme';
import Tracker from 'zw-tracker-sdk';
import 'antd/dist/antd.css';

setupTheme();

const tr = new Tracker({
  requestUrl: 'http://localhost:9000/tracker', //接口地址
  historyTracker: true,
  domTracker: true,
  jsError: true,
});

// export const getInitialState = async () => {
//   return {
//     canReadFoo: true,
//     canUpdateFoo: '',
//     canDeleteFoo: (foo: { ownerId: any }) => {
//       return true;
//     },
//     canReadPageA: false,
//   };
// };
export function useQiankunStateForSlave() {
  //   const [masterState, setMasterState] = useState({});
  //   return {
  //     masterState,
  //     setMasterState,
  //   };
}
