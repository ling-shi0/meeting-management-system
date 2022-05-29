/*
 * @Description: 路由首页面
 * @Author: wangXiaoMing
 * @Date: 2022-04-30 14:18:44
 * @LastEditTime: 2022-05-29 13:33:46
 * @LastEditors: wangXiaoMing
 */
import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Header } from "../components/Header";
import { Siderbar } from '../components/Sidebar'
import { Page404 } from './page404';
import styles from './index.module.scss'

export default class Pages extends React.PureComponent {

  render() {
    return (
      <div>
        <Header></Header>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <Siderbar></Siderbar>
          </div>
          <div>
            {/* <Routes>
              <Route path="/">
                <Route path="user/">
                  <Route path="list" ></Route>
                  <Route path="auth" ></Route>
                </Route>
                <Route path="meeting"></Route>
                <Route path="analy"></Route>
                <Route path="me"></Route>
              </Route>
              <Route path="*" element={ <Page404 /> }></Route>
            </Routes> */}
          </div>
        </div>
      </div>
    )
  }

}
