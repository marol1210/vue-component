<template>
	<li class="mb-4">
		<button 
  			@click="isVisible = !isVisible" 
  			class="w-full  flex justify-between items-center py-1 px-2 text-gray-200 cursor-pointer hover:text-white focus:outline-none">
  			<span class="flex items-center">
                <zondicon
                    class="menu-icon fill-current h-4 w-4"
                    :icon="menu.icon"
                ></zondicon>
                <span class="ml-6 menu-label font-medium">
                    {{menu.name}}
                </span>
            </span>

            <span class="menu-chevron-icon">
                <svg
                    class="h-4 w-4 transform duration-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    :class="[ isVisible ? 'rotate-90' : 'rotate-0']"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9 5L16 12L9 19"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            </span>
  		</button>
        <div
            v-if="true || sidebar || isVisible"
            class="overflow-hidden transition-all transform duration-500"
            ref="submenu_list"
            style="height:0px;n"
        >
            <div
                :key="index"
                v-for="(submenu, index) in menu.submenus"
                :class="sidebar ? 'bg-white' : ''"
            >
                <inertia-link as="button" type="button"
                    class="w-full py-2 cursor-pointer pl-12 pr-3 block text-sm text-gray-300 hover:bg-red-500 flex hover:text-white focus:outline-none"
                    href="/admin/first-component"
                >
                    {{ (submenu.name) }}
                </inertia-link>
            </div>
        </div>
	</li>
</template>

<script>
export default {
  props: {
    url: String,
    menu: Object,
    sidebar: {
        type: [Boolean],
        default: false
    }
  },
  data:() => {
  	return {
  		isVisible : false
  	}
  },
  watch:{
  	isVisible:function(newV, oldV){
  		if(newV){
  			this.$nextTick(function () {
  				this.$refs.submenu_list.style="height:"+this.$refs.submenu_list.scrollHeight+"px";
		  	})
  		}else{
  			this.$nextTick(function () {
  				this.$refs.submenu_list.style="height:0px";
		  	})
  		}
  	}
  },
  methods: {
    isUrl(...urls) {
      if (urls[0] === '') {
        return this.url === ''
      }
      return urls.filter(url => this.url.startsWith(url)).length
    }
  }
}
</script>