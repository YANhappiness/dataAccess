
//控制层
var file = require("../modle/file.js");

//对数据库进行查询
exports.showIndex = function(req,res){
    //res.render("index");
    file.find("student",{},function(err,docs){
        res.render("index",{"data":docs});
    })
}


//插入数据
/*
exports.showIndex = function(req,res){
    file.insert("student",{
        "name":"hello",
        "age":18,
        "sex":"男",
        "hobby":"游泳"
    },function(err,docs){
        if(err){
            throw err;
        }
        console.log("insert success");
        res.send("hello");
    })
};
*/




