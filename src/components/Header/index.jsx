/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2022-04-30 15:46:56
 * @LastEditTime: 2022-05-02 13:30:30
 * @LastEditors: wangXiaoMing
 */
import React from "react";
import styles from './index.module.scss'

export function Header() {
  return (
    <header>
      <div className={styles.title}>会议室管理系统</div>
      <div>欢迎您 XXX先生</div>
    </header>
  )
}
