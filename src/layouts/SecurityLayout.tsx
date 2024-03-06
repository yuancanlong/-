import React, { useState, useEffect } from 'react';
// import { PageLoading } from '@ant-design/pro-layout';
import { Redirect } from 'umi';
import { stringify } from 'querystring';
// import PermissionGuarder from '@/components/Permission/PermissionGuarder';
// import { alreadyInPath } from '@/util';

const SecurityLayout = (props: any) => {
  // const [isReady, setIsReady] = useState(false);
  const { children, } = props;

  // // const { token } = user;
  // const [fetching, setFetching] = useState(false);
  // const queryString = stringify({
  //   redirect: location.pathname,
  // });
  useEffect(() => {
    // setIsReady(true);
  }, []);

  // useEffect(() => {
  //   if (token) {
  //     setFetching(true);
  //     Promise.all([
  //       dispatch({
  //         type: 'user/fetch',
  //       }),
  //     ])
  //       .then(() => {
  //         setFetching(false);
  //       })
  //       .catch((err) => {
  //         setFetching(false);
  //       });
  //   }
  // }, [token]);

  // if (fetching || !isReady) {
  //   return <PageLoading />;
  // }

  // if (token && alreadyInPath('/user/login')) {
  //   return <Redirect to="/" />;
  // }

  // if (!token && !alreadyInPath('/user/login')) {
  //   return <Redirect to={`/user/login?${queryString}`} />;
  // }

  return children
  // <PermissionGuarder routes={props.route.routes}>
  // { children }
  // </PermissionGuarder>;
};

// export default connect(({ }) => ({

// }))(SecurityLayout);
export default SecurityLayout;
