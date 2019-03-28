new Vue({
    el: "#app",
    data: {
        attachRed: false,
        attachGreen: false,
        attachBlue: false
    },
    computed: {
        divClasses() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    }
})