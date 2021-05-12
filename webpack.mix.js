let mix = require('laravel-mix');
let htmlWebPlugin = require('html-webpack-plugin');
let path = require('path');

mix.alias({'@': 'src-inertiajs'}).setPublicPath('./dist')

mix
	.webpackConfig({
	  	mode: 'development',
		entry:__dirname+"/src-inertiajs/app.js",
	    output: { 
			path: path.resolve(__dirname, 'dist'),
			chunkFilename: '[name].js?id=[chunkhash]' ,
			clean:true
		},
		/*
		plugins:[
			new htmlWebPlugin(
				{
					title:"Demo",
					scriptLoading:"blocking"
				}
			)
		]
		*/
  })
  .vue()