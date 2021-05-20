<template>
    <div class="flex items-start bg-gradient-to-r to-black from-gray-900 h-screen overflow-y-auto overflow-x-hidden">
        <div :class="sidebar ? 'w-14 z-0 sidebar-collapsed' : 'w-64'" class="flex-initial transition-all duration-300">
           	<c-sidebar :sidebar_menu_bgColor="sidebar_menu_bgColor" 
           				:sidebar_menu_hover_bgColor="sidebar_menu_hover_bgColor" 
           				:sidebar_gbColor="sidebar_gbColor" 
           				:sidebar_menu_textColor="sidebar_menu_textColor"
           				class="overflow-y-auto overflow-x-hidden"
           	>
           	</c-sidebar>
        </div>
        
        <div class="flex-grow text-gray-300" :style="sidebar ?  '' :  'width:calc(100vw - 16rem)'">
           	<!-- page_header -->
        	<c-header 
        		v-on:sidebar="sidebar=!sidebar"
        		v-on:visible="isVisible=$event"
        	></c-header>
        	
			<!-- page_breadcrumb -->
			<div class="ml-4" v-html="breadTrumb"></div>

			<!-- page_title -->
            <h1 class="mx-4 px-4">
		        <div class="flex items-center">
			        <div class="text-xl font-semibold">
			            {{ page_title }}
			        </div>
			    </div>
            </h1>
            
            <!-- page_content -->
            <div class="flex flex-col space-y-6 h-screen p-2 h-screen" style="height:calc(100vh - 5rem)">
        		<slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name:"Layout",
	data:()=>{
		return {
	        collapsed: false,
	        isVisible: false,
	        leftSideNavMenu: false,
	        sidebar: false,
	        pageTitle:''
		}
	},
	computed:{
	    sidebar_menu_hover_bgColor() {
	   		"hover:bg-gray-600"
	    },
	    sidebar_gbColor() {
	   		"bg-opacity-0 bg-black"
	    },
	    sidebar_menu_bgColor() {
	   		"bg-gray-600"
	    },
	    sidebar_menu_textColor() {
	   		"text-black"
	    },
	    page_title:function(){
	    	return this.pageTitle
	    },
	    breadTrumb:function(){
	    	return  this.$page.props.breadcrumb
	    }
	}
}
</script>