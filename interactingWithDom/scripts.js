new Vue({
    el: '#app',
    data: {
        value: '',
        counter: 0
    },
    methods: {
        alertMe() {
            alert('Alert');
        },
        increase(num) {
            this.counter += num
        },
        descrease(num) {
            this.counter -= num
        }
    }
});