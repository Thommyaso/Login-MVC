const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: paths.main.mainEntry,
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: paths.main.htmlTemplate,
            inject: 'body',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'images',
                        },
                    },
                ],
            },
        ],
    },
};
