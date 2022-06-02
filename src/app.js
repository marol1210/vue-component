import { createApp, h } from 'vue'
import { createInertiaApp,InertiaLink} from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
InertiaProgress.init({delay:50})

import Layout from '@/pages/Layout.vue'

//icon
import { TrashIcon , PencilAltIcon,EyeIcon } from '@heroicons/vue/solid'

/* inertiajs */
createInertiaApp({
  resolve: name => {
	  var page = require(`./pages/${name}`).default
	  page.layout = page.layout || Layout
	  return page
  },
  setup({ el, app, props, plugin }) {
    let vm = createApp({ render: () => h(app, props) })
        vm.config.globalProperties.$route = route
        vm.component('inertia-link' , InertiaLink)
        vm.component('TrashIcon' , TrashIcon)
        vm.component('IconEdit' , PencilAltIcon)
        vm.component('EyeIcon' , EyeIcon)
        vm.use(plugin)
        vm.mount(el)
  }
})