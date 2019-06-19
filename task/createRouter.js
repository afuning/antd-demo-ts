const fs = require('fs');
const path = require('path');
const readline = require('readline');

const routerConfigPath = path.resolve(__dirname, '../src/router/routerConfig.ts');

// let router = fs.readFileSync(routerConfigPath).toString();
// console.log(router);

// const r1 = readline.createInterface({
//   input: fs.createReadStream(routerConfigPath)
// });

// let i = 1;
// r1.on('line', function(line){ //事件监听
//   console.log('Line from file:' + i + ":" + line);
// 　i += 1;
// })

const rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入新增侧边栏名称', answer => {
  console.log(answer);

  rl.question('请输入新增侧边栏icon', answer => {
    console.log(answer);
  });
});
