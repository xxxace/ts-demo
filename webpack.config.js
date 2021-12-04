const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const config = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        environment: {
            arrowFunction: false
        }
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/env", {
                            targets: {
                                ie: "11"
                            },
                            corejs: "3",
                            useBuiltIns: "usage"
                        }]
                    ]
                }
            }, "ts-loader"],
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/env", {
                            targets: {ie: "11"},
                            corejs: "3",
                            useBuiltIns: "usage"
                        }]
                    ]
                }
            }],
            include: /html-entities/,
            exclude: /node_modules/,
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers: "last 2 versions"
                                    }
                                ]
                            ]
                        }
                    }
                },
                'less-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "ace-world",
            favicon: "./public/favorite.ico",
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: [".js", ".ts"]
    },
    devServer: {
        port: 8088,
        compress: true,
    }
}

module.exports = config
