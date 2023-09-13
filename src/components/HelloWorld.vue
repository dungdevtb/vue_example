<script>
export default {
  name: "HelloWorld",
};
</script>

<script setup>
import { ref } from "vue";

const textHello = ref("Hello Word!");
const handleReverseText = () => {
  textHello.value = textHello.value.split("").reverse().join("");
};
</script>

<template>
  <div class="flex-evenly">
    <div class="hello">
      <h1 class="text-title">Handleing User Input</h1>
      <h3>{{ textHello }}</h3>
      <button @click="handleReverseText">Reverse Text</button>
      <button @click="textHello += ' !'">Add !</button>
    </div>
    <div class="hello">
      <h1 class="text-title">Attribute Bindings</h1>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
