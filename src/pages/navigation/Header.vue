<template>
	<div class="z-1 shadow-md p-0 mb-2">
	    <div class="flex h-12 items-center">
	        <div class="mr-auto cursor-pointer">
	            <svg 
	                xmlns="http://www.w3.org/2000/svg" 
	                class="transition duration-600 w-5 h-5 fill-current text-gray-400 hover:text-white"
	                @click="$emit('sidebar')"
	            ><path d="M1 1h18v2H1V1zm6 8h12v2H7V9zm-6 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2zM1 6l4 4-4 4V6z"/>
	            </svg>
	        </div>
	        
	        <div class="ml-auto flex items-center">
	            <div class="relative inset-0" @click="this.$parent.isVisible = false">
                    <UserProfile />
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
import UserProfile from '@/pages/user/UserProfileMenu'
export default {
	name: "Header",
	components:{
	   UserProfile
	},
	computed:{
		layout:function(){
			return '退出';
		}
	}
}
</script>