<template>
    <div :class="sidebar_gbColor" id="___sidebar___" class="flex flex-col h-screen"> 
        <div class="flex items-center h-12">
            <inertia-link class="flex items-center mt-2" href="/">
                <img class="h-12 block ml-4 w-12 scale-50" :src="'http://localhost:8080'+require('@asset/images/logo.jpg').default" />
                <div class="text-xl text-red-600 ml-3">Avored 管理系统</div>
            </inertia-link>
        </div>
    
        <div class="overflow-y-auto overflow-x-hidden h-screen bg-gray-800" id="_marol_sidebar">
            <slot></slot>
        </div>  
    </div>
</template>

<style>
.sidebar-collapsed #_marol_sidebar span[class~="items-center"] > span,
.sidebar-collapsed #_marol_sidebar span[class~="items-center"] + svg,
.sidebar-collapsed #___sidebar___ > div:first-child > a:first-child > div,
.sidebar-collapsed #_marol_sidebar > div[id] > div:last-child
{
    display: none;
}

.sidebar-collapsed > #___sidebar___
{
    overflow-x:hidden;
}

::-webkit-scrollbar
{
    width: .3em;
}


::-webkit-scrollbar-track 
{
    -webkit-box-shadow: inset 0 0 6px rgba(255,0,0,0.3);
}

::-webkit-scrollbar-thumb{
  background-color: darkgrey;
}

.sidebar-collapsed #_marol_sidebar > div[id]:hover > div:last-child {
    height:auto !important;
    position:absolute;
    left: 4.4rem;
    border: 1px solid #e4dede;
    background-color: #f9f8f8;
    display:block;
}

.sidebar-collapsed #_marol_sidebar >div[id] > div:last-child >div {
    padding-right:5rem;
}
</style>

<script>
export default {
    name:"SideBar",
    props:['sidebar_gbColor','sidebar_menu_hover_bgColor','sidebar_menu_bgColor']
}
</script>