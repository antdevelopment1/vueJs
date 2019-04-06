import Vue from 'vue'
import App from './App.vue'
var cmp = {
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
};


new Vue({
  el: '#app',
  components: {
    'my-cmp': cmp
  }
  // render: h => h(App)
})

new Vue({
  el: '#app2',
  // render: h => h(App)
})
