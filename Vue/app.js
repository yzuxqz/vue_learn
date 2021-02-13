/*jshint esversion: 6 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = new express();

//设置允许跨域
app.all('*', (rwq, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,GET,POSY,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "X_Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Headers", "mytoken");
    next();
});

//开放静态资源文件
app.use(express.static(path.join(__dirname, 'Day04-Vue前后端交互')));
//解析post请求参数(两种格式)
app.use(bodyParser.urlencoded({
    extended: false //使用express自带的解析模块
}));
app.use(bodyParser.json());

// axios参数传递
app.get('/adata', (req, res) => {
    res.send('axios');
});

//传统url和params调用
app.get('/axios', (req, res) => {
    res.send('axios get 传递参数' + req.query.id);
});

app.get('/axios/:id', (req, res) => {
    res.send('axios get 传递参数' + req.params.id);
});

app.delete('/axios', (req, res) => {
    res.send(req.query.id);
});

app.post('/axios', (req, res) => {
    res.send(req.body.uname + req.body.pwd);
});

app.put('/axios/:id', (req, res) => {
    res.send(req.query.id + req.body.uname + req.body.pwd);
});

app.get('/axios-json', (req, res) => {
    res.json({
        uname: 'lisi',
        age: 12
    });
});


app.get('/data', (req, res) => {
    res.send('ok');
});
app.get('/data1', (req, res) => {
    res.send('ok1');
});
app.get('/data2', (req, res) => {
    res.send('ok2');
});
app.get('/data3', (req, res) => {
    res.send('传统url(GET请求)传参' + req.query.id);
});
app.get('/data3/:id', (req, res) => {
    res.send('Resful形式的url(GET请求)传参' + req.params.id);
});
app.delete('/data3/:id', (req, res) => {
    res.send('Resful形式的url(DELETE请求)传参' + req.params.id);
});
app.post('/data3', (req, res) => {
    res.send('POST请求传递参数' + req.body.uname + '---' + req.body.pwd);
});
app.put('/data3/:id', (req, res) => {
    res.send('PUT请求传递参数' + req.params.id + req.body.uname + '---' + req.body.pwd);
});
app.get('/json', (req, res) => {
    res.json({
        uname: 'lisi',
        age: 12,
        gender: 'male'
    });
});

app.get('/async1', (req, res) => {
    res.send('hello');
});

app.get('/async2', (req, res) => {
    if (req.query.info == 'hello') {
        res.send('world');
    } else {
        res.send('error');
    }
});

app.get('/books', (req, res) => {
    res.send([{
        id: 1,
        name: '三国演义',
        date: '2525609975000'
    }, {
        id: 2,
        name: '水浒传',
        date: '2525609975000'
    }, {
        id: 3,
        name: '红楼梦',
        date: '2525609975000'
    }, {
        id: 4,
        name: '西游记',
        date: '2525609975000'
    }]);
});
app.listen(3000);
console.log('服务器启动成功');