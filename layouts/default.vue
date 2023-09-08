<template>
    <div>
        <NavBar :links="links"/>
        <slot />
    </div>
</template>

<script setup>

const links = [
    {name: "Match History", link: '/matches'},
    {name: "Upcoming Fixtures", link: '/fixtures'},
]

</script>

<style lang="scss" scoped>

</style>