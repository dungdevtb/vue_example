<script>
export default {
  name: "SortFilter",
};
</script>

<script setup>
import Grid from "./Grid.vue";
import { ref } from "vue";
import Modal from "./Modal.vue";

const searchQuery = ref("");
const columns = ["name", "power"];
const dataFake = [
  { name: "Chuck Norris", power: Infinity },
  { name: "Bruce Lee", power: 9000 },
  { name: "Jackie Chan", power: 7000 },
  { name: "Jet Li", power: 8000 },
];

const showModal = ref(false);
</script>

<template lang="">
  <div class="flex-evenly">
    <div>
      <h1 class="text-xl font-bold text-emerald-500">Search-Sort</h1>
      <form id="search" class="mb-4">
        Search: <input name="query" v-model="searchQuery" />
      </form>

      <Grid :data="dataFake" :columns="columns" :filter-key="searchQuery" />
    </div>
    <div>
      <h1 class="text-xl font-bold text-emerald-500">Modal-Vue</h1>

      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        id="show-modal"
        @click="showModal = true"
      >
        Button
      </button>

      <Teleport to="body">
        <modal :show="showModal" @close="showModal = false">
          <template #header>
            <h3>Modal Header</h3>
          </template>
        </modal>
      </Teleport>
      <!-- Modal toggle -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
input {
  border: solid 1px #000;
}
</style>
