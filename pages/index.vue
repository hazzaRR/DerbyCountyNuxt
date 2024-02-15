<template>
  <div>

    <h1 class="text-xl">Welcome to this api on Derby County results, this API allows you to fetch any match score in Derby County's history and all their upcoming fixtures</h1>
    <h2 class="text-lg">This API is continuely being improved, with the hopes of eventually getting all the data/stats from each match</h2>
    
    <div class="md:w-1/2 w-full mx-auto m-6">
      <table class="daisy-table border-2 border-white my-24">
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
          <tr :class="{ 'border-t-2': index === 6 || index === 20 }" class="daisy-hover" v-for="(leagueRow, index) in leagueTable" :key="index">
        <th>{{leagueRow.leaguePosition}}</th>
        <th>{{leagueRow.team}}</th>
        <th>{{leagueRow.gamesPlayed}}</th>
        <th>{{leagueRow.wins}}</th>
        <th>{{leagueRow.draws}}</th>
        <th>{{leagueRow.losses}}</th>
        <th>{{leagueRow.goalsFor}}</th>
        <th>{{leagueRow.goalsAgainst}}</th>
        <th>{{leagueRow.goalDifference}}</th>
        <th>{{leagueRow.points}}</th>
      </tr>
    </tbody>
  </table>
</div>

</div>
</template>

<script setup>
import { getLeagueTable } from "~/composables/getLeagueTable";

const leagueTable = ref(null);

onBeforeMount(async () => {
  leagueTable.value = await getLeagueTable();
});

</script>

<style lang="scss" scoped>


</style>