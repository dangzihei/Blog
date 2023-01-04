import React, { Component } from "react"
import styles from './manage.module.css'


// console.log(styles);

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <div className={styles.manage}>
                后台管理页面
            </div>
        )
    }
}
export default Home;