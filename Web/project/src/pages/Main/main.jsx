import React, { Component } from "react"
import styles from './main.module.css'
import { NavLink } from "react-router-dom";
import { getAllArticle,faBu } from '../../tool/api'
import { Col, Row, Button, Menu } from 'antd';
import 'antd/dist/reset.css';

import { AppstoreOutlined, MailOutlined, SettingOutlined, SearchOutlined } from '@ant-design/icons';

// console.log(styles);

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [111,222],
            items: [
                // {
                //     label: '文章',
                //     key: 'article',
                //     icon: <MailOutlined />,
                // },
                {
                    label: (
                        <a href="#javascript" target="_self" rel="noopener noreferrer">
                            文章
                        </a>
                    ),
                    key: 'article',
                    icon: <MailOutlined />
                },
                {
                    label: (
                        <a href="#javascript" target="_self" rel="noopener noreferrer">
                            标签
                        </a>
                    ),
                    key: 'tig',
                    icon: <MailOutlined />
                },
                {
                    label: (
                        <a href="#javascript" target="_self" rel="noopener noreferrer">
                            分类
                        </a>
                    ),
                    key: 'type',
                    icon: <MailOutlined />

                },
                {
                    label: (
                        <a href="#javascript" target="_self" rel="noopener noreferrer">
                            留言
                        </a>
                    ),
                    key: 'email',
                    icon: <MailOutlined />

                },
                {
                    label: (
                        <a href="/login" target="_self" rel="noopener noreferrer">
                            管理
                        </a>
                    ),
                    key: 'manage',
                    icon: <MailOutlined />
                },
            ],
            current: 'article',
            isSearched: false,
            isBlack: false

        }
    }
    async componentDidMount() {
        let res = await getAllArticle();
        console.log(res.data)
        this.setState({
            list: res.data
        })
        
    }
    hhh = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key
        })

    };

    render() {
        return (
            <div className={styles.main}>
                {/* <Row justify="end">
                    <Col span={3}>
                        <NavLink to='/login' className={({ isActive }) => { return isActive ? 'selected' : '' }}>
                            <Button type="dashed">登录</Button>
                        </NavLink>
                    </Col>
                    
                </Row> */}
                {/* <div className={styles.nav}>
                    <div className={styles.navLeft}>
                    </div>
                    <div className={styles.navRight}>
                        <span>|</span>
                        <Button type="ghost" shape="circle" icon={<SearchOutlined />} onClick={() => { this.setState({ isSearched: !this.state.isSearched }) }} />
                        <Button type="ghost" shape="circle" icon={<SearchOutlined />} onClick={() => { this.setState({ isBlack: !this.state.isBlack }) }} />
                    </div>

                </div> */}
                <Menu onClick={this.hhh} selectedKeys={[this.state.current]} mode="horizontal" items={this.state.items} />

                <Row>
                    <Col xs={3} sm={4} md={5} lg={6}>
                    </Col>
                    <Col xs={18} sm={16} md={14} lg={12} className={styles.content}>
                        <ul>
                        {
                            this.state.list.map((item,index)=>{
                                return <li className={styles.article} key={index}>
                                    <h2>{item.TITLE}</h2>
                                    <p>党在{item.TIME}发布</p>
                                    <p>类型：{item.TYPE}</p>
                                    <p>介绍:{item.INTRODUCE}</p>
                                    <div className={styles.articleBottom}>
                                        <a href="#javaScript">阅读全文</a>
                                        <div>
                                          标签:{item.TAG?JSON.parse(item.TAG).map((v,i)=>{
                                            return <Button type="dashed" key={i}>{v}</Button>
                                          }):''}
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                        </ul>
                    </Col>
                    <Col xs={3} sm={4} md={5} lg={6}>
                    </Col>
                </Row>


            </div>
        )
    }
}
export default Home;