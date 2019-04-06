import Vue from 'vue'
import App from './App.vue'
Vue.component('my-cmp', {
  data: function () {
    return {
      status: "Critical",
    }
  },
  template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
});


new Vue({
  el: '#app',
  // render: h => h(App)
})