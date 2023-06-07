import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
  })
app.mount('#app')

