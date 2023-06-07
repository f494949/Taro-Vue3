import SvgIcon from './SvgIcon/index.vue'

const allGlobalComponents = {SvgIcon}

export default {
    install(app) {
        Object.keys(allGlobalComponents).forEach(key => {
            app.components(key, allGlobalComponents())
        })
    }
}