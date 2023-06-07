import SvgIcon from './SvgIcon/index.vue'

const allGlobalComponents = { SvgIcon }

export default {
	install(app:any) {
		Object.keys(allGlobalComponents).forEach((key) => {
			app.component(key, allGlobalComponents[key])
		})
	}
}
