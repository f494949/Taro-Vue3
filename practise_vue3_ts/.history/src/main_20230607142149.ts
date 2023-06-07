import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import 'virtual:svg-icons-register'
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon/index.vue'
import GlobalComponents from './components/index.ts'

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(ElementPlus, {
	locale: zhCn
})
app.mount('#app')
