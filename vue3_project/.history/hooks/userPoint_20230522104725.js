export default function() {
    let point = reactive({
        x: 0,
        y: 0
    })

    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log()
    }
}