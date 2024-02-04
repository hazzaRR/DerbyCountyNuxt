<template>
    <div class="">
      <div class="overflow-x-auto">
  <div class="join mx-auto m-6 w-10/12 justify-center flex">
    <select v-model="season" class="select select-bordered join-item">
    <option disabled selected value="null">Season</option>
    <option value="all">All</option>
    <option v-for="season in seasons" :key="season" :value="season">
    {{ season }}
  </option>
</select>
<select v-model="competition" class="select select-bordered join-item">
  <option disabled selected :value="null">Competition</option>
  <option v-for="competition in competitions" :key="competition" :value="competition">
  {{ competition }}
</option>
</select>
  <select v-model="team" class="select select-bordered join-item">
    <option disabled selected :value="null">Team</option>
    <option v-for="team in teams" :key="team" :value="team">
    {{ team }}
  </option>
  </select>
  <select v-model="result" class="select select-bordered join-item">
    <option disabled selected :value="null">Result</option>
    <option value="W">Win</option>
    <option value="D">Draw</option>
    <option value="L">Loss</option>
  </select>
  <div class="indicator">
    <button @click="FindMatchesBasedOnSearch" class="btn join-item bg-green-900">Search</button>
  </div>
  <button @click="resetFilters" class="btn join-item bg-red-700">Reset Filters</button>
</div>
<div class="w-1/2 mx-auto m-6">
  <table class="table border-2 border-white my-24">
    <!-- head -->
    <thead>
      <tr>
        <th>Season</th>
        <th>Date</th>
        <th>Home Team</th>
        <th>Away Team</th>
        <th>Score</th>
        <th>Result</th>
        <th>Competition</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover" v-for="match in matches" :key="match.id">
        <th>{{match.season}}</th>
        <th>{{new Date(match.kickoff).toLocaleDateString()}}</th>
        <th>{{match.homeTeam}}</th>
        <th>{{match.awayTeam}}</th>
        <th>{{match.homeScore}}-{{match.awayScore}}</th>
        <th>{{match.result}}</th>
        <th>{{match.competition}}</th>
      </tr>
    </tbody>
  </table>
</div>

</div>

    </div>
</template>

<script setup>
import { getTeams } from "~/composables/getTeams";


const config = useRuntimeConfig();


const matches = ref([]);
const seasons = ref([]);
const teams = ref([]);
const competitions = ref([]);

//search params
const season = ref(null);
const team = ref(null);
const stadium = ref(null);
const competition = ref(null);
const result = ref(null);


onBeforeMount(async () => {
  seasons.value = await getSeasons();
  season.value = await getCurrentSeason();
  teams.value = await getTeams(season.value);
  competitions.value = await getCompetitions(season.value);
  matches.value = await getMatches(season.value, team.value, stadium.value, competition.value, result.value);
});

watch(season, async (newSeason) => {
  teams.value = await getTeams(newSeason);
  competitions.value = await getCompetitions(newSeason);
  team.value = null;
  competition.value = null;
});

watch(competition, async (newCompetition) => {
  teams.value = await getTeams(season.value, newCompetition);
  team.value = null;
});

const getCurrentSeason = async () => {

  try {
    const response = await fetch(`${config.public.API_BASE_URL}/api/match/current-season`, {
      method: "GET",
      headers: { 
          "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.status === 200) {
      
      return data.data;
  }

  else {
      return null;
  }

  } catch (error) {
    // Handle any errors that occur during the request
    console.error(error);
  }

  


};



const FindMatchesBasedOnSearch = async () => {
  matches.value = await getMatches(season.value, team.value, stadium.value, competition.value, result.value);
};

const resetFilters = async () => {

  season.value = await getCurrentSeason();
  team.value = null;
  stadium.value = null;
  competition.value = null;
  result.value = null;

  matches.value = await getMatches(season.value, team.value, stadium.value, competition.value, result.value);

};

</script>

<style lang="scss" scoped>

</style>