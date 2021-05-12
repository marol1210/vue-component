<template>
<div class="rounded-md bg-gray-600 p-4 shadow-md">
	<slot name="default">
		<div class="card-header">
			<slot name="action" :actions="[1,2]">
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
			<table class="border-collapse w-full ">
				<thead class="text-primary">
					<tr>
						<td v-for="col of columns">{{col.name}}</td>
					</tr>
				</thead>
				<tbody>
					<tr v-for="rows of data">
						<td v-for="col of columns">{{}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</slot>
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
	props: {
		columns:{
			type: Array,
			require:true,
			default: () => [
				{"name":"ID"},
				{"name":"名字"},
				{"name":"邮箱"},
				{"name":"地址"}
			]
		},
		data:{
			type:Array
		},
		headTitle:{
			type: String,
			default:'表格Demo'
		},
		actions:{
			type:Array
		}
	}
}
</script>