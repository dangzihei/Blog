import React, { Component } from "react"
import styles from './main.module.css'
import { NavLink } from "react-router-dom";

console.log(styles);

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={styles.main}>
                <NavLink to='/login' className={({ isActive }) => { return isActive ? 'selected' : '' }}>
                    去登录页面
                </NavLink>

            </div>
        )
    }
}
export default Home;