/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2022-05-02 15:46:28
 * @LastEditTime: 2022-05-02 17:10:23
 * @LastEditors: wangXiaoMing
 */
import React from "react";
import { useLocation } from 'react-router-dom'
import _ from 'loadsh';
import { Form, Input, Button, Checkbox } from 'antd';

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.login = this.login.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
  }

  // componentDidMount() {
  //   // 判断下是否已经登陆过且token没有过期然后是否需要直接跳转到主页了
  // }

  login() {
    const { password, username } = this.state;
    console.log()
    // this.props.push('/home')
    // window.location.href = location.
    // console.log(this.props.navigate)
  }

  changeUsername(val) {
    this.setState({
      username: val.target.value
    })
  }

  changePassword(val) {
    this.setState({
      password: val.target.value
    })
  } 

  render() {
    return (
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input value={this.state.username} onChange={_.debounce(this.changeUsername,300)}/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password  value={this.state.password} onChange={_.debounce(this.changePassword,300)}/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={this.login}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
