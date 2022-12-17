import React, { Component } from "react"
import styles from './login.module.css'
import { NavLink } from "react-router-dom";

console.log(styles);

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <div className={styles.login}>
                登录页面
                <NavLink to='/manage' className={({ isActive }) => { return isActive ? 'selected' : '' }}>
                    去后台
                </NavLink>
            </div>
        )
    }
}
export default Login;