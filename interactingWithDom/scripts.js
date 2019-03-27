new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        increase() {
            this.counter = this.counter + 1;
            // this.counter++;
        }
    }
});