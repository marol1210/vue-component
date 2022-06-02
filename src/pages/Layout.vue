<template>
    <m-layout>
        <slot></slot>
    </m-layout>
</template>

<script>
import Layout from '@/pages/navigation/Index.vue'

export default {
	components:{
		"MLayout": Layout
	}
}
</script>