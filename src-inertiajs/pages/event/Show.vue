<template>
<c-table :columns='[{"name":"#ID"},{"name":"名字"},{"name":"邮箱"},{"name":"地址"}]'>
</c-table>
</template>

<script>
export default {
	name: "show",
	props: {
		name:{
			type: String
		}
	}
}
</script>