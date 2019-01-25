const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

console.log(process.env.npm_package_author_name);

console.log(process.env.NODE_ENV);
const setMode = process.env.NODE_ENV==='development' ? process.env.NODE_ENV : 'production';
console.log(setMode);

const client = {
  mode: setMode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'clientBundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    contentBase: './dist',
	compress: true,
  writeToDisk: true
  }
};


const server = {
  mode: setMode,
  entry: './src/server.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'server-es5.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  node: {// Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
        },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    contentBase: './dist',
  compress: true
  }
};


module.exports = [client, server];

//module.exports = config;