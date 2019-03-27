new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase() {
            this.counter = this.counter + 1;
            // this.counter++;
        },
        updateCoordinates() {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});