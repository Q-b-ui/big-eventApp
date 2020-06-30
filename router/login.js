
// 写接口

const path=require('path')
const express=require('express')
const db=require(path.join(__dirname,'../common/db.js'))

const router=express.Router()

router.post('/reguser',async(err,res)=>{
    let sql='insert into user set ?'
    let ret=await db.openData(sql,err.body)

    res.send({

        status:0,
        message:'注册成功'
    })
})

module.exports=router

