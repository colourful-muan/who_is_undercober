import { createVNode, render } from "vue";
import Toast from "./index.vue";
let $data;

export default {
  install: (app) => {
    if (!$data) {
      // LoadingComponent 为自己写的组件
      $data = createVNode(Toast);
      render($data, document.body);
    }

    // Vue.prototype 替换为 config.globalProperties
    app.config.globalProperties.$Toast = $data.component.proxy.show;
  },
};
