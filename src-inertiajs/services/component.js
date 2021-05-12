import CSidebar from './components/SideBar.vue'
import CMenu from './components/Menu.vue'
import CHeader from './components/Header.vue'
import CTable from './components/Table.vue'


export default {
	init:(Vue)=>{
		Vue.component('CSidebar',CSidebar)
		Vue.component('CMenu',CMenu)
		Vue.component('CHeader',CHeader)
		Vue.component('CTable',CTable)
	}
}