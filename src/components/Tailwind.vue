<script>
export default {
  name: "TailWind",
};
</script>

<script setup></script>

<template lang="">
  <div class="tailwind_container">
    <h1 class="text-red-500 text-lg">Install Tailwind and FontAwesome</h1>
    <table class="table-auto">
      <thead class="">
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
    <p class="text-gray-500">You have a new message!</p>

    <!-- <font-awesome-icon icon="fa-solid fa-user" class="icon" />
    <font-awesome-icon icon="fa-solid fa-clock" class="icon" />
    <font-awesome-icon icon="fa-solid fa-message" class="icon" /> -->

    <div
      class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
    >
      <div class="flex-shrink-0">
        <!-- <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" /> -->
        <font-awesome-icon icon="fa-solid fa-message" class="icon" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  margin-left: 12px;
  font-size: 36px;
  //   color: #222;
}
</style>
