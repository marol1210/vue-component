<template>
    <div class="flex items-start">
        <div :class="sidebar ? 'w-14 z-0 transition sidebar-collapsed duration-500' : 'w-64'">
           	<side-bar :sidebar_menu_bgColor="sidebar_menu_bgColor" :sidebar_menu_hover_bgColor="sidebar_menu_hover_bgColor" :sidebar_gbColor="sidebar_gbColor" :sidebar_menu_textColor="sidebar_menu_textColor">
           	</side-bar>
        </div>
        <div class="w-full">
           	<!-- page_header -->
        	<c-header 
        		v-on:sidebar="sidebar=!sidebar"
        		v-on:visible="isVisible=$event"
        	></c-header>
        	
			<!-- page_breadcrumb -->
			<div class="ml-4 my-3" v-html="breadTrumb"></div>

			<!-- page_title -->
            <h1 class="mx-4 px-4 my-3">
		        <div class="text-gray-800 flex items-center">
			        <div class="text-xl text-red-700 font-semibold">
			            {{ page_title }}
			        </div>
			    </div>
            </h1>
            
            <!-- page_content -->
            <div class="rounded p-5 mx-3 my-3 bg-white">
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