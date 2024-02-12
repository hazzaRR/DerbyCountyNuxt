<template>
    <div class="grow my-6">
      <div class="overflow-x-auto">
  <div class="daisy-join mx-auto m-6 w-10/12 justify-center flex">
    <select v-model="competition" class="daisy-select daisy-select-bordered daisy-join-item">
      <option disabled selected :value="null">Competition</option>
      <option v-for="competition in competitions" :key="competition" :value="competition">
      {{ competition }}
    </option>
    </select>
  <select v-model="team" class="daisy-select daisy-select-bordered daisy-join-item">
    <option disabled selected :value="null">Team</option>
    <option v-for="team in teams" :key="team" :value="team">
    {{ team }}
  </option>
  </select>
  <div class="indicator">
    <button @click="FindFixturesBasedOnSearch" class="daisy-btn daisy-join-item bg-green-900">Search</button>
  </div>
  <button @click="resetFilters" class="daisy-btn daisy-join-item bg-red-500">Reset Filters</button>
</div>
<div class="w-1/2 mx-auto m-6">
  <table class="daisy-table border-2 border-white">
    <!-- head -->
    <thead>
      <tr>
        <th>Date</th>
        <th>Kick Off</th>
        <th>Home Team</th>
        <th>Away Team</th>
        <th>Competition</th>
        <th>Stadium</th>
        <th>Sky Sports URL</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover" v-for="fixture in fixtures" :key="fixture.matchId">
        <th>{{new Date(fixture.kickoff).toLocaleDateString()}}</th>
        <th>{{new Date(fixture.kickoff).toLocaleTimeString()}}</th>
        <th>{{fixture.homeTeam}}</th>
        <th>{{fixture.awayTeam}}</th>
        <th>{{fixture.competition}}</th>
        <th>{{fixture.stadium}}</th>
        <th><a :href="fixture.skySportsURL">Link</a></th>
      </tr>
    </tbody>
  </table>
</div>

</div>

    </div>
</template>

<script setup>
import { getFixtureTeams } from "~/composables/getFixtureTeams";



const config = useRuntimeConfig();


const fixtures = ref([]);
const teams = ref([]);
const competitions = ref([]);

//search params
const team = ref(null);
const competition = ref(null);
const year = ref(null);
const stadium = ref(null);


onBeforeMount(async () => {
  competitions.value = await getFixtureCompetitions();
  teams.value = await getFixtureTeams(competition.value);
  fixtures.value = await getFixtures(year.value, team.value, stadium.value, competition.value);
});


watch(competition, async (newCompetition) => {
  teams.value = await getFixtureTeams(newCompetition);
  team.value = null;
});

const FindFixturesBasedOnSearch = async () => {

  fixtures.value = await getFixtures(year.value, team.value, stadium.value, competition.value);

};


const resetFilters = async () => {

  competition.value = null;
  team.value = null;
  year.value = null;
  stadium.value = null;

  fixtures.value = await getFixtures(year.value, team.value, stadium.value, competition.value);

};



</script>

<style lang="scss" scoped>

</style>