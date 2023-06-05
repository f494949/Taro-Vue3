import { reactive,onMounted,onBefore } from 'vue'
export default function() {
    let point = reactive({
        x: 0,
        y: 0
    })

    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(event.pageX, event.pageY)
    }

    onMounted(() => {
        window.addEventListener('click', savePoint)
    })

    onBeforeMount(() => {
        window.addEventListener('click', savePoint)
    })

    return point
}