let mix = require('laravel-mix');
let path = require('path');

mix.alias({'@': 'src-inertiajs'})

mix.js('src-inertiajs/app.js', 'dist/avored')
	.webpackConfig({
	    output: { chunkFilename: 'dist/avored/[name].js?id=[chunkhash]' },
	    resolve: {
	      alias: {
	        vue$: 'vue/dist/vue.runtime.esm.js'
	      },
	    },
  })
  .vue();

mix.copy('dist/',path.normalize('F:\\eclipse\\git-repository\\laravel-ecommerce\\src\\public\\js'))