/*
 * @Description: 路由首页面layout
 * @Author: wangXiaoMing
 * @Date: 2022-04-30 14:18:44
 * @LastEditTime: 2022-06-04 22:28:44
 * @LastEditors: lingshi
 */
import React from "react";
import { Outlet } from 'react-router-dom'
import { Header } from "../components/Header";
import { Siderbar } from '../components/Sidebar'
import PageLayout from "../components/PageLayout/index.jsx";
import styles from './index.module.scss'

function Pages() {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Siderbar></Siderbar>
        </div>
        <div className={styles.mainContent}>
          <PageLayout><Outlet></Outlet></PageLayout>
        </div>
      </div>
    </div>
  )
}

export default Pages;
