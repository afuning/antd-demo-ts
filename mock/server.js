const restify = require('restify');
const fs = require('fs');
const server = restify.createServer();

server.pre((req, res, next) => {
  req.headers.accept = 'application/json';
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  const {pathname} = req.getUrl();
  const modulePath = './modules' + pathname;
  try {
    const path = require.resolve(modulePath);
    let fnStr = fs.readFileSync(path).toString();
    let fn = new Function('module', fnStr);
    let moduleObj = {};
    fn(moduleObj)
    moduleObj.exports(req, res);
    next();
  } catch (error) {
    res.send({
      code: 1,
      msg: `查找不到${pathname}路径下的mock数据`
    })
    next();
  }
});
// server.get('/api/*', (req, res, next) => {
//   res.send({
//     msg: 'hahaha',
//     code: 'ok'
//   });
//   // const modulePath = '../mock' + req.originalUrl.split('?')[0]
//   console.dir(req.getRoute());
//   return next();
// });

server.listen(3001, function () {
  console.log('');
  console.log('');
  console.log('Mock Server is Started at 3001!!!');
  console.log('');
  console.log('');
});