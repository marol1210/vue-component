<template>
<c-card class="w-1/2">
	<template v-slot:head>
		<slot name="title">
			{{title}}
		</slot>
	</template>	
	
	<template v-slot:content>
		<form class="flex flex-wrap" :class="[_config.theme.bgColor , format=='col' ? ' flex-col space-y-5 ' : ' flex-row '  ]" >
			<slot name="content">
                <div class="flex items-center group w-1/2 p-1 focus-within:text-blue-600 text-gray-300" v-for="field of fields">
                    <label :for="field.fieldName" class="absolute flex ml-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
                    </label>
                    <input :id="field.fieldName" :type=" field.type ?? '' " :name="field.fieldName" class="flex-1 pl-12 placeholder-gray-500 placeholder-opacity-25" :placeholder="field.name"/>
                    <select v-if="field.type=='select'">
                        <option v-for="opt of field.options" :value="opt.value">{{opt.name}}</option>
                    </select>
                </div>
			</slot>
			
			<slot name="action">
				<div class="text-right">
					<button v-for="btn of actions">{{btn.name}}</button>
				</div>
			</slot>
		</form>
	</template>
</c-card>
</template>

<script>
export default {
	name: "Form",
	data:function(){
		return {
			fields: this.fields,
			actions: this.actions,
			title: this.title,
			format: this.format
		}
	},
	props: {
		fields:{
			type: Array
		},
		title:{
			type: String
		},		
		actions:{
			type: Array
		},
		format:{
			type: String
		}
	}
}
</script>