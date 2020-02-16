const assert = require('assert');
const baseConfig = require('../../lib/webpack.base.js');

console.log(process.cwd());

describe('webpack.base.js test case', () => {
  // console.log(baseConfig);
  it('entry', () => {
    // 判断entry是否是合理的
    assert.equal(baseConfig.entry.index.indexOf('super-builder-webpack/test/smoke/template/src/index/index.js') > 0, true );
    assert.equal(baseConfig.entry.search.indexOf('super-builder-webpack/test/smoke/template/src/search/index.js') > 0, true);
  });
});
