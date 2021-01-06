const path = require('path');

module.exports = {
    // Inform webpack that we will be building a bundle for node js, rather than browser
    target: 'node',
    //root file of our app
    entry: './src/index.js',
    // where to put output files
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    //tell webpack to run babel on every file, to turn 2016, 2017 to ES5
    module: {
        rules: [
        {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                // used by babel to transpile
                presets: [
                    'react',// turn jsx to normal js
                    'stage-0',// for async code
                    ['env', {targets: {browsers: ['last 2 versions']}}]
                ]
            }
        }
        ]
    }
}