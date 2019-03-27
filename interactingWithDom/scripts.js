new Vue({
    el: '#app',
    data: {
        value: '',
        counter: 0,
        name: 'Hello There'
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