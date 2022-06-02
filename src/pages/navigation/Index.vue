<template>
    <div class="flex h-screen overflow-y-auto">
        <div :class="sidebar ? 'w-14 z-0 sidebar-collapsed' : 'w-64'" class="transition-all duration-300">
           	<CSidebar  class="overflow-y-auto overflow-x-hidden">
            	<CMenu class="flex flex-col" 
            	   :menu="menu" :key="id" :m_key="menu.key" v-for="(menu,key,id) of menus"
            	>
            	</CMenu>
           	</CSidebar>
        </div>
        
        <div class="flex-grow text-gray-300 px-5">
           	<!-- page_header -->
        	<CHeader 
        		v-on:sidebar="sidebar=!sidebar"
        		v-on:visible="isVisible=$event"
        	></CHeader>

            <!-- page_content -->
            <div>
                <!-- breadcrumb -->
                <div v-html="breadcrumb"></div>
                <!-- main_content -->
        		<slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import CSidebar from '@/pages/navigation/SideBar.vue'
import CMenu from '@/pages/navigation/Menu.vue'
import CHeader from '@/pages/navigation/Header.vue'
import { usePage } from '@inertiajs/inertia-vue3'

export default {
	name:"Base",
	components:{
	   CSidebar,
	   CMenu,
	   CHeader
	},
	data(){
		return {
	        collapsed: false,
	        isVisible: false,
	        leftSideNavMenu: false,
	        sidebar: false,
	        pageTitle:''
		}
	},
	computed:{
	    menus(){
            return usePage().props.value.menus.admin
	    },
        breadcrumb(){
            return usePage().props.value.breadcrumb
        }
	}
}
</script>