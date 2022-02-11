const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

let conf = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    filename: 'main.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: true,
    }
  },
  plugins: [ new MiniCssExtractPlugin({
    chunkFilename: 'css/[name].css'
  })],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      { // файлы которые оканчиваются на .m.css
        test: /\.m\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'styleTag' } },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: {
                // importLoaders: 1,
                // modules: true,
                localIdentName: '[local]__[sha1:hash:hex:7]'
              }
            }
          }
        ],
      },
      { // файлы которые оканчиваются на .css
        test: /^((?!\.m).)*css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      { // файлы которые оканчиваются на .scss или .sass
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'styleTag' } },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: {
                // importLoaders: 1,
                // modules: true,
                localIdentName: '[local]__[sha1:hash:hex:7]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import "~@/assets/variables.scss";`
            }
          }
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}

module.exports = (env, options) => {
  const isProduction = options.mode === 'production'
  conf.devtool = isProduction ?  false : 'eval-cheap-module-source-map' // 'source-map' : 'eval-cheap-module-source-map'
  conf.target = 'browserslist'

  conf.plugins.push(
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    })
  )

  return conf
}
