import Vue from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue'
import './asset/css/tailwind/app.css'
import VueMeta from 'vue-meta'
import './services/components'
import i18n from './services/i18n'
import path from 'path'

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers['content-type'] = 'application/json'
window.axios.defaults.responseType='json'
window.axios.defaults.transformResponse = [function (data) {
	return data;
}];


import { InertiaProgress } from '@inertiajs/progress'
InertiaProgress.init({delay:50})

//自定义
import Layout from './pages/layout/Default'


Vue.use(plugin)
Vue.use(VueMeta)

const el = document.getElementById('app')
Vue.prototype.$route = route

//为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  methods:{
	  axiosRequest(axiosOptions){
        return axios(axiosOptions).then(function (response) {
        	return response;
	 	}).catch(function (error) {
	 	     if (error.response) {
	 	       // The request was made and the server responded with a status code
	 	       // that falls out of the range of 2xx
	 	       console.log(error.response.data);
	 	       console.log(error.response.status);
	 	       console.log(error.response.headers);
	 	     } else if (error.request) {
	 	       // The request was made but no response was received
	 	       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
	 	       // http.ClientRequest in node.js
	 	       console.log(error.request);
	 	     } else {
	 	       // Something happened in setting up the request that triggered an Error
	 	       console.log('Error', error.message);
	 	     }
	 	     console.log(error.config);
 	   });
	  }
  }
})

new Vue({
  i18n,
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: name => {
			if(`${name}`.startsWith('avored')){
				let _path = `${name}`.split(path.sep)
				_path = _path.slice(1)
				let _name = './components/'+_path.join('/')
				let c = require(`${_name}`).default
				c.layout = Layout
				return c
			}

			return import(`./pages/${name}`)
				  .then(({ default: page }) => {
				    page.layout = Layout
				    return page
		  	})
      }
    },
  })
}).$mount(el)