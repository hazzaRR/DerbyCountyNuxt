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
    {name: "Current League Table", link: '/league-table'},
]

</script>

<style lang="scss" scoped>

</style>