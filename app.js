
const express=require('express')
const app=express();
const {router }= require('./router/router')
const {connectDb}=require('./db/connection')
require('dotenv').config()
var cors = require('cors')

app.use(cors()) 
app.set('view engine','ejs');
app.set('views','./');
app.use(express.json())
app.use('/api/v1/task',router)
app.all('*',(req,res)=>{
    res.render('index')
})
const port= 5000

const start=async()=>{
try{
    await connectDb(process.env.mongoose_url)
    app.listen(port,console.log(`server is listening in port ${port}`))
}
catch(error){
    console.log(error)

}}

start();



