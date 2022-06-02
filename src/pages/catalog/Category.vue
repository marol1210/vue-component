<template>
    <div class="flex space-x-4">
        <div v-for="(e,i) of paginate.data" :key="i" class="flex flex-col w-1/6 bg-gray-700 p-2 relative">
            <span>
                <b>类名：</b>{{e.name}}
            </span>
            <span>
                <b>slug：</b>{{e.slug}}
            </span>
            <span>
                <b>title：</b>{{e.meta_title}}
            </span>
            <span>
                <b>describe：</b>{{e.meta_description}}
            </span>

            <div class="flex flex-col absolute right-2">
                <span><IconDel></IconDel></span>
                <span><IconEdit></IconEdit></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        paginate: Object
    }
}
</script>