<template>
    <div>
        <NavBar :links="links"/>
        <slot />

        <footer class="footer footer-center p-4 bg-base-200 text-base-content fixed bottom-0 border-t-2 border-white mt-6">
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
    {name: "Current League Table", link: '/league-table'},
]

</script>

<style lang="scss" scoped>

</style>