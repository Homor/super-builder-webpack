const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
// const fs = require('fs');
const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: '10000ms',
});

// 测试的时候，运行环境需要进入到template的目录下来
process.chdir(path.join(__dirname, 'template'));

// 测试构建前，需要删除文件夹
rimraf('./dist', () => {
  console.log('开始引入配置模块');
  // 引入配置文件
  // eslint-disable-next-line global-require
  const prodConfig = require('../../lib/webpack.prod.js');
  // console.log(prodConfig);

  webpack(prodConfig, (err, stats) => {
    console.log('webpack end');
    if (err) {
      console.log(err);
      process.exit(2);
    }
    console.log(stats.toString({
      colors: true,
      modules: true,
      children: false,
    }));

    console.log('webpack build success,begin run test');

    mocha.addFile(path.join(__dirname, './html-test.js'));
    mocha.addFile(path.join(__dirname, './css-js-test.js'));

    mocha.run();
  });
});
