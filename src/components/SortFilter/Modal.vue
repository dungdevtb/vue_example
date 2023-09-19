<script>
export default {
  name: "ModalVue",
};
</script>

<script setup>
import { defineProps } from "vue";
const props = defineProps({ show: Boolean });
</script>

<template lang="">
  <Transition name="modal">
    <div class="modal-mask" v-if="props.show">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
          <font-awesome-icon icon="fa-solid fa-xmark" @click="handleBack" />
        </div>
        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <!-- default footer -->
            <button class="modal-default-button" @click="$emit('close')">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  border-bottom: solid 0.3px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin-top: 0;
    color: #42b983;
  }
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  border: solid 1px #42b983;
  padding: 5px 10px;
}

.modal-default-button:hover {
  background-color: #42b983;
  color: #fff;
}

//css animation
.modal-enter-from {
  opacity: 0;
}
.modal-leave-from {
  opacity: 0;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
