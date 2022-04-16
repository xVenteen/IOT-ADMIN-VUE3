import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'vant/lib/index.css'
import { ConfigProvider } from 'vant'
createApp(App)
    .use(router)
    .use(ConfigProvider)
    .mount('#app')
