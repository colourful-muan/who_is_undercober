<template>
  <div class="hall-page">
    <div class="show-player">
      <div
        class="player-cell"
        v-for="(item, index) in Avatar_Images"
        :key="index"
      >
        <div class="player-avatar">
          <img :src="item" :alt="index" />
        </div>
        <div class="player-nick-name">小猪佩奇</div>
        <div class="mark">
          <button class="vote">投票</button>
        </div>
      </div>
    </div>
    <div class="undercover-logo">
      <img src="src/assets/undercover.svg" alt="undercover" />
    </div>
    <div class="self" @click="shoMe">
      <div class="self-avatar">
        <img :src="Avatar_Images[userInfo.avatarId]" alt="self" />
      </div>
      <div class="topic">{{ userInfo.nickName }}</div>
    </div>
    <div class="get-ready" v-if="!userInfo.isPreparation" @click="getReady">
      准备
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, watchEffect } from "vue";
import { Avatar_Images } from "../config/avatar_images.js";
import { getCurrentInstance } from "vue";
import { isEmpty, cloneDeep,find } from "lodash";
import socket from "../socket/index.js";

const { getData, fromUpMessageQueue } = socket(); // 混入引入
const { proxy } = getCurrentInstance(); // setup中的this并不指向vue实例 /* ctx在生产环境中无法拿到 */
const props = defineProps({
  // 定义props
  basicInfo: Object,
});

let baseUserId = ref(""); // 用户唯一身份id
let userInfo = reactive({
  // 测试，需删除
  userId: 1638177621140,
  avatarId: 5,
  nickName: "chengqi",
  isSurvival: true,
  isUndercover: 0,
  votes: 0,
  isPreparation: false,
  winningSide: 0,
  topic: "",
  round: 0,
}); // 声明用户个人信息 // 对象、数组需要使用reactive声明实现数据双向绑定

let otherUserInfo = reactive([]);
// userInfo = cloneDeep(props.basicInfo);  // 测试先隐藏
baseUserId.value = userInfo.userId; // 获取用户的唯一

// 确定准备
function getReady() {
  userInfo.isPreparation = true;
}

// 展示身份
function shoMe() {
  console.log(fn());
  if (userInfo.isUndercover === 0) {
    proxy.$Toast("未分配身份，请稍等");
  } else {
    proxy.$Toast(`${userInfo.topic}`);
  }
}
proxy.$Toast("this is test");

// 监听数据自身数据是否变化，变化发送数据
watch(
  [userInfo, getData],
  ([newUserInfo, newGetData], [preUserInfo, preGetData]) => {
    if (newUserInfo !== preUserInfo) {
      if (!isEmpty(userInfo)) {
        fromUpMessageQueue(userInfo);
        console.log(userInfo);
      }
    }
    if(newGetData!==preGetData){
      if(newGetData.length>0){
        // 找到当前userid对于下的用户数据
        userInfo=find(newGetData,function(item){
         return item.userId===baseUserId.value
        })
        // 其他用户的用户数据
        otherUserInfo=find(newGetData,function(item){
         return item.userId!==baseUserId.value
        })
      }
    }
  },
  { deep: true, immediate: true }
);
watchEffect(() => {
  if (getData.length > 0) {
    // 找到当前userid对于下的用户数据

  }
});
</script>

<style lang="less">
.hall-page {
  min-height: 100vh;
  width: 100vw;
  background: #090723;
  box-sizing: border-box;
  padding-top: 7vh;
  position: relative;

  .show-player {
    width: 340px;
    height: 250px;
    margin: 0 auto;

    .player-cell {
      float: left;
      width: 65px;
      margin: 5px 10px 10px;
      position: relative;
    }

    .mark {
      position: absolute;
      width: 100%;
      height: 100%;
      top: -7px;

      .vote {
        background: rgba(248, 220, 220);
        border: 0;
        border-radius: 4px;
        font-size: 10px;
        color: rgba(9, 7, 35, 0.7);
      }
    }

    .player-avatar {
      width: 45px;
      height: 45px;
      background: #f9ffff;
      border-radius: 50%;
      margin: 0 auto;

      img {
        display: block;
        width: 35px;
        height: 35px;
        padding: 5px;
      }
    }

    .player-nick-name {
      width: 100%;
      color: rgba(249, 255, 255, 0.7);
      font-size: 12px;
      text-align: center;
    }
  }

  .undercover-logo {
    width: 360px;
    height: 360px;
    position: absolute;
    top: -20%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: 0.4;

    img {
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0.15;
    }
  }

  .self {
    height: 60px;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 25%;
    right: 0;
    bottom: 0;
    margin: auto;

    .self-avatar {
      width: 50px;
      height: 50px;
      background: #f9ffff;
      border-radius: 5px 5px 0 0;
      border-bottom: 1px solid rgba(9, 7, 35, 0.7);

      img {
        display: block;
        width: 100%;
      }
    }

    .topic {
      font-weight: 550;
      color: rgba(9, 7, 35, 0.7);
      font-size: 10px;
      width: 50px;
      text-align: center;
      height: 15px;
      line-height: 15px;
      background: #f9ffff;
      border-radius: 0 0 5px 5px;
    }
  }

  .get-ready {
    top: 50%;
    left: 50%;
    position: absolute;
    border-radius: 4px;
    width: 50px;
    height: 30px;
    background: rgba(248, 220, 220);
    color: rgba(9, 7, 35, 0.7);
    font-size: 14px;
    margin-left: -25px;
    text-align: center;
    line-height: 30px;
    font-weight: 550;
  }

  .show-me {
  }
}
</style>
