/*
 * @Description:
 * @Author: wangXiaoMing
 * @Date: 2022-05-02 12:23:49
 * @LastEditTime: 2022-05-02 14:43:52
 * @LastEditors: wangXiaoMing
 */
import React from "react";
import { Menu } from "antd";
import { routerMap } from "./routerMap";
import styles from "./index.module.scss"

export class Siderbar extends React.Component {

  render() {
    return (
      <Menu
        style={{ width: 256 }}
        className={styles.menu}
        mode="inline"
        theme="light"
        items={routerMap}
      />
    );
  }
}
