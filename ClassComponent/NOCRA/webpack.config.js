const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', //배포시 production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    //입력
    entry: {
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties'
                ]
            }
        }],
    },

    //츨력
    output: {
        //__dirname = 현태폴더
        //path로 합칠 파일 경로 설정
        path: path.join(__dirname, 'dist'),
        //합칠파일명
        filename: 'app.js'
    },
};