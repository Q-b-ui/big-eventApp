//1.导入模块
const express = require('express');
//2.创建服务器
let app = express();
//3.开启服务器
app.listen(3000,()=>{
console.log('running........');
});

// 4.处理客户端请求

app.get('/data','utf8',(req,res)=>{

    res.send('hello')
})