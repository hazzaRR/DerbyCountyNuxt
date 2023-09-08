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
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr class="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
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

  const response = await fetch(`${config.public.API_BASE_URL}/api/matches?season=${season}&team=${team}&stadium=${stadium}&competition=${competition}&result=${result}`)
}



</script>

<style lang="scss" scoped>

</style>