/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2022-04-23 19:13:48
 * @LastEditTime: 2022-05-29 16:08:54
 * @LastEditors: wangXiaoMing
 */
import React from "react";
import Router from './router'
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.min.css'

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    );
  }
}

export default App;
