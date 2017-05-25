
//express框架
var express = require("express");
var app = express();
var ejs = require("ejs");
//模版
app.set("view engine","ejs");

//引入controller
var route = require("./controller/route.js");

//引入静态文件
app.use(express.static("./public"));

//路由
app.get("/",route.showIndex);

app.post("/",function(req,res){
    res.send("hello");
});
//监听
app.listen(8888);

