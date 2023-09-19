<script>
export default { name: "App" };
</script>

<script setup>
import { ref, computed } from "vue";
import NotFound from "./NotFound.vue";
import Home from "./components/home";
import BasicExample from "./components/BasicExample.vue";
import Tailwind from "./components/Tailwind.vue";
import SortFilter from "./components/SortFilter";
import Antd from "./components/Antd.vue";
import TodoList from "./components/SortFilter/TodoList.vue";

const routes = {
  "/": Home,
  "/basic-example": BasicExample,
  "/tailwind": Tailwind,
  "/sort-filter": SortFilter,
  "/antdv": Antd,
  "/todo-list": TodoList,
};

const currentPath = ref(window.location.hash);
window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script>

<template>
  <div class="nav-container">
    <a href="#/">Home</a> | <a href="#/basic-example">Get Data</a> |
    <a href="#/tailwind">Tailwind</a> |
    <a href="#/sort-filter">Sort Filter</a> | <a href="#/antdv">AntdV</a> |
    <a href="#/todo-list">TodoList</a> |
    <a href="#/non-existent-path">Broken Link</a>
  </div>
  <div class="content-container">
    <component :is="currentView" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  text-decoration: none;
}

.nav-container {
  background: beige;
  padding: 20px;
}
.content-container {
  margin-top: 20px;
}

.flex-evenly {
  display: flex;
  justify-content: space-evenly;
}
</style>
