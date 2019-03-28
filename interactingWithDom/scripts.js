new Vue({
    el: "#app",
    data: {
        value: 0
    },
    computed: {
        result() {
            return this.value >= 37 ? 'Done' : 'Not there yet'
        }
    },
    watch: {
        result() {
            let vm = this;
            setTimeout(function() {
                vm.value = 0;
            }, 2000)
        }
    }
})