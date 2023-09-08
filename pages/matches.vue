<template>
    <div class="">
      <div class="overflow-x-auto">
  <div class="join mx-auto m-6 w-10/12 justify-center flex">
    <select v-model="season" class="select select-bordered join-item">
    <option disabled selected :value="null">Season</option>
    <option v-for="season in seasons" :key="season" :value="season">
    {{ season }}
  </option>
  </select>
  <select v-model="team" class="select select-bordered join-item">
    <option disabled selected :value="null">Team</option>
    <option v-for="team in teams" :key="team" :value="team">
    {{ team }}
  </option>
  </select>
  <select v-model="competition" class="select select-bordered join-item">
    <option disabled selected :value="null">Competition</option>
    <option v-for="competition in competitions" :key="competition" :value="competition">
    {{ competition }}
  </option>
  </select>
  <select v-model="result" class="select select-bordered join-item">
    <option disabled selected :value="null">Result</option>
    <option value="W">Win</option>
    <option value="D">Draw</option>
    <option value="L">Loss</option>
  </select>
  <div class="indicator">
    <button class="btn join-item bg-red-500">Search</button>
  </div>
</div>
<div class="w-1/2 mx-auto m-6">
  <table class="table border-2 border-white">
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


const getMatches = async () => {
    // Define the base URL
    const baseUrl = `${config.public.API_BASE_URL}/api/match/find`;

    // Create an empty object to store the query parameters
    const queryParams = {};

    // Check if each parameter is selected and add it to the queryParams object if it is
    if (season.value !== null) {
      queryParams.season = season.value;
    }

    if (team.value !== null) {
      queryParams.team = team.value;
    }

    if (stadium.value !== null) {
      queryParams.stadium = stadium.value;
    }

    if (competition.value !== null) {
      queryParams.competition = competition.value;
    }

    if (result.value !== null) {
      queryParams.result = result.value;
    }

    // Convert the queryParams object to a query string
    const queryString = Object.keys(queryParams)
      .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
      .join('&');

    // Construct the final URL by appending the query string to the base URL
    const finalUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;

    try {
      // Send the request with the constructed URL
      const response = await fetch(finalUrl, {
        method: 'GET', // You can specify the HTTP method here (GET in this example)
      });


      const data = await response.json();

      matches.value = data;

      // Handle the response as needed
      // ...
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
}

onBeforeMount(async () => {
  getMatches();
});



</script>

<style lang="scss" scoped>

</style>