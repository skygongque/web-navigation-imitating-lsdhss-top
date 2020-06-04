const express = require('express');
const fs = require('fs');
var index_html = fs.readFileSync('index.html').toString()

const app = express();

// 开放静态目录(文件)请求时默认会寻找index
// ./开放了整个目录不太安全
// app.use(express.static('./'))

// 开放node_modules目录
app.use('/node_modules/',express.static('./node_modules'))


app.get('/', function (req, res) {
    res.send(index_html)
})

app.listen(80, () => {
    console.log('开启服务，端口80');
})