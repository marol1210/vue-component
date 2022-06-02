<template>
	<div :id="id">
		<div class="flex justify-between cursor-pointer hover:text-white hover:bg-gray-900 py-4 px-4 transition duration-200 text-gray-400 border-t border-gray-700" @click="toggleShow">
			<span class="flex flex-none">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
				<span v-if="menu.subMenu">{{menu.name}}</span>
				<span v-else><inertia-link :href="menu.url">{{menu.name}}</inertia-link></span>
			</span>
			
            <svg v-if="menu.subMenu" fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 ml-1">
                <path :class="isShow=='show' ? 'rotate-180' : '' " class="origin-center transform" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
		</div> 
		
		<div v-if="menu.subMenu" class="overflow-hidden -ml-4 transition-all duration-200 border-b border-gray-900 bg-stone-800 text-stone-500" :class="[isShow]" >
			<div v-for="(smenu,key,mid) of menu.subMenu" :key="mid" 
                class="-ml-5 flex flex-col cursor-pointer py-1 transition duration-200 hover:text-white hover:bg-gray-900"
                :id="currentMenu($route(smenu.route),$page.url)"
            >
				<inertia-link class="py-2 pl-24" :href="$route(smenu.route)">{{smenu.name}}</inertia-link>
			</div>
		</div>
		<span v-else ></span>
	</div>
</template>

<style>
.hidding {
	height:0px !important;
}
</style>

<script>
export default{
	name: "BaseMenu",
	props:{
		menu:{
			type: Object,
			default:()=>{}
		},
		m_key:{
			type: String
		}
	},
	computed:{
		id:function() {
			return new Date().getTime() + '_menus_' + (this.m_key ?? 'p0')
		}
	},
	data:function(){
		return {
			isShow:'hidding',
            toggleMenu: false 
		}
	},
	methods:{
		toggleShow:function(){
			var root = document.getElementsByClassName('sidebar-collapsed');
			if(root.length>0){
				return;
			}
		     let node = document.getElementById(this.id).lastChild;
             node.style.height = node.scrollHeight+'px'
		
			if(this.isShow != 'show' ) {
				this.isShow = 'show'
			}else{
				this.isShow = 'hidding'
			}
		},
        currentMenu(route,url){
            this.toggleMenu = true
            return  (url =='/' || route.lastIndexOf(url)<0) ? null : 'show'
        }
	}
}
</script>