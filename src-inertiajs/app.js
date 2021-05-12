import { createApp, h } from 'vue'
import './asset/css/tailwind/app.css'
import { App, plugin } from '@inertiajs/inertia-vue3'
import path from 'path'
import { InertiaProgress } from '@inertiajs/progress'
InertiaProgress.init({delay:50})

//self modules
import Layout from './pages/layout/Default'
import Component   from '@/services/component'

let data_set = '{"component":"event/Show","props":{"event":{"id":80,"title":"Birthday party","start_date":"2019-06-02","description":"Come out and celebrate Jonathan&apos;s 36th birthday party!"}},"url":"/","version":"c32b8e4965f418ad16eaebba1d4e960f"}';

const el = document.getElementById('app')
const app = createApp({
  render: () => h(App, {
    initialPage: JSON.parse(data_set),
    resolveComponent: name => {
			return import(`./pages/${name}`)
				  .then(({ default: page }) => {
				    page.layout = Layout
				    return page
		  	})
      }
  })
})
.use(plugin)

Component.init(app)
/*
app.component('CSidebar',Component.CSidebar)
app.component('CMenu',Component.CMenu)
app.component('CHeader',Component.CHeader)
*/

app.mixin({
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
  },
  computed:{
	_config: function(){
		return require('./defaultConfig')
	}
  }
})

app.mount(el)