const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const glob = require('glob');
const path = require('path');

// 获取当前运行环境的目录
const projectPath = process.cwd();
console.log(projectPath);

function setMPA() {
  const entrys = {};
  const htmlWebpackPlugins = [];

  const entryFiles = glob.sync(path.join(projectPath, './src/*/index.js'));
  console.log(entryFiles);

  // eslint-disable-next-line array-callback-return
  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    const pageName = match && match[1];

    entrys[pageName] = entryFile;

    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(projectPath, `./src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: ['vendors', pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minfyJS: true,
          removeComments: false,
        },
      // eslint-disable-next-line comma-dangle
      })
    );
  });

  return {
    entrys,
    htmlWebpackPlugins,
  };
}

const { entrys, htmlWebpackPlugins } = setMPA();

module.exports = {
  entry: entrys,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
          },
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          // "file-loader"
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]_[hash:8].[ext]',
            },
          }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    // 这里可以检测到构架错误
    function buildErrorFun() {
      this.hooks.done.tap('done', (stats) => {
        if (stats.compilation.errors
               && stats.compilation.errors.length
               && process.argv.indexOf('-watch') === -1) {
          console.log('build error');
          process.exit(1);
        }
      });
    },
  ].concat(htmlWebpackPlugins),
};
