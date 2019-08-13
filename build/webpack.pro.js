const merge = require('webpack-merge');
const config = require('./webpack.config.js')
const MiniCssPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require('path'); 

module.exports = merge(config, {
	mode: 'production',
	module: {
		rules: [
			{
				test:/\.(sass|scss)$/,
				use:[
					{
						loader: MiniCssPlugin.loader,
						options: {
						  hmr: false,
						},
					  },
					'css-loader',
					{
						loader: "postcss-loader",
						options: {
							plugins: [
								require("autoprefixer")
							]
						}
					},
					'sass-loader',
				]
			}
		]
	},
    plugins:[
		new CleanWebpackPlugin(),
		new MiniCssPlugin({
			filename:'./css/[name].[hash].css',
			chunkFilename: 'css/[id].[hash].css' 
		})
	],
	
});
