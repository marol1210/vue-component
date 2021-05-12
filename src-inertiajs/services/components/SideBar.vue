<template>
	<div :class="sidebar_gbColor" id="___sidebar___"> 
	    <div class="flex items-center h-12">
	        <a href="#" class="flex items-center mt-2">
	            <img class="h-12 block ml-4 w-12" src="/vendor/avored/image/logo_only.jpg" />
	            <div class="text-xl text-red-600 ml-3">ECRM</div>
	        </a>
	    </div>
	
        <div style="height: calc(100% - 4em)" :class="sidebar_menu_textColor" class="mt-4 overflow-y-auto overflow-x-hidden bg-gradient-to-b from-green-500 to-green-600 text-gray-200 h-full" id="_marol_sidebar">
	    	<slot>
	    		<c-menu class="flex flex-col" :menu="menu" :pid="pid" :key="pid" v-for="(menu,kname,pid) of menus" :theme="theme"></c-menu>
	    	</slot>
        </div>	
	</div>
</template>

<style>
.sidebar-collapsed #_marol_sidebar span[class~="items-center"] > span,
.sidebar-collapsed #_marol_sidebar span[class~="items-center"] + svg,
.sidebar-collapsed #___sidebar___ > div:first-child > a:first-child > div,
.sidebar-collapsed #_marol_sidebar > div[id] > div:last-child
{
    display: none;
}

.sidebar-collapsed > #___sidebar___
{
    overflow-x:hidden;
}

.sidebar-collapsed #_marol_sidebar > div[id]:hover > div:last-child {
    height:auto !important;
    position:absolute;
    left: 4.4rem;
    border: 1px solid #e4dede;
    background-color: #f9f8f8;
    display:block;
}

.sidebar-collapsed #_marol_sidebar >div[id] > div:last-child >div {
    padding-right:5rem;
}
</style>
<script>
	export default {
		name:"SideBar",
		props:['sidebar_gbColor','sidebar_menu_textColor','sidebar_menu_hover_bgColor','sidebar_menu_bgColor'],
		computed:{
		    menus() {
		        return this.$page.props.menus ?? this._config.menus
		    }
		},
		data: ()=> {
			return {
				theme:{
					"borderRadiu":"",
					"menu_bgcolor":"bg-indigo-800",
					"menu_hover_bgcolor":"hover:bg-indigo-900",
					"menu_hover_textcolor":"hover:text-white"
				}
			}
		}
	}
</script>