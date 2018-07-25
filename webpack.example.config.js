var path = require('path');

module.exports = {
    mode: 'development',
    entry: './examples/demo.jsx',
    module: {
        rules: []
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'example.js',
    },
    // externals: [{
    //     jcolor: 'jcolor'
    // }],
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
            }
        }],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        // port: 9000,
        open: true
    },
    watch: true
};