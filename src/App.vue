<template>
  <div class="app">
    <!-- 首页 -->
     <!-- v-if="isEmpty(basicInfo)" -->
    <HomePage
      v-if="false"
      @getBasicInfo="onGetBasicInfo"
    ></HomePage>
    <!-- 大厅 -->
    <HallPage v-else :basicInfo="basicInfo"></HallPage>
  </div>
</template>
<script setup>
import { ref } from "vue";
import HomePage from "./components/HomePage.vue";
import HallPage from "./components/HallPage.vue";
import { isEmpty } from "lodash";

const basicInfo = ref({});

function onGetBasicInfo(info) {
  basicInfo.value = info;
}
</script>

<style>
.app {
  width: 100vw;
  min-height: 100vh;
}
</style>
