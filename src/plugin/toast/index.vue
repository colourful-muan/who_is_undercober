<template>
  <transition name="toast">
    <div class="toast" v-if="isShow">
      <div>{{ message }}</div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(false);
const message = ref("");

function show(msg, time = 2000) {
  isShow.value = true;
  message.value = msg;

  setTimeout(() => {
    isShow.value = false;
    message.value = "";
  }, time);
}
</script>

<style lang="less">
.toast {
  position: fixed;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  z-index: 999;
  background: rgba(255, 253, 253);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
}
.toast-enter,
.toast-leave-to {
  opacity: 0;
}
.toast-enter-to,
.toast-leave {
  opacity: 1;
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.9s ease;
}
</style>
