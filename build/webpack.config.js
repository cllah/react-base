/* webpack公共配置 */

const webpack = require('webpack');
const path = require('path'); //引入node模块里的path
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const config = {
	entry: './src/app.tsx', //入口文件
	output: {
        path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
		// publicPath: '/',
    },
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".json", ".css"],
		alias: {
			"@": path.resolve(__dirname, "../src"),
			"@public": path.resolve(__dirname, "../src/public"),
			"@pages": path.join(__dirname, "../src/pages"),
			"@router": path.join(__dirname, "../src/router"),
			"@components": path.join(__dirname, "../src/components"),
			"@common": path.join(__dirname, "../src/common"),
			"@conf": path.join(__dirname, "../src/conf"),
			"@redux": path.join(__dirname, "../src/redux"),
		}
	},
    module:{
		rules:[
			{
				test: /\.js$/,
				include:path.join(__dirname,'../src'),
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            }
			// {
			//   test:/\.css$/,
			//   use:[MiniCssPlugin.loader,'css-loader']
			// },
		]
	},
    plugins:[
		new webpack.DefinePlugin({NODE_ENV:JSON.stringify(process.env.NODE_ENV)}),
		new HtmlWebpackPlugin({
			filename: './index.html',
			inject: true,
			template: 'index.html',
			favicon: './public/image/favicon.ico'
		}),
		new AddAssetHtmlPlugin({
			filepath: path.resolve(__dirname, '../dll/*.dll.js'),
		}),
		new webpack.DllReferencePlugin({
			manifest: require(path.join(__dirname, '../dll', 'vendor.manifest.json')),
		}),
		new webpack.DllReferencePlugin({
			manifest: require(path.join(__dirname, '../dll', 'react.manifest.json')),
		}),
	],
};

module.exports = config;