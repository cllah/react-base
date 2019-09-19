const merge = require('webpack-merge');
const config = require('./webpack.config.js')
// const MiniCssPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
	mode: 'development',
	devServer:{
		contentBase:'../dist',
		port:3000,
		compress:true,// 服务器压缩
		open:true,// 自动打开浏览器
		hot:true//热更新
	},
	devtool:'eval-source-map',
	module: {
		rules: [
			{
				test:/\.(sass|scss)$/,
				use:[
					'style-loader',
					// {
					// 	loader: MiniCssPlugin.loader,
					// 	options: {
					// 	  hmr: true,
					// 	},
					//   },
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
		// new MiniCssPlugin({
		// 	filename:'./css/[name].css',
		// 	chunkFilename: 'css/[id].css' 
		// })
	],
});
