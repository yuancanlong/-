import { Tag } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight = props => {
  const { theme, layout,  dispatch } = props;
  let className = styles.right;
  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }
  // useEffect(() => {
  //   dispatch({
  //     type: 'team/fetch',
  //   })
  // }, [])
  // const { REACT_APP_ENV } = process.env;
  console.log(REACT_APP_ENV,'process.env?.REACT_APP_ENV')

  return (
    <div className={className}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar menu />
        {REACT_APP_ENV && REACT_APP_ENV !== 'production' && (
          <span>
            <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
          </span>
        )}
      </div>
    </div>
  );
};

export default (GlobalHeaderRight)
