new Vue({
    el: '#app',
    data: {
        title: 'Hello World!'
    },
    methods: {
        changeTitle: function() {
            this.title = event.target.value;
        }
    }
})