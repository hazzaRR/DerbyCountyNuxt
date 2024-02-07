<template>
<div class="navbar relative bg-base-200 w border-y-2 border-white">
  <div class="flex-1">
    <NuxtLink to="/" class="btn btn-ghost normal-case text-xl w-32 h-24"><img class="md:w-32 md:h-24 w-16 h-12" src="~/assets/ram-white.png" alt=""></NuxtLink>
    <NuxtLink to="/" class="btn btn-ghost normal-case md:text-xl text-sm">Derby County API</NuxtLink>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
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