import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
    getItem('文章管理', 'article', <MailOutlined />),
    getItem('标签管理', 'tag', <MailOutlined />),
    //   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
//   ]),
//   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Option 11', '11'),
//     getItem('Option 12', '12'),
//   ]),
//   getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];
const App = () => {
    const navigate =  useNavigate()
  const onClick = (e) => {
    console.log('click ', e);
    if (e.key == 'article') {
        navigate('/manage')
    }else if(e.key == 'tag'){
        navigate('/manage/tag')
    }
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default App;
