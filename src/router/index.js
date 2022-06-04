/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2022-05-29 13:38:29
 * @LastEditTime: 2022-06-04 22:22:21
 * @LastEditors: lingshi
 */
import React, { Suspense, lazy } from "react";
import { useRoutes, Outlet } from "react-router-dom";
import { Spin } from 'antd'

const routes = [
  {
    path: "/",
    component: lazy(() => import('../pages/login.jsx'))
  },
  {
    path: "/home",
    component: lazy(() => import('../pages/index.jsx')),
    children: [
      {
        path: 'meeting',
        component: lazy(() => import('../pages/UserList')),
      },
      {
        path: 'analy',
        component: lazy(() => import('../pages/UserList')),
      },
      {
        path: 'me',
        component: lazy(() => import('../pages/UserList')),
      },
      {
        path: 'user',
        element: <Outlet/>,
        children: [
          {
            path: 'list',
            component: lazy(() => import('../pages/UserList')),
          },
          {
            path: 'auth',
            component: lazy(() => import('../pages/UserAuth')),
          }
        ]
      },
      {
        path: '*',
        component: lazy(() => import('../pages/page404'))
      }
    ]
  },
  {
    path: "/login",
    component: lazy(() => import('../pages/login.jsx'))
  },
];

// 路由处理方式
const generateRouter = (routers) => {
  return routers.map((item) => {
    if (item.children) {
      item.children = generateRouter(item.children)
    }
    if(!item.element) {
      item.element = <Suspense 
        fallback={
          <Spin tip="加载中...">
            <div style={{ width: '100%', height: '100%' }}></div>
          </Spin>
      }>
        {/* 把懒加载的异步路由变成组件装载进去 */}
        <item.component />
      </Suspense>
    }
    return item
  })
}

const useRouter = () => useRoutes(generateRouter(routes))

//将路由表数组导出
export default useRouter;
