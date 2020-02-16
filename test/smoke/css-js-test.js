const globAll = require('glob-all');


describe('Checking generated css,js files', () => {
  it('should generate css,js files', (done) => {
    // 检测目录下是否生成了这两个文件
    const files = globAll.sync([
      './dist/index_*.js',
      './dist/index_*.css',
      './dist/search_*.js',
      './dist/search_*.css',
    ]);

    if (files.length > 0) {
      done();
    } else {
      throw new Error('no js,css files generate!');
    }
  });
});
