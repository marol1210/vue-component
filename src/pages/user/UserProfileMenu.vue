<template>
<Menu as="div" class="relative inline-block text-left" v-slot="{ open }">
    <MenuButton
      class="transition duration-600 hover:text-white hover:bg-gray-700 inline-flex justify-center w-full px-4 py-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      :class='{ "text-white bg-opacity-30": open , "text-gray-400": !open}'
    > 
      <UserIcon class="w-5" />
      {{user.first_name}} {{user.last_name}}
      <ChevronDownIcon
        class="w-5 h-5 ml-2 -mr-1"
        :class='{ "text-white": open }'
        aria-hidden="true"
      />
    </MenuButton>

  <transition
    enter-active-class="transition duration-100 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-75 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <MenuItems
      class="z-50 absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div class="px-1 py-1">
        <MenuItem v-slot="{ active }">
          <button
            :class="[
              active ? 'bg-violet-500 text-white' : 'text-gray-900',
              'group flex rounded-md items-center w-full px-2 py-2 text-sm',
            ]"
          >
            <CogIcon
              :active="active"
              class="w-5 h-5 mr-2 text-violet-400"
              aria-hidden="true"
            />
            个人设置
          </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <button
            :class="[
              active ? 'bg-violet-500 text-white' : 'text-gray-900',
              'group flex rounded-md items-center w-full px-2 py-2 text-sm',
            ]"
          >
            <InformationCircleIcon
              :active="active"
              class="w-5 h-5 mr-2 text-violet-400"
              aria-hidden="true"
            />
            消息通知
          </button>
        </MenuItem>
      </div>
      <div class="px-1 py-1">
        <MenuItem v-slot="{ active }">
          <button
            :class="[
              active ? 'bg-violet-500 text-white' : 'text-gray-900',
              'group flex rounded-md items-center w-full px-2 py-2 text-sm',
            ]"
          >
            <UsersIcon
              :active="active"
              class="w-5 h-5 mr-2 text-violet-400"
              aria-hidden="true"
            />
            我的好友
          </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <button
            :class="[
              active ? 'bg-violet-500 text-white' : 'text-gray-900',
              'group flex rounded-md items-center w-full px-2 py-2 text-sm',
            ]"
          >
            <ClipboardListIcon
              :active="active"
              class="w-5 h-5 mr-2 text-violet-400"
              aria-hidden="true"
            />
            我的任务
          </button>
        </MenuItem>
      </div>

      <div class="px-1 py-1">
        <MenuItem v-slot="{ active }">
          <button
            @click="logout"
            :class="[
              active ? 'bg-violet-500 text-white' : 'text-gray-900',
              'group flex rounded-md items-center w-full px-2 py-2 text-sm',
            ]"
          >
            <LogoutIcon
              :active="active"
              class="w-5 h-5 mr-2 text-violet-400"
              aria-hidden="true"
            />
            退出
          </button>
        </MenuItem>
      </div>
    </MenuItems>
  </transition>
</Menu>

<form id="_logout" method="post">
<input type="hidden" name="_token" value="" />
</form>
</template>
<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon ,TrashIcon, LogoutIcon, InformationCircleIcon, UsersIcon, CogIcon, ClipboardListIcon } from '@heroicons/vue/outline';
import { UserIcon } from '@heroicons/vue/solid';
import { usePage } from '@inertiajs/inertia-vue3'

export default {
    name:"UserProfileMenu",
    components:{
      Menu,
      MenuButton,
      MenuItems,
      MenuItem,
      ChevronDownIcon,
      TrashIcon,
      LogoutIcon,
      UserIcon,
      UsersIcon,
      InformationCircleIcon,
      ClipboardListIcon,
      CogIcon
    },
    methods:{
        logout:function(){
            let form = document.getElementById('_logout');
            document.querySelector('#_logout > input[name="_token"]').value =  document.querySelector('meta[name="csrf-token"]').content;
            form.action= this.route('admin.logout');
            form.submit();
        }
    },
    computed:{
        user:function(){
            return {first_name:"after",last_name:"school"}
            return usePage().props.value.current_user
        }
    }
}
</script>