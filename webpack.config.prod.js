module.exports = {
    entry: "./src/index.js",
    output: {
        path: './bin',
        filename: "bundle.js"
    },
    module: {
      loaders: [{
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015', 'stage-1']
          }
        },
        {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file"
        },
        { test: /\.json$/, loader: "json-loader" }
      ]
    },
    plugins:[
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress:{
          warnings: true
        }
      })
    ],
    resolve: {
    extensions: ['', '.js', '.jsx']
    }
};
