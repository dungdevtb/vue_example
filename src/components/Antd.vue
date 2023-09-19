<script>
export default {
  name: "AntdVue",
};
</script>

<script setup>
import { ref } from "vue";

const value = ref(3);
const visible = ref(false);
const showModal = () => {
  visible.value = true;
};
const handleOk = (e) => {
  console.log(e);
  visible.value = false;
};
</script>

<template lang="">
  <div class="m-4">
    <a-input-number id="inputNumber" v-model:value="value" :min="1" :max="10" />
    Value：{{ value }}

    <div class="mt-4">
      <a-button @click="showModal" size="large">Open Modal</a-button>
      <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
