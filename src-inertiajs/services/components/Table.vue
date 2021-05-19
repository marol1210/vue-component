<template>
<div class="p-4 shadow-md" :class="[c_transtion, _config.theme.bgColor]">
		<div class="card-header">
			<slot name="title">title</slot>
			<slot name="action">
			 <Menu class="relative float-right" as="div">
			    <MenuButton class="flex">
				    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
					</svg>
				</MenuButton>
			    <MenuItems class="flex flex-col absolute right-0 bg-gray-500 w-48">
			      <MenuItem v-slot="{ active }">
			        <a :class='{ "bg-red-500": active }' class="text-red-300" href="/account-settings">
			          删除
			        </a>
			      </MenuItem>
			      <MenuItem v-slot="{ active }">
			        <a :class='{ "bg-blue-500": active }' href="/account-settings">
			          刷新
			        </a>
			      </MenuItem>
			      <MenuItem disabled>
			        <span class="opacity-75">Invite a friend (coming soon!)</span>
			      </MenuItem>
			    </MenuItems>
			  </Menu>
			</slot>
		</div>
	
		<div>
			<table class="border-collapse w-full">
				<thead class="text-primary" v-if="show_thead">
					<tr class="p-3">
						<td class="p-2" v-for="col of columns">{{col.name}}</td>
					</tr>
				</thead>
				<tbody>
					<tr v-for="rows of dataSource" class="border-t border-gray-700">
						<td class="p-2" v-for="col of columns">{{rows[col.fieldName]}}</td>
					</tr>
				</tbody>
			</table>
		</div>
</div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
	components:{
		Menu,
		MenuButton,
		MenuItems,
		MenuItem
	},
	name: "Table",
	data:function(){
		return {
			c_transtion: '',
			dataSource: this.data,
			show_thead: this.show
		}
	},
	props: {
		columns:{
			type: Array,
			require:true
		},
		show:{
			type:Boolean,
			default:true
		},
		//数据
		data:{
			type:Array,
			default: () => []
		},
		//数据来源url
		dataUrl:{
			type:String
		},
		headTitle:{
			type: String,
			default:'表格Demo'
		},
		actions:{
			type:Array
		}
	},
	created:function(){
		this.c_transtion = 'transform scale-90 opacity-0'
	},
	mounted:function(){
		this.c_transtion = 'transition ease-in-out transform duration-500 scale-100'
		if(this.dataSource.length<=0){
			this.dataSource.push( {id:"1" , name:"cctv" , email:"cctv@sina.com", address:'cctv'} )
			this.dataSource.push( {id:"2" , name:"marol" , email:"marol@sina.com", address:'marol'} )
			this.dataSource.push( {id:"3" , name:"after_school" , email:"after_school@sina.com", address:'after_school'} )
		}
	}
}
</script>