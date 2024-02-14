<template>
        <h1 class="text-xl">Welcome to this api on Derby County results, this API allows you to fetch any match score in Derby County's history and all their upcoming fixtures</h1>
            <h2 class="text-lg">This API is continuely being improved, with the hopes of eventually getting all the data/stats from each match</h2>

            <div class="w-1/2 mx-auto m-6">
  <table class="daisy-table border-2 border-white my-24">
    <!-- head -->
    <thead>
      <tr>
        <th>#</th>
        <th>Team</th>
        <th>P</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      <tr class="daisy-hover" v-for="(leagueRow, index) in leagueTable" :key="index">
        <th>{{}}</th>
        <th>{{}}</th>
        <th>{{}}</th>
        <th>{{}}</th>
        <th>{{}}</th>
        <th>{{}}</th>
        <th>{{}}</th>
        <th>{{}}</th>
    </tr>
    <th>{{}}</th>
    </tbody>
  </table>
</div>

</template>

<script setup>

</script>

<style lang="scss" scoped>


</style>