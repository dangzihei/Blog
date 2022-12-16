const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
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

// 创建数据库连接配置对象
var option = {
    host: "localhost",//数据库服务器地址 本地数据库
    port: 3306, // 数据库的服务端口号 默认是3306
    user: 'root', //数据库账号
    password: 'root', //数据库密码
    database: 'database_blog', //具体的数据库名称
}
let sqlObj = mysql.createConnection(option)
sqlObj.connect(function (err) {
    console.log(!!err)
})
//定义接口
// 发表文章  [time,title,content,type]
app.post('/article', (req, res) => {
    console.log(req.body);
    // 判断传输的数据是否有数据
    if (!req.body.title) {
        res.json({
            msg: '没有传递的对象'
        })
    } else {
        let sqlObj = mysql.createConnection(option)
        sqlObj.connect(function (err) {
            console.log(!err)
            if (err) {
                console.log(err)
                res.json({
                    message: '数据库连接失败，请重试'
                })
            } else {
                // 查询是否与以前的文章名字重复了
                sqlObj.query(`select * from article where title="${req.body.title}"`, function (err, data) {
                    if (data.length <= 0) {
                        // 插入数据
                        sqlObj.query(`insert into article (time,title,content,type) values("${req.body.time}","${req.body.title}","${req.body.content}","${req.body.type}")`)
                        res.json({
                            code: 200,
                            message: '发布成功'
                        })
                    } else {
                        res.json({
                            code: 500,
                            message: '文章名已存在'
                        })
                    }
                    sqlObj.end();
                })
            }
        })
    }
})

// 删除文章
app.delete('/article', (req, res) => {
    // 判断传输的数据是否有数据
    if (!req.query.title) {
        res.json({
            msg: '传递的数据有误'
        })
    } else {
        console.log(req.query)
        let sqlObj = mysql.createConnection(option)
        sqlObj.connect(function (err) {
            console.log(!err)
            if (err) {
                res.status(500).json({
                    message: '数据库连接失败，请重试'
                })
            } else {
                // 查询是否与以前的文章名字重复了
                // delete from 表名 where name='veb'   
                console.log(req.query.title)
                sqlObj.query(`select * from article where title="${req.query.title}"`, function (err, data) {
                    if (data.length > 0) {
                        console.log('开始删除了')
                        sqlObj.query(`delete from article where title="${req.query.title}"`, function (err) {
                            if (!err) {
                                res.status(500).json({
                                    message: '成功删除'
                                })
                            } else {
                                res.status(500).json({
                                    message: '删除失败'
                                })
                            }
                        })
                    } else {
                        res.status(500).json({
                            message: '无此标题的文章'
                        })
                    }
                    sqlObj.end()
                })
            }
        }
        )
    }
})

// 获取所有文章
app.get('/article', (req, res) => {
    let sqlObj = mysql.createConnection(option)
    sqlObj.connect(function (err) {
        console.log(!err)
        if (err) {
            res.json({
                message: '数据库连接失败，请重试'
            })
        } else {
            sqlObj.query(`select * from article`, function (err, data) {
                console.log(data, '1111')
                if (data.length <= 0) {
                    res.status(500).json({
                        "data": '无文章'
                    })
                } else {
                    res.status(200).json(data)
                }
                sqlObj.end()
            })
        }
    }
    )
})

// 修改文章
app.post('/newArticle', (req, res) => {
    let sqlObj = mysql.createConnection(option)
    sqlObj.connect(function (err) {
        console.log(!err)
        if (err) {
            res.status(500).json({
                message: '数据库连接失败，请重试'
            })
        } else {
            sqlObj.query(`select * from article where id = ${req.body.id}`, function (err, data) {
                console.log(data,req.body)
                if (data.length <= 0) {
                    res.status(500).json({
                        "data": '无此文章'
                    })
                } else {
                    (() => {
                        for (const key in req.body) {
                            if (key != 'id') {
                                console.log(req.body.id,key,req.body[key])
                                sqlObj.query(`update article set ${key} = "${req.body[key]}" where ID = ${req.body.id}`,function (err) {
                                    console.log(err)
                                })
                            }
                        }
                    })()
                    res.status(200).json('更改成功')
                }
                sqlObj.end()
            })
        }
    }
    )
})

// 查找
app.get('/search', (req, res) => {
    let sqlObj = mysql.createConnection(option)
    sqlObj.connect(function (err) {
        if (err) {
            res.status(500).json({
                message: '数据库连接失败，请重试'
            })
        } else {
            sqlObj.query(`select * from article where title like "%${req.query.search}%" or content like "%${req.query.search}%" or type like "%${req.query.search}%"`, function (err, data) {
                console.log(data)
                if (data.length <= 0) {
                    res.status(500).json({
                        "data": '无此文章'
                    })
                } else {
                    res.status(200).json(data)
                }
                sqlObj.end()
            })
        }
    }
    )
})

