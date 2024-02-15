<template>
    <div class="min-h-screen flex flex-col">
        <NavBar class="top-0 z-50" :links="links"/>
        <slot class="grow"/>
        <footer class="daisy-footer daisy-footer-center p-4 bg-base-200 text-base-content border-t-2 border-white sticky bottom-0 z-50">
            <aside>
                <p>Copyright © 2024 - Created by Harry Redman</p>
            </aside>
        </footer>
    </div>
</template>

<script setup>

const links = [
    {name: "Home", link: '/'},
    {name: "Match History", link: '/matches'},
    {name: "API Docs", link: '/docs'},
    {name: "Upcoming Fixtures", link: '/fixtures'},
    {name: "Upcoming Features", link: '/upcoming'},
    // {name: "Current League Table", link: '/league-table'},
]

</script>

<style lang="scss" scoped>

</style>