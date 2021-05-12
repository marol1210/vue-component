<template>
	<div :id="id">
		<div class="flex justify-between cursor-pointer hover:text-white py-4 px-4" @click="toggleShow">
			<span class="flex flex-none">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
				<span v-if="menu.submenus">{{menu.name}}</span>
				<span v-else><inertia-link :href="menu.url">{{menu.name}}</inertia-link></span>
			</span>
			
            <svg v-if="menu.submenus" fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 ml-1">
                <path :class="show=='show' ? 'rotate-180' : '' " class="transition duration-300 ease-in-out origin-center transform" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
		</div> 
		
		<div v-if="menu.submenus" class="transition-all duartion-500 overflow-hidden -ml-4" :class="show" >
			<div v-for="(menu,mid) of menu.submenus" :key="pid+'_'+mid" class="-ml-5  flex flex-col cursor-pointer" :class="[theme.menu_hover_bgcolor , theme.menu_hover_textcolor]">
				<inertia-link class="py-2 pl-24" :href="menu.url">{{menu.name}}</inertia-link>
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
		pid:{
			type: Number
		},
		theme:{
			type: Object
		}
	},
	computed:{
		id:function() {
			return new Date().getTime() + '_menus_' + (this.pid ?? 'p0')
		}
	},
	data:function(){
		return {
			show:'hidding'
		}
	},
	mounted:function(){
		let node = document.getElementById(this.id).lastChild;
		node.style.height = node.scrollHeight+'px'
	},
	methods:{
		toggleShow:function(){
			var root = document.getElementsByClassName('sidebar-collapsed');
			if(root.length>0){
				return;
			}
		
			if(this.show != 'show' ) {
				this.show = 'show'
			}else{
				this.show = 'hidding'
			}
		}
	}
}
</script>