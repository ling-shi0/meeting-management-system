/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2022-05-29 13:38:29
 * @LastEditTime: 2022-05-29 16:37:52
 * @LastEditors: wangXiaoMing
 */
import React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import { default as Pages } from "../pages/index.jsx";
import { Login } from "../pages/login.jsx";
import { Page404 } from '../pages/page404';

const routes = [
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/home",
    element: <Pages/>,
    children: [
      {
        path: 'meeting',
        element: <></>
      },
      {
        path: 'analy',
        element: <></>
      },
      {
        path: 'me',
        element: <></>
      },
      {
        path: 'user',
        element: <Outlet/>,
        children: [
          {
            path: 'list',
            element: <></>
          },
          {
            path: 'auth',
            element: <div>112324</div>
          }
        ]
      },
      {
        path: '*',
        element: <Page404/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
];

function useRouter() {
  return <>{useRoutes(routes)}</>
}

//将路由表数组导出
export default useRouter;
