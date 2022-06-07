const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;

const isDev = process.env.NODE_ENV == 'development';
const deps = require('./package.json').dependencies;

if (isDev) {
    console.log('Using dev mode!');
}

module.exports = {
    entry: path.join(__dirname, "src", "main.tsx"),
    mode: "development",

    output: {
        path: path.join(__dirname, "build"),
        filename: "react_bundle.js"
    },

    infrastructureLogging: {
        level: 'error',
    },

    devServer: {
        port: 3012,
        hot: true,

        // client: {
        //     logging: 'error'
        // }
    },

    stats: {
        modules: false,
        warnings: false
    },

    module: {
        rules: [
            {
                test: /\.(js||jsx||ts||tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                resolve: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"]
                }
            },

            {
                test: /\.module\.s(a|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDev,
                        }
                    }
                ]
            },

            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDev
                        }
                    }
                ]
            },

            {
                test: /\.css$/,
                exclude: /\.(s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },

    plugins: [
        ...[!isDev && 
            new ModuleFederationPlugin({
                name: 'childApp',
                filename: 'remoteEntry.js',
    
                exposes: {
                    './button': './src/components/button/index.tsx'
                },
                
                shared: {
                    'react': { requiredVersion: deps.react, singleton: true },
                    'react-dom': { requiredVersion: deps['react-dom'], singleton: true }
                }
            }),
        ].filter(Boolean),

        new HtmlWebpackPlugin({
            template: "src/index.html",
            alwaysWriteToDisk: true,
            minify: !isDev,
        }),

        new MiniCssExtractPlugin({ 
            filename: isDev? '[name].css' : '[name].[fullhash].css',
            chunkFilename: isDev? '[id].css' : '[id].[fullhash].css'
        }),
    ]
}