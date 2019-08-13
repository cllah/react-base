const merge = require('webpack-merge');
const config = require('./webpack.config.js')
const MiniCssPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require('path'); 
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件

module.exports = merge(config, {
	mode: 'production',
	output: {
		filename:'[name].[hash].js',
		publicPath: './',  //这里要放的是静态资源CDN的地址
	},
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
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ['*','!dll*']
		}),
		new MiniCssPlugin({
			filename:'./css/[name].[hash].css',
			chunkFilename: 'css/[id].[hash].css' 
		}),
		new OptimizeCssAssetsPlugin()
	],
	
});
