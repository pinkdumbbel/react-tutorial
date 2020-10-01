const path = require('path');

module.exports = {
    name: 'WordRelay',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: [
            '.js', '.jsx'
        ]
    },

    entry: {
        app: ['./index']
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                ]
            }
        }]
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }
};