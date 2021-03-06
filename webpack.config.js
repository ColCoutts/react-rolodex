const path = require( 'path' );
const webpack = require( 'webpack' );

const svgToMiniDataURI = require( 'mini-svg-data-uri' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content) => svgToMiniDataURI(content.toString()),
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom' 
    }
  },
  output: {
    // path: path.resolve( __dirname, 'dist/' ),
    // publicPath: '/dist/',
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join( __dirname, 'public/' ),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin( {
      inject: true,
      template: path.resolve('./public/index.html')
    })
  ]
};