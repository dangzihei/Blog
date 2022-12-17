import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import { NavLink } from "react-router-dom";
import RouterView from './router/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavLink to='/' className={({ isActive }) => { return isActive ? 'selected' : '' }}>
                    去登录
                </NavLink>
                <NavLink to='/' className={({ isActive }) => { return isActive ? 'selected' : '' }}>
                    去首页
                </NavLink>
        <Button type="dashed" ghost>Button</Button>

        <RouterView></RouterView>
      </header>
    </div>
  );  
}

export default App;
