const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
// console.log(bodyParser)
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
// 允许跨域请求
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

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
// sqlObj.connect(function(err){
//     if (err) {
//         console.log('数据库连接失败');
//     }else{
//         console.log('数据库连接成功')
//     }
// })


//定义接口
// 发表文章  [id,time,title,content,type]
app.post('/newArticle', (req, res) => {
    console.log(req.body);
    // 判断传输的数据是否有数据
    if (!req.body.time) {
        res.send({
            msg:'没有传递的对象'
        })
    }else{
        res.send({
            code:200, 
            data:{
                msg: '发布成功'
            }
         })
    }
})

// 修改文章
app.get('/newArticle', (req, res) => {
    console.log(req.query);
    // 判断正确 
    res.send({
        code:200, 
        data:{
            msg: '修改成功'
        }
     })
})

// 请求所有的文章
app.get('/allArticle', (req, res) => {
    
    // 判断正确 
    res.send({
        code:200,
        data:{
            msg: {}
        }
     })
})