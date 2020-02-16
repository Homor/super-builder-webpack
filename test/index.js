const path = require('path');

// 单元测试需要将运行环境设置到template目录下去
process.chdir(path.join(__dirname, 'smoke/template/'));


describe('super-builder-webpack test case', () => {

  // 引入单元测试代码
  // eslint-disable-next-line global-require
  require('./unit/webpack-base-test.js');
});
