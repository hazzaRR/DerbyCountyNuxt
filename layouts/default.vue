<template>
    <div class="min-h-screen flex flex-col">
        <NavBar :links="links"/>
        <slot class="grow"/>
        <footer class="footer footer-center p-4 bg-base-200 text-base-content border-t-2 border-white sticky bottom-0 z-50">
            <aside>
                <p>Copyright © 2024 - All right reserved by Harry Redman</p>
            </aside>
        </footer>
    </div>
</template>

<script setup>

const links = [
    {name: "Match History", link: '/matches'},
    {name: "Upcoming Fixtures", link: '/fixtures'},
    // {name: "Current League Table", link: '/league-table'},
]

</script>

<style lang="scss" scoped>

</style>