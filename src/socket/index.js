import { io } from "socket.io-client";
import { socket_url } from "../config/config";
import { computed, ref } from "vue";

const socket = io(socket_url, {
  path: "", // # socket.io 库默认服务端path为/socket.io
  transports: ["websocket", "xhr-polling", "jsonp-polling"],
});
let getData = ref([]);

socket.on("connect", (res) => {
  console.log("#connect: ", "client_linked_up");
  socket.on("downMessageQueue", (res) => {
    console.log("#downMessageQueue: ", res);
    getData.value = res;
    console.log(getData.value, "res");
  });
});

export default function () {
  function fromUpMessageQueue(data) {
    socket.emit("fromUpMessageQueue", data);
  }
  return {
    getData,
    fromUpMessageQueue,
  };
}
// import { io } from "socket.io-client";
// import { socket_url } from "../config/config";

// export let getData = [];
// // 创建链接
// const socket = io(socket_url, {
//   path: "", // # socket.io 库默认服务端path为/socket.io
//   transports: ["websocket", "xhr-polling", "jsonp-polling"],
// });

// socket.on("connect", (res) => {
//   console.log("#connect: ", "client_linked_up");
//   socket.on("downMessageQueue", (res) => {
//     console.log("#downMessageQueue: ", res);
//     getData = res;
//     window.getData=res
//     console.log(getData, "res");
//   });
// });

// function fromUpMessageQueue(data) {
//   socket.emit("fromUpMessageQueue", data);
// }

// export { fromUpMessageQueue };

// export default {
//   // 客户端建立链接
//   //   connect() {
//   //     socket.on("connect", (res) => {
//   //       console.log("#connect: ", "client_linked_up");
//   //     });
//   //   },

//   //-------------------------------------客户端发送消息---------------------------------------------------------------//
//   fromUpMessageQueue(data) {
//     socket.emit("fromUpMessageQueue", data);
//   },
//   //-------------------------------------客户端接受消息----------------------------------------------------------------//
//   downMessageQueue() {
//     return socket.on("downMessageQueue", (res) => {
//       console.log("#downMessageQueue: ", res);
//     });
//   },
//   //--------------------------------------客户端断开链接--------------------------------------------------------------//
//   disconnect() {
//     socket.on("disconnect", () => {
//       console.log("断开连接");
//     });
//   },
// };
