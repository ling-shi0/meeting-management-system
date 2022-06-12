/*
 * @Description:  base page layout
 * @Author: wangXiaoMing
 * @Date: 2022-06-04 16:12:29
 * @LastEditTime: 2022-06-04 20:40:55
 * @LastEditors: lingshi
 */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import styles from './index.module.scss'

const breadcrumbNameMap = {
  '/home': '首页',
  '/home/meeting': '会议室管理',
  '/home/me': '我的',
  '/home/analy': '综合分析',
  '/home/user': '用户管理',
  '/home/user/auth': '权限管理',
  '/home/user/list': '用户列表'
}


const PageLayout = (props) => {
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const BreadcrumbItemsList = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  return (
    <>
      <div className={styles.breadcrumb}>
        <Breadcrumb>
          {BreadcrumbItemsList}
        </Breadcrumb>
      </div>
      {props.children}
    </>
  )
}

export default PageLayout;
