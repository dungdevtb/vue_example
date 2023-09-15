<script>
export default {
  name: "BasicExample",
};
</script>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import axios from "axios";

const API_URL = "https://api.publicapis.org/entries";
const dataFetch = ref(null);
const dataAxios = ref([]);
let list = [];

onMounted(() => {
  axios
    .get(API_URL)
    .then((res) => {
      console.log(res?.data?.entries);
      dataAxios.value = res?.data?.entries;
      list = res?.data?.entries;
    })
    .catch((e) => {
      console.log("Error ===>", e);
    });
});
console.log(dataAxios, list);
// console.log(list);

watchEffect(async () => {
  dataFetch.value = await (await fetch(API_URL)).json();
  dataFetch.value = dataFetch.value?.entries;
});
</script>

<template lang="">
  <div class="flex-evenly">
    <div>
      <h1>Table</h1>
      <table id="customers">
        <tr>
          <th>API</th>
          <th>Auth</th>
          <th>Category</th>
        </tr>
        <tr v-for="(item, idx) in dataFetch" :key="idx">
          <td>{{ item?.API }}</td>
          <td>{{ item?.Auth }}</td>
          <td>{{ item?.Category }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
