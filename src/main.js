import { createApp } from 'vue'
import App from './App.vue'
import Toast from './plugin/toast/index.js'


createApp(App).use(Toast).mount('#app')
