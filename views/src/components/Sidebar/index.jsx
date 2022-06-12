/*
 * @Description:
 * @Author: wangXiaoMing
 * @Date: 2022-05-02 12:23:49
 * @LastEditTime: 2022-06-04 22:12:37
 * @LastEditors: lingshi
 */
import React from "react";
import { useLocation } from 'react-router-dom'
import { Menu } from "antd";
import { routerMap } from "./routerMap";
import styles from "./index.module.scss"

let lastLocation = ''

const Siderbar = () => {
  
  const location = useLocation();

  
  if(lastLocation !== location.pathname) {
    lastLocation = location.pathname;
  }

  return (
    <Menu
      style={{ width: 256 }}
      className={styles.menu}
      mode="inline"
      theme="light"
      items={routerMap}
      selectedKeys={[lastLocation]}
    />
  );
}

export {Siderbar};