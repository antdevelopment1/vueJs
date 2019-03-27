new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase(num, event) {
            this.counter += num;
            // this.counter++;
        },
        updateCoordinates() {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        // dummy(event) {
        //     event.stopPropagation();
        // }
    }
});