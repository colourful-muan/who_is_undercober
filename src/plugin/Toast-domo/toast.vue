<!--<template>-->
<!--  <div class=toast" v-show="isShow">-->
<!--    <div>{{ message }}</div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import {inject, ref, watch} from "vue";-->

<!--const isShow = ref(true)-->
<!--const message = ref('')-->
<!--message.value = inject('message')-->

<!--watch(message, () => {-->
<!--  if (message.value !== '') {-->
<!--    show()-->
<!--  }-->
<!--})-->

<!--function show(msg, time = 2000) {-->
<!--  isShow.value = true-->
<!--  message.value = msg-->

<!--  setTimeout(() => {-->
<!--    isShow.value = false-->
<!--    message.value = ''-->
<!--  }, time)-->
<!--}-->
<!--</script>-->

<!--<style lang="less">-->
<!--.toast {-->
<!--  position: fixed;-->
<!--  top: 50%;-->
<!--  bottom: 50%;-->
<!--  transform: translate(-50%, -50%);-->
<!--  padding: 8px 10px;-->
<!--  z-index: 999;-->
<!--  background: rgba(0, 0, 0, 0.7);-->
<!--}-->


<template>
  <div class="page" @click.stop v-show="setShow">
    <div class="loading">
      加载中...
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const setShow = ref(false);

const show = () => {
  setShow.value = true;
};

const hide = () => {
  setShow.value = false;
};

setTimeout(() => {
  setShow.value = false;
}, 5000);
</script>

<style scoped>
.page {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 999;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 30vw;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 6px;
}
</style>


<!--</style>-->