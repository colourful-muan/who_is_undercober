// import {createVNode, render} from 'vue'
// import Toast from './toast.vue';
// import {provide} from "vue"
//
//
// export default {
//     install: (app, options) => {
//         app.config.globalProperties.$XXX = (key) => {
//             const vm = createVNode(
//                 Toast
//             )
//             render(vm, document.body)
//             provide('message', key)
//             console.log(123)
//         }
//     }
// }
import { createVNode, render } from "vue";
import LoadingComponent from "./toast.vue";
let $data;

export default {
    install: (app) => {
        if (!$data) {
            // LoadingComponent 为自己写的组件
            $data = createVNode(LoadingComponent, {}, {
                default: () => createVNode()
            });
            // $data.appContext = app._context; // 这句很关键，关联起了数据
            render($data, document.body);
        }
        $data.component.ctx.setShow = false;

        let loading = {
            show() {
                $data.component.ctx.show();
            },
            hide() {
                $data.component.ctx.hide();
            }
        };

        if (!app.$loading) {
            app.$loading = loading;
        }

        app.config.globalProperties.$loading = $data;
    }
}


// export default {
//   install: (app, options) => {
//     if (!$data) {
//     }
//   },
// };




// // 调用插件

// export default defineComponent({
//       name: "TestToast",
//       setup() { 
//          const { proxy } = getCurrentInstance() as ComponentInternalInstance
//          proxy?.$toast('test in setup'); 
//        },
//        methods:{
//         TestToast() {
//            this.$toast('test in method')
//         }
//        }
//     });
    

//     https://juejin.cn/post/6881532107416403981


// ctx在生产环境下会失效