<template>
<div class="md:flex sm:block justify-around mb-5" v-html="orderWidget + customerWidget + revenueWidget">
</div>
</template>

<script>
export default {
	name: "Dashborad",
	props:['orderWidget','customerWidget','revenueWidget']
}
</script>