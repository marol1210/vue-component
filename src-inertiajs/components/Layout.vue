<template>
	<div class="xl:h-screen xl:flex xl:flex-col">
		<div class="md:flex md:flex-grow md:overflow-hidden">
			<div class="bg-indigo-800 flex-shrink-0 w-56 p-5 overflow-y-auto">
				 <ul class="text-white">
					<c-menu url="a" v-for="(menu,index) of  menus" :key="index" :id="index+'_li'" :menu="menu"></c-menu>
				 </ul>
			</div>
		</div>
	</div>
</template>


<script>
import Menu from './Menu'

export default {
	components:{
		"c-menu":Menu
	},
	name:"marol-layout",
	props: {
      title: String,
      menus: Object
    },
    methods:{
    	show(elementId){
    		$elm = document.getElementById(elementId).item(0).lastElementChild;
    		$elm.style="height:"+$elm.scrollHeight+"px";
    	},
    	hide(elementId){
    		$elm = document.getElementById(elementId).item(0).lastElementChild;
    		$elm.style="height:0px";
    	}
    }
}
</script>