
//封装dao方法 操作数据

var MongoClient = require("mongodb").MongoClient;

//建立连接
function _connectDB(callback){
    var url = "mongodb://localhost:27017/mybase";
    MongoClient.connect(url,function(err,db){
        if(err){
            callback(err,null);
            return;
        };
        callback(err,db);
    });
}

//插入数据
//db.collection("student").insert({});
exports.insert = function(collectionName,json,callback){
    _connectDB(function(err,db){
/*        if(err){
            callback(err,null);
        }*/
        db.collection(collectionName).insert(json,function(err,docs){
            //if(err){
            //    callback(err,null);
            //}
            callback(err,docs);
            db.close();
        });
    })
}

//查询数据
//db.collection("student").find({});
exports.find = function(collectionName,json,callback){
    _connectDB(function(err,db){
        var data = db.collection(collectionName).find(json);
        data.toArray(function(err,docs){
            if(err){
                callback(err,null);
                return;
                db.close();
            }
            callback(err,docs);
            db.close();
        })
    })
}


