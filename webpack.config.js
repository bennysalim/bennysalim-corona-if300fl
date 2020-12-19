var webpack = require('webpack');
var path = require('path')

module.exports = {
    mode: "development",
    entry:path.resolve(__dirname, 'src') + "/components/Cards/Cards.jsx",
    output: {
        path: path.resolve(__dirname, 'dist') + "/app",
        filename: 'bundle.js',
        publicPath: '/app/'
      },
    resolve:{
        extensions: ['', '.js', '.jsx']
    }
};