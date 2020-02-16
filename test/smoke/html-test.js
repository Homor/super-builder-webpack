const globAll = require('glob-all');


describe('Checking generated html files', () => {
  it('should generate html files', (done) => {
    // 检测目录下是否生成了这两个文件
    const files = globAll.sync([
      './dist/index.html',
      './dist/search.html',
    ]);

    if (files.length > 0) {
      done();
    } else {
      throw new Error('no html files generate!');
    }
  });
});
