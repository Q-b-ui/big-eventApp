// 封装从数据库获取数据函数

  function openData(sql,parms){

    // 使用promise 处理异步
    return new Promise((resolve,reject)=>{

        //1. 加载mysql模块
        const mysql=require('mysql')
        // 2. 配置数据库信息
        const cn=mysql.createConnection({
            // 2.1.数据库IP/域名
            host:'localhost',
            // 2.2.数据库端口
            port:'3306',
            // 2.3.数据库名
            database:'bigevent',
            // 2.4.账户名
            user:'root',
            // 2.5.账户密码
            password:'root'
        })
        // 3.连接数据库
        cn.connect()
        // 4.开始操作数据库
        cn.query(sql,parms,(err,result)=>{
            if(err){
                // 失败
                return reject(err)
            }else{
                // 成功
                resolve(result)
            }
        })

        // 5.关闭数据库
        cn.end()

    })
    
  }

  module.exports={
      openData
  }