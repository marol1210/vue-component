<template>
	<form class="space-y-5">
		<div>
			{{title}}
		</div>
		<div class="flex items-center" v-for="field of fields">
			<div :class="[red ? '' : 'text-red-200 px-5 w-1/3']" >{{field.name}}</div>
			<div><input class="transition-colors duration-500 bg-transparent border-2 border-blue-900 hover:border-blue-600  hover:border-opacity-100 border-opacity-30 p-2 outline-none"/></div>
		</div>
	</form>
</template>

<script>

export default {
	name: "Form",
	data:function(){
		return {
			fields: this.fields,
			title: this.title
		}
	},
	props: {
		fields:{
			type: Array
		},
		title:{
			type: String
		}
	}
}
</script>