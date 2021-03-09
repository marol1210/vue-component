<template>
	<div :id="id">
		<div class="flex justify-between cursor-pointer hover:bg-gray-200 pr-4 py-4" @click="toggleShow">
			<span class="flex items-center">
	            <zondicon
	                class="menu-icon fill-current h-4 w-4 mx-4"
	                :icon="menu.icon"
	            ></zondicon>
				<span v-if="menu.submenus">{{menu.name}}</span>
				<span v-else><a :href="menu.url">{{menu.name}}</a></span>
			</span>
			<svg v-if="menu.submenus" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="[show=='show' ? 'transform '+svg_rotate_class : '']" class="h-4 w-4 duration-700 self-center"><path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
		</div>
		
		<div v-if="menu.submenus" class="overflow-hidden h-0" :class="show" >
			<div v-for="(menu,mid) of menu.submenus" :key="pid+'_'+mid" class="-ml-12 flex flex-col cursor-pointer" :class="[theme.menu_hover_bgcolor , theme.menu_hover_textcolor]">
				<inertia-link :href="$route(menu.route_name,menu.route_params)" class="pl-24 py-2">{{menu.name}}</inertia-link>
			</div>
		</div>
	</div>
</template>

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
			return new Date().getTime()+'_menus_'+this.pid
		}
	},
	data:function(){
		return {
			show:'',
			svg_rotate_class:'rotate-90'
		}
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

			this.$nextTick(function () {
				let node = document.getElementById(this.id).lastChild;
				if(node.className.split(' ').indexOf('show')){
					node.style.height = node.scrollHeight+'px'
				}
			})
		}
	}
}
</script>