import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin, Tag } from 'antd';
import React from 'react';
import { history, connect } from 'umi';
import HeaderDropdown from './headerDropdown';
import styles from './index.less';
import defaultIcon from '../../../assets/defaultHead.jpg';

class AvatarDropdown extends React.Component {
  onMenuClick = (event) => {
    const { key, keyPath } = event;
    const { dispatch } = this.props;
    if (key === 'logout') {
      if (dispatch) {
        dispatch({
          type: 'user/logout',
        });
      }
      return;
    }
    history.push(`/account/${key}`);
  };

  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'user/fetch',
  //   });
  // }

  render() {
    const {
      currentUser = {
        icon: '',
        name: '',
        nickName: '',
        memberRoleInfoList: [],
      },
      menu,
    } = this.props;

    const menuHeaderDropdown = menu ? (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <div className={styles.teamUserInfoWrap}>
          <img
            className={styles.headImg}
            src={currentUser.icon === '' ? defaultIcon : currentUser.icon}
            alt=""
          />
          <div className={styles.teamUserInfo}>
            <div className={styles.teamUserName}>{currentUser?.name}</div>
            <div className={styles.teamUserRoleName}>
              {currentUser?.memberRoleInfoList?.map((role) => {
                return <Tag key={role.roleName} className={styles.eachRoleName}>{role.roleName} </Tag>;
              })}
            </div>
          </div>
        </div>
        <Menu.Divider />
        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    ) : null;
    return currentUser && currentUser.name ? (
      <>
        {/* <span className={styles.question}>
          <span
            className={styles.desc}
            onClick={() => window.open('https://support.qq.com/products/293111?')}
          >
            常见问题
          </span>
          <span style={{ margin: '0 10px', color: '#e5e5e5' }}>|</span>
        </span> */}
        <HeaderDropdown overlay={menuHeaderDropdown}>
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar
              size="small"
              className={styles.avatar}
              src={currentUser.icon || defaultIcon}
              alt="avatar"
            />
            <span style={{ marginRight: 12 }} className={styles.name}>
              {currentUser.nickName}
            </span>
          </span>
        </HeaderDropdown>
      </>
    ) : (
      <span className={`${styles.action} ${styles.account}`}>
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </span>
    );
  }
}

// export default connect(({ user }) => ({
//   currentUser: user,
// }))(AvatarDropdown);
export default AvatarDropdown
