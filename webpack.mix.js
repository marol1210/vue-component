let mix = require('laravel-mix');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

mix.options({
	hmrOptions:{
		host: "0.0.0.0",
        port: 8080
	}
})

mix
.alias({'@': 'src'})
.alias({'@asset': path.join(__dirname, 'asset')}).postCss('./asset/css/app.css','.',[require("tailwindcss")])

mix
    .webpackConfig({
        entry:{main:"./src/app.js"},
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        // plugins: [new HtmlWebpackPlugin()]
        devServer:{
            static: './dist',
            webSocketServer: false,
            allowedHosts: 'all'
        },
        optimization: {
            runtimeChunk: 'single',
        }
    })
    .vue()
