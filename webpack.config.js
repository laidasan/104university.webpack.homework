const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const purgecss = require('@fullhuman/postcss-purgecss')


const config = {
    entry : {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader','css-loader','postcss-loader','sass-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(jpe?g|png|svg|gif)/i,
                use:{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 7777
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js'
        }
    }
}

module.exports = (env,argv) => {
    console.log(env,argv)

    if(argv.mode === 'production') {
        const scssUseLoaders = config.module.rules[2].use
        scssUseLoaders.splice(0,1,MiniCssExtractPlugin.loader)
    }


    return config
}
