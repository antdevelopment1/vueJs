new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com',
        finishLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
        sayHello() {
            return 'Hello';
        },
        getTitle() {
            // Even though we are inside this methods object and traditionally the this keyword would point to this object vue does some behind the scenes magic for us to re can redirect the keyword of this to point to our data object
            // Thanks vue
            this.title = 'I am a title that has been updated'
            return this.title;
        },
    }
});