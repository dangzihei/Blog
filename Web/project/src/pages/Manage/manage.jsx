import React from 'react';
import styles from './manage.module.css'
import { Layout } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';
import Aside from '../../components/aside/aside'
import { NavLink,Outlet } from "react-router-dom";

function Manage() {
    return (
        <div className={styles.manage}>
            <nav className={styles.nav}>
                <p>
                    后台管理系统
                </p>
                <Button type="dashed" icon={<ToTopOutlined />}>
                    发布新文章
                </Button>
            </nav>
            <section className={styles.section}>
                <div className={styles.aside}>
                    <Aside></Aside>
                </div>
                <main className={styles.main}>
                    <Outlet></Outlet>
                </main>
            </section>
        </div>
    );
}

export default Manage;

