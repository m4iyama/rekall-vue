import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from './firebaseConfig';

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App),
    });
  }
});
