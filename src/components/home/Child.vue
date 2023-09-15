<script>
export default {
  name: "ChildComponent",
};
</script>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  todo: Object,
});
</script>

<template lang="">
  <li>{{ props.todo.name }}</li>
</template>

<style lang=""></style>
