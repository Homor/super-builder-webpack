{ entry:
    { index:
       '/Users/lihua/Desktop/store/webpack-learn-code/super-builder-webpack/test/smoke/template/src/index/index.js',
      search:
       '/Users/lihua/Desktop/store/webpack-learn-code/super-builder-webpack/test/smoke/template/src/search/index.js' },
   module:
    { rules:
       [ { test: /\.js$/, use: [ 'babel-loader', 'eslint-loader' ] },
         { test: /\.css$/,
           use:
            [ '/Users/lihua/Desktop/store/webpack-learn-code/super-builder-webpack/node_modules/_mini-css-extract-plugin@0.9.0@mini-css-extract-plugin/dist/loader.js',
              'css-loader',
              { loader: 'postcss-loader' } ] },
         { test: /\.less/,
           use:
            [ '/Users/lihua/Desktop/store/webpack-learn-code/super-builder-webpack/node_modules/_mini-css-extract-plugin@0.9.0@mini-css-extract-plugin/dist/loader.js',
              'css-loader',
              { loader: 'postcss-loader' },
              'less-loader' ] },
         { test: /\.(png|jpg|jpeg|gif)$/,
           use:
            [ { loader: 'url-loader',
                options: { limit: 1024, name: '[name]_[hash:8].[ext]' } },
              { test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:
                 [ { loader: 'file-loader',
                     options: { name: '[name]_[hash:8].[ext]' } } ] } ] } ] },
   plugins:
    [ MiniCssExtractPlugin {
        options:
         { filename: '[name]_[contenthash:8].css',
           moduleFilename: [Function: moduleFilename],
           ignoreOrder: false,
           chunkFilename: '[name]_[contenthash:8].css' } },
      CleanWebpackPlugin {
        dangerouslyAllowCleanPatternsOutsideProject: false,
        dry: false,
        verbose: false,
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: true,
        cleanAfterEveryBuildPatterns: [],
        cleanOnceBeforeBuildPatterns: [ '**/*' ],
        currentAssets: [],
        initialClean: false,
        outputPath: '',
        apply: [Function: bound apply],
        handleInitial: [Function: bound handleInitial],
        handleDone: [Function: bound handleDone],
        removeFiles: [Function: bound removeFiles] },
      FriendlyErrorsWebpackPlugin {
        compilationSuccessInfo: {},
        onErrors: undefined,
        shouldClearConsole: true,
        formatters:
         [ [Function: format], [Function: format], [Function: format] ],
        transformers:
         [ [Function: transform],
           [Function: transform],
           [Function: transform] ] },
      [Function: buildErrorFun],
      HtmlWebpackPlugin {
        options:
         { template:
            '/Users/lihua/Desktop/store/webpack-learn-code/super-builder-webpack/test/smoke/template/src/index/index.html',
           templateParameters: [Function: templateParametersGenerator],
           filename: 'index.html',
           hash: false,
           inject: true,
           compile: true,
           favicon: false,
           minify:
            { html5: true,
              collapseWhitespace: true,
              preserveLineBreaks: false,
              minifyCSS: true,
              minfyJS: true,
              removeComments: false },
           cache: true,
           showErrors: true,
           chunks: [ 'vendors', 'index' ],
           excludeChunks: [],
           chunksSortMode: 'auto',
           meta: {},
           title: 'Webpack App',
           xhtml: false } },
      HtmlWebpackPlugin {
        options:
         { template:
            '/Users/lihua/Desktop/store/webpack-learn-code/super-builder-webpack/test/smoke/template/src/search/index.html',
           templateParameters: [Function: templateParametersGenerator],
           filename: 'search.html',
           hash: false,
           inject: true,
           compile: true,
           favicon: false,
           minify:
            { html5: true,
              collapseWhitespace: true,
              preserveLineBreaks: false,
              minifyCSS: true,
              minfyJS: true,
              removeComments: false },
           cache: true,
           showErrors: true,
           chunks: [ 'vendors', 'search' ],
           excludeChunks: [],
           chunksSortMode: 'auto',
           meta: {},
           title: 'Webpack App',
           xhtml: false } },
      OptimizeCssAssetsWebpackPlugin {
        pluginDescriptor: { name: 'OptimizeCssAssetsWebpackPlugin' },
        options:
         { assetProcessors:
            [ { phase: 'compilation.optimize-chunk-assets',
                regExp: /\.css$/g,
                processor: [Function: processor] } ],
           canPrint: undefined,
           assetNameRegExp: /\.css$/g,
           cssProcessor: { [Function: creator] process: [Function] },
           cssProcessorOptions: {},
           cssProcessorPluginOptions: {} },
        phaseAssetProcessors:
         { 'compilation.optimize-chunk-assets':
            [ { phase: 'compilation.optimize-chunk-assets',
                regExp: /\.css$/g,
                processor: [Function: processor] } ],
           'compilation.optimize-assets': [],
           emit: [] },
        deleteAssetsMap: {} } ],
   mode: 'production' }