import React, { Component } from "react"
import styles from './login.module.css'
import { NavLink } from "react-router-dom";
import { changeAccOrPwd, LoginFun } from '../../tool/api'
import withRouter from '../../tool/withRouter'
import { Button, Checkbox, Form, Input } from 'antd';
// console.log(styles);

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    selfLogin = async () => {
        let res = await LoginFun();
        console.log(res)
    }
    changeLogin = async () => {
        let res = await changeAccOrPwd();
        console.log(res);
    }

    onFinish = async (values) => {
        console.log('Success:', values);
        // if (values.remember) {
        //     localStorage.setItem('username',values.username)
        //     localStorage.setItem('password',values.password)
        //     console.log(localStorage.getItem('password'))
        //     console.log(localStorage.getItem('username'))
        // }
        let res = await LoginFun({
            account:values.username,
            password:values.password
        });
        if (res.status&&(res.status == 200)) {
            this.props.navigate('/manage')
        }
    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <div className={styles.login}>
                登录页面
                <NavLink to='/manage' className={({ isActive }) => { return isActive ? 'selected' : '' }}>
                    去后台
                </NavLink>
                <button onClick={this.selfLogin}> 登录</button>
                <button onClick={this.changeLogin}>修改</button>
                <div className={styles.loginBox}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        {/* <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item> */}

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default withRouter(Login);