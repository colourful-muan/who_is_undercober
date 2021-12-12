<template>
  <div class="home-page">
    <div class="current-area">
      <div class="area-title">选择一个头像吧</div>
      <div class="area-images">
        <template v-for="(item, index) in Avatar_Images" :key="index">
          <div class="images-cell" :class="{ active: nickNameIndex === index }">
            <img @click="nickNameIndex = index" :src="item" :alt="index" />
          </div>
        </template>
      </div>
    </div>
    <div class="nick-name-input">
      <input class="input-cell" v-model="nickName" />
      <button
        v-if="nickNameIndex !== -1 && nickName !== ''"
        class="come-in"
        @click="handleInput"
      >
        <img src="src/assets/come-in.svg" alt="come-in" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Avatar_Images } from "../config/avatar_images.js";
import Basic_Info from "../config/basic_info";
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

const nickName = ref("");
const nickNameIndex = ref(-1);
const basicInfo = Basic_Info;

const emit = defineEmits(["getBasicInfo"]);

function handleInput(val) {
  basicInfo.avatarId = nickNameIndex.value;
  basicInfo.nickName = nickName.value;
  handleUserId();
}

function handleUserId() {
  const time = new Date().valueOf();
  const num = Math.floor(100 * Math.random());
  basicInfo.userId = time + num;
  proxy.emit("getBasicInfo", basicInfo);
}

// const avatar = ref(Avatar_Images);
// console.log(avatar.value);
</script>

<style lang="less">
.home-page {
  min-height: 100vh;
  width: 100vw;
  background: #090723;
  padding-top: 22vh;
  box-sizing: border-box;

  .current-area {
    width: 300px;
    height: 300px;
    background: #f9ffff;
    margin: 0 auto;
    border-radius: 25px;

    .area-title {
      height: 40px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 1px;
    }

    .active {
      background: rgba(12, 10, 49, 0.3);
    }

    .area-images {
      height: 260px;
      padding: 0 15px;

      .images-cell {
        width: 60px;
        height: 60px;
        float: left;
        margin: 10px 15px;
        border-radius: 30px;

        img {
          display: block;
          width: 85%;
          height: 85%;
          margin: 7.5%;
        }
      }
    }
  }

  .nick-name-input {
    padding-top: 10vh;
    border-radius: 30px;
    width: 100%;
    position: relative;

    .input-cell {
      display: block;
      width: 250px;
      height: 40px;
      border-radius: 25px;
      margin: 0 auto;
      text-align: center;
      font-size: 18px;
      letter-spacing: 1px;
    }

    .come-in {
      width: 33px;
      height: 33px;
      border: transparent;
      background: transparent;
      position: absolute;
      bottom: 5px;
      right: 63px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
