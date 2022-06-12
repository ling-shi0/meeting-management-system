/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2022-05-02 13:41:05
 * @LastEditTime: 2022-05-29 16:40:49
 * @LastEditors: wangXiaoMing
 */
import React from "react";
import { TeamOutlined, IdcardOutlined, SolutionOutlined, ScheduleOutlined, BarChartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export const routerMap = [
  {
    key: 0,
    icon: <TeamOutlined />,
    children: [
      {
        key: 1,
        label: <Link to='/home/user/auth'>角色配置</Link>,
        icon: <IdcardOutlined />
      },
      {
        key: 2,
        label: <Link to='/home/user/list'>用户列表</Link>,
        icon: <SolutionOutlined />
      }
    ],
    label: <Link to='/home/user/list'>用户管理</Link>
  },
  {
    key: 3,
    icon: <ScheduleOutlined />,
    label: <Link to='/home/meeting'>会议室管理</Link>
  },
  {
    key: 4,
    icon: <BarChartOutlined />,
    label: <Link to='/home/analy'>综合分析</Link>
  },
  {
    key: 5,
    icon: <UserOutlined />,
    label:  <Link to='/home/me'>我的</Link>
  }
]
