var express = require('express');
var router = express.Router();

/* GET home page. */
//get请求方式--浏览器回车
router.get('/', function(req, res, next) {//‘/’为路径，get请求方式，回调函数，买火车票。

  res.render('index', { title: 'Express' }); //返回模板
   //index对应的是view下的index的文件
});

module.exports = router;
//路由定义结构：app.method(path,handler)
//method为http请求方式，path为服务器上面的路径，handler为当路由匹配时执行的函数。
