/* webpack公共配置 */

const webpack = require('webpack');
const path = require('path'); //引入node模块里的path
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './src/app.js', //入口文件
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module:{
		rules:[
			// {
			//   test:/\.css$/,
			//   use:[MiniCssPlugin.loader,'css-loader']
			// },
		]
	},
    plugins:[
		new webpack.DefinePlugin({NODE_ENV:JSON.stringify(process.env.NODE_ENV)}),
		new HtmlWebpackPlugin({
			favicon: './public/image/favicon.ico'
		})
	],
};

module.exports = config;