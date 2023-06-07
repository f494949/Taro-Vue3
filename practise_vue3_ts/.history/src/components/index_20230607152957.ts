import SvgIcon from './SvgIcon/index.vue'

const allGlobalComponents:any = { SvgIcon }

export default {
	install(app:any) {
        console.log(Object.keys(allGlobalComponents));
        
		Object.keys(allGlobalComponents).forEach((key) => {
			app.component(key, allGlobalComponents[key])
		})
	}
}
