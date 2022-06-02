<template>
<div class="flex items-center justify-center bg-gray-900">
    <div class="overflow-auto lg:overflow-visible w-11/12 flex">
        <table class="table text-gray-400 border-separate space-y-6 text-sm grow">
            <thead class="bg-gray-800 text-gray-500">
                <tr>
                    <th class="p-3">NAME</th>
                    <th class="p-3 text-left">SLUG</th>
                    <th class="p-3t ext-left">META</th>
                    <th class="p-3 text-left">DESCRIPTION</th>
                    <th class="p-3 text-left">ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-800" v-for="(row , i) of data" :key="i">
                    <td class="p-2">
                        <div class="flex align-items-center">
                            <img class="rounded-full h-12 w-12   object-cover" :src="icon[i%3]" alt="unsplash image">
                            <div class="ml-3">
                                <div class="">{{row.name}}</div>
                                <div class="text-yellow-600">${{row.cost_price}}</div>
                            </div>
                        </div>
                    </td>
                    <td class="p-2">
                        {{row.slug}}
                    </td>
                    <td class="p-2 font-bold">
                        {{row.meta_title}}
                    </td>
                    <td class="p-2">
                        {{row.meta_description}}
                    </td>
                    <td class="p-2">
                        <div class="flex">
                            <a href="#" class="text-gray-400 hover:text-gray-100 mr-2">
                                <EyeIcon class="w-6">view</EyeIcon>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gray-100 mr-1">
                                <IconEdit class="w-6">edit</IconEdit>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gray-100 ml-1">
                                <TrashIcon class="w-6">delete</TrashIcon>
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="5" v-html="paginate_html"></th>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
</template>

<style>
	.table {
		border-spacing: 0 15px;
	}

	i {
		font-size: 1rem !important;
	}

	.table tr {
		border-radius: 20px;
	}

	tr td:last-child,
	tr th:last-child {
		border-radius: 0 .625rem .625rem 0;
	}

	tr td:nth-child(1),
	tr th:nth-child(1) {
		border-radius: .625rem 0 0 .625rem;
	}
</style>

<script>
let imgs = [
    "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80"
]

export default {
    props:{
        data: Object,
        paginate_html: String
    },
    data() {
        return {
                icon: imgs
            }
    },
    mounted(){
    }
}
</script>