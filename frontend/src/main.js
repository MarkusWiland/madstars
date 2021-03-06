import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import socketio from 'socket.io';
// import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false;

// export const SocketInstance = socketio('http://localhost:3000');

// Vue.use(VueSocketIO, SocketInstance)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
