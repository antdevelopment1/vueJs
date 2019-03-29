new Vue({
    el: "#app",
    data: {
        attachRed: false,
        attachGreen: false,
        attachBlue: false,
        color: 'green',
        width: 100
    },
    computed: {
        divClasses() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        },
        myStyle() {
            return { backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    }
})