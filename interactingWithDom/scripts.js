new Vue({
    el: '#app',
    data: {
        title: 'Vue.js',
        introFirstName: 'April',
        introLastName: ' Copes',
        age: 27 * 3,
        image: 'https://getyourpet.com/adopt-a-pitbull-or-rehome-a-pitbull-in-phoenix/'
    },
    methods: {
        random() {
            return Math.random() * 1;
        }
    }
});