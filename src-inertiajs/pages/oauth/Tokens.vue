<template>
	<b-table :url="url" :columns="columns">
		<template v-slot:client="obj">
			{{obj.client.client.name}}
		</template>
	</b-table>
</template>

<script>
export default {
	name : 'Token',
	props: {
		url:{
			type:String,
			required:true
		},
		columns:{
			type:Array,
			required:true
		}
	}
}
</script>