import React, { useState, useEffect, PropsWithChildren } from 'react';
import { Link, NavLink } from 'umi';
import logo from '../../assets/logo-new.png';
import styles from './leftNavMenu.less';
import defaultSettings from "../../../config/defaultSettings";
import { Button, Result } from 'antd';

export default (props: PropsWithChildren<any>) => {
  const { data: { menuData } } = props;
  const [active, setActive] = useState(window.location.pathname.replace('/manage', ''));
  useEffect(() => {
    setActive(window.location.pathname.replace('/manage', ''));
  }, [window.location.pathname]);
  const lastMenuData = menuData?.filter((item: { path: string }) => item.path?.split('/')?.length <= 2)
  const isLinkActive = (linkPath: string) => {
    return active === linkPath || active.startsWith(`${linkPath}/`)
  }
  return (
    <div className={styles.menu}>
      <Link to="/">
        <div className={styles.logo_item}>
          <img className={styles.logo} src={logo} alt='' /> {defaultSettings.title}
        </div>
      </Link>
      <div className={styles.menu_list}>
        {
          lastMenuData?.map((item: any) => {
            if (item.path !== '/' && !item.hideInMenu && !item.unaccessible) {
              if (!item.children || item.children.filter(child => !child.hideInMenu).length <= 1) {
                const theItem = !item.children || item.children.filter(child => !child.hideInMenu).length === 0 ? item : item.children.filter(child => !child.hideInMenu)[0]
                return <NavLink key={theItem.path} to={theItem.path} onClick={() => setActive(theItem.path)} className={`${styles.link} `}>
                  <div className={`${isLinkActive(theItem.path) ? styles.link_active : ''} ${isLinkActive(theItem.path) ? '' : styles.link_bg}`}>
                    {theItem.icon}
                    <span className={styles.title}>
                      {theItem.name}
                    </span>
                  </div>
                </NavLink>
              }
              return <div key={item.path} style={{ marginTop: 10 }}>
                <div style={{ padding: '4px 9px', fontSize: 16 }}>
                  {item.icon}
                  <span className={styles.title}>
                    {item.name}
                  </span>
                </div>
                <div className={styles.item}>
                  {
                    item.children?.filter(child => !child.hideInMenu).map((ele: { path: string; name: string }) => {
                      return <NavLink key={ele.path} onClick={() => setActive(ele.path)} className={styles.children} to={ele.path}><div className={`${isLinkActive(ele.path) ? styles.active : ''} ${isLinkActive(ele.path) ? styles.bg : styles.hover_bg}`}>{ele.name}</div></NavLink>
                    })
                  }
                </div>
              </div>
            }

            // if (item.unaccessible) {
            //   console.log(111);
            //   return (
            //     <Result
            //       status="403"
            //       title="403"
            //       subTitle="Sorry, you are not authorized to access this page."
            //       extra={<Button type="primary">Back Home</Button>}
            //     />
            //   )
            // }

            return null
          })
        }
      </div>

    </div>
  )
}
