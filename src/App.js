/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2022-04-23 19:13:48
 * @LastEditTime: 2022-05-29 13:36:36
 * @LastEditors: wangXiaoMing
 */
import React from "react";
import { default as Pages } from "./pages/index.jsx";
import { Login } from "./pages/login.jsx";
import { BrowserRouter,Route, Routes, useNavigate } from 'react-router-dom';
import 'antd/dist/antd.min.css'

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login/> } ></Route>
          <Route path="/home" element={ <Pages/> } ></Route>
          <Route path="/login" element={ <Login/> } ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
