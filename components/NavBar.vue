<template>
<!-- <div class="navbar relative bg-base-200 border-y-2 border-white">
  <div class="flex-1">
    <NuxtLink to="/" class="btn btn-ghost normal-case text-xl w-32 h-24"><img class="md:w-32 md:h-24 w-16 h-12" src="~/assets/ram-white.png" alt=""></NuxtLink>
    <NuxtLink to="/" class="btn btn-ghost normal-case md:text-xl text-sm">Derby County API</NuxtLink>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li v-for="(link, index) in links" :key="index"><NuxtLink class="text-xs md:text-base" :to="link.link">{{link.name}}</NuxtLink></li>
    </ul>
  </div>
</div> -->

<div class="daisy-navbar relative bg-base-200 border-y-2 border-white">
  <div class="daisy-navbar-start">
    <div class="daisy-dropdown">
      <div tabindex="0" role="button" class="daisy-btn daisy-btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="daisy-menu daisy-menu-sm daisy-dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li v-for="(link, index) in links" :key="index"><NuxtLink class="text-xs md:text-base" :to="link.link">{{link.name}}</NuxtLink></li>
      </ul>
    </div>
    <NuxtLink to="/" class="daisy-btn daisy-btn-ghost normal-case text-xl w-32 h-24"><img class="md:w-32 md:h-24 w-16 h-12" src="~/assets/ram-white.png" alt=""></NuxtLink>
    <NuxtLink to="/" class="daisy-btn daisy-btn-ghost normal-case md:text-xl text-sm">Derby County API</NuxtLink>
  </div>
  <div class="daisy-navbar-end hidden lg:flex">
    <ul class="daisy-menu daisy-menu-horizontal px-1">
      <li v-for="(link, index) in links" :key="index"><NuxtLink class="text-xs md:text-base" :to="link.link">{{link.name}}</NuxtLink></li>
    </ul>
  </div>
</div>
</template>

<script setup>

const props = defineProps(['links'])

</script>

<style lang="scss" scoped>

</style>