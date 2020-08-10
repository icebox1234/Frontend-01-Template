const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [["@babel/plugin-transform-react-jsx", { pragma: 'createElement' }]]
                    }
                }
            },
            {
                test: /\.css/,
                use: {
                    loader: require.resolve("./cssLoader.js")
                }
            }
        ]
    },
    mode: "development",
    optimization: {
        minimize: false
    }
};