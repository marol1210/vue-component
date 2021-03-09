<template>
	<b-table 
		:url="url"
		:columns="columns"
	>
	</b-table>
</template>

<script>
export default {
	name : 'client',
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