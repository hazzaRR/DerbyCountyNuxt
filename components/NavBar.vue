<template>
    <div>

<div class="navbar bg-base-100 w border-y-2 border-white mb-6">
  <div class="flex-1">
    <NuxtLink to="/" class="btn btn-ghost normal-case text-xl w-32 h-24"><img class="w-32 h-24" src="~/assets/ram-white.png" alt=""></NuxtLink>
    <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">Derby County history and stats</NuxtLink>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li v-for="(link, index) in links" :key="index"><NuxtLink :to="link.link">{{link.name}}</NuxtLink></li>
    </ul>
  </div>
</div>

    </div>
</template>

<script setup>

const props = defineProps(['links'])

</script>

<style lang="scss" scoped>

</style>