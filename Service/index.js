const express = require('express');
const mysql = require('mysql');

var app = express();
// app.use(express.static('public'));

app.listen(5000, function () {
    console.log('http://127.0.0.1:5000');
})

// 创建数据库连接对象
var sqlObj = mysql.createConnection({
    host:"localhost",//数据库服务器地址 本地数据库
    port:3306, // 数据库的服务端口号 默认是3306
    user:'root', //数据库账号
    password:'root', //数据库密码
    database:'database_blog', //具体的数据库名称
})

// 使用这个对象连接数据库
sqlObj.connect(function(err){
    if (err) {
        console.log('数据库连接失败');
    }else{
        console.log('数据库连接成功')
    }
})


//定义接口
app.get('/login', (req, res) => {
    console.log(req.query);
    // 判断正确 
    res.send({
        code:200, 
        data:{
            msg: '登陆成功'
        }
     })
})