<template>
  <div @click="fn1">{{ data }}</div>
</template>

<script>
import { reactive, ref, watch, onMounted } from "vue";
import { fromUpMessageQueue } from "../socket/index.js";

import { getData, fn } from "../socket/index.js";
import { isEmpty, cloneDeep } from "lodash";
export default {
  // watch: {
  //   getData() {
  //     console.log(123);
  //   },
  // },
  setup(props) {
    const data = ref(0);

    function fn1() {
      console.log(fn(), data);
    }
    setTimeout(() => {
      console.log(getData, 'test1234');
      data.value = getData;
    }, 2000);
    watch(getData, () => {
      console.log(getData,1213123123123);
    });
    return { data, fn1, getData };
  },
  methods: {},
};
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
