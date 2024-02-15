<template>
  <div>

    <h1 class="text-3xl mx-auto text-center my-4 font-black">WE ARE DERBY!</h1>

    <h1 class="text-xl">Welcome to this api on Derby County results, this API allows you to fetch any match score in Derby
      County's history and all their upcoming fixtures</h1>
    <h2 class="text-lg">This API is continuely being improved, with the hopes of eventually getting all the data/stats
      from each match</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 m-12">

      <div v-if="latestResult" class="daisy-stats daisy-stats-vertical lg:daisy-stats-horizontal shadow border-2 border-white">
        
        <div class="daisy-stat place-items-center">
          <div class="daisy-stat-title">Home Team</div>
          <div class="daisy-stat-value">{{ latestResult.homeTeam }}</div>
          <!-- <div class="daisy-stat-desc">Home team</div> -->
        </div>
        
        <div class="daisy-stat place-items-center">
          <div class="daisy-stat-title">Latest Result</div>
          <div v-if="latestResult.stadium != null || latestResult.stadium != ''" class="daisy-stat-desc">{{latestResult.stadium}}</div>
          <div class="daisy-stat-value text-blue-700">{{latestResult.homeScore}}-{{ latestResult.awayScore }}</div>
          <div class="daisy-stat-desc text-blue-700">{{new Date(latestResult.kickoff).toLocaleDateString()}}</div>
        </div>
        
        <div class="daisy-stat place-items-center">
          <div class="daisy-stat-title">Away Team</div>
          <div class="daisy-stat-value">{{ latestResult.awayTeam }}</div>
          <!-- <div class="daisy-stat-desc">Away team</div> -->
        </div>
        
      </div>
      <div v-if="nextFixture" class="daisy-stats daisy-stats-vertical lg:daisy-stats-horizontal shadow border-2 border-white">
        
        <div class="daisy-stat place-items-center">
          <div class="daisy-stat-title">Home Team</div>
          <div class="daisy-stat-value">{{nextFixture.homeTeam}}</div>
          <!-- <div class="daisy-stat-desc">Home team</div> -->
        </div>
        
        <div class="daisy-stat place-items-center">
          <div class="daisy-stat-title">Next Fixture</div>
          <div v-if="nextFixture.stadium != null || nextFixture.stadium != ''" class="daisy-stat-desc">{{nextFixture.stadium}}</div>
          <div class="daisy-stat-value text-green-900">vs</div>
          <div class="daisy-stat-desc text-green-900">{{new Date(nextFixture.kickoff).toLocaleString().substring(0, 17)}}</div>
        </div>
        
        <div class="daisy-stat place-items-center">
          <div class="daisy-stat-title">Away Team</div>
          <div class="daisy-stat-value">{{nextFixture.awayTeam}}</div>
          <!-- <div class="daisy-stat-desc">Away team</div> -->
        </div>
        
      </div>
      
    </div>
    <div class="overflow-x-auto md:w-1/2 w-full mx-auto">
      <table class="daisy-table md:daisy-table-md daisy-table-xs border-2 border-white my-12">
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
          <tr :class="{ 'border-t-2': index === 6 || index === 20 }" class="daisy-hover"
            v-for="(leagueRow, index) in leagueTable" :key="index">
            <th>{{ leagueRow.leaguePosition }}</th>
            <th>{{ leagueRow.team }}</th>
            <th>{{ leagueRow.gamesPlayed }}</th>
            <th>{{ leagueRow.wins }}</th>
            <th>{{ leagueRow.draws }}</th>
            <th>{{ leagueRow.losses }}</th>
            <th>{{ leagueRow.goalsFor }}</th>
            <th>{{ leagueRow.goalsAgainst }}</th>
            <th>{{ leagueRow.goalDifference }}</th>
            <th>{{ leagueRow.points }}</th>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup>
import { getLeagueTable } from "~/composables/getLeagueTable";
import { getLatestResult } from "~/composables/getLatestResult";
import { getNextFixture } from "~/composables/getNextFixture";

const leagueTable = ref(null);
const latestResult = ref(null);
const nextFixture = ref(null);

onBeforeMount(async () => {
  leagueTable.value = await getLeagueTable();
  latestResult.value = await getLatestResult();
  nextFixture.value = await getNextFixture();
});

</script>

<style lang="scss" scoped></style>