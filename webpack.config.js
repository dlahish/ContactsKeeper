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
          presets: ['react', 'es2015']
        }
      }]
    },
    resolve: {
    extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
};
