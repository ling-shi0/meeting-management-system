/*
 * @Description: 路由首页面layout
 * @Author: wangXiaoMing
 * @Date: 2022-04-30 14:18:44
 * @LastEditTime: 2022-05-29 16:36:08
 * @LastEditors: wangXiaoMing
 */
import React from "react";
import { Outlet } from 'react-router-dom'
import { Header } from "../components/Header";
import { Siderbar } from '../components/Sidebar'
import styles from './index.module.scss'

function Pages(props) {
  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Siderbar></Siderbar>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Pages;
