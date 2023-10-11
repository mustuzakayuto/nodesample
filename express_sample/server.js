const express = require("express")
const dotenv = require("dotenv")
const routes = require("./routes")

dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

const app = express()
app.use(express.static(__dirname + "/public"))

app.use(express.urlencoded({extended:true}))

app.use(routes)

app.get("/",(req,res)=>{
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    res.send("Hello!!!!!!!")
})
app.get("/profile",(req,res)=>{
    res.send("プロフィール!!!")
})
app.post("/auth",(req,res)=>{
    
    var loginName = req.body.login_name
    var password = req.body.password
    
    var message="ログイン失敗"
    console.log(loginName,password)
    if (loginName==process.env.LOGIN_NAME
        && password== process.env.PASSWORD){
            message="ログイン成功"
    } else {
        // TODO ログイン画面に戻す
    }
    
    res.send(message)
})
app.listen(PORT,HOST,()=>{
    console.log(HOST)
    console.log(PORT)
    console.log("wait...")
})
