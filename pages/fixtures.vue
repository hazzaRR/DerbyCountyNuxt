<template>
  <div class="grow my-6">
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <span class="daisy-loading daisy-loading-dots daisy-loading-lg"></span>
    </div>

    <dialog id="filterModal" class="daisy-modal">
      <div class="daisy-modal-box">
        <form method="dialog">
          <button class="daisy-btn daisy-btn-sm daisy-btn-circle daisy-btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
          Filter upcoming fixtures
        </h3>
        <label for="competition" class="text-sm text-gray-700 dark:text-gray-200">
          Competition
        </label>
        <select v-model="competition" class="daisy-select daisy-select-bordered block w-full px-4 py-3 mt-3">
          <option disabled selected :value="null">Competition</option>
          <option v-for="competition in competitions" :key="competition" :value="competition">
            {{ competition }}
          </option>
        </select>
        <label for="team" class="text-sm text-gray-700 dark:text-gray-200">
          Team
        </label>
        <select v-model="team" class="daisy-select daisy-select-bordered block w-full px-4 py-3 mt-3">
          <option disabled selected :value="null">Team</option>
          <option v-for="team in teams" :key="team" :value="team">
            {{ team }}
          </option>
        </select>
        <form method="dialog">
          <div class="mt-4 sm:flex sm:items-center sm:-mx-2">
            <button @click="resetFilters"
              class="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md sm:w-1/2 sm:mx-2 bg-red-700 hover:bg-red-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
              Reset filters
            </button>

            <button @click="FindFixturesBasedOnSearch"
              class="w-full text-center px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-900 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-green-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
              Search
            </button>
          </div>
        </form>
      </div>
    </dialog>

      <div class="overflow-x-auto">
      <div class="mx-auto w-10/12 justify-center flex">
        <div class="daisy-join daisy-join-vertical lg:daisy-join-horizontal">
          <button class="daisy-btn daisy-join-item bg-green-900" onclick="filterModal.showModal()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            Filter results
          </button>
          <!-- <button class="daisy-btn daisy-join-item bg-blue-900" onclick="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download
          </button> -->
        </div>
      </div>
      
      <div class="overflow-x-auto md:w-1/2 w-full mx-auto">
        <table class="daisy-table md:daisy-table-md daisy-table-xs border-2 border-white my-16">
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
              <th>{{ new Date(fixture.kickoff).toLocaleDateString() }}</th>
              <th>{{ new Date(fixture.kickoff).toLocaleTimeString() }}</th>
              <th>{{ fixture.homeTeam }}</th>
              <th>{{ fixture.awayTeam }}</th>
              <th>{{ fixture.competition }}</th>
              <th>{{ fixture.stadium }}</th>
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
const isLoading = ref(true);

//search params
const team = ref(null);
const competition = ref(null);
const year = ref(null);
const stadium = ref(null);


onBeforeMount(async () => {
  competitions.value = await getFixtureCompetitions();
  teams.value = await getFixtureTeams(competition.value);
  fixtures.value = await getFixtures(year.value, team.value, stadium.value, competition.value);
  isLoading.value = false;
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

<style lang="scss" scoped></style>