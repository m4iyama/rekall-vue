import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from './firebaseConfig';
import 'buefy/lib/buefy.css';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCO-GtxPhKpTlmd-rr5VdNF1UA0GfU9kl4',
    libraries: 'places',
  },
});
Vue.use(Buefy);

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
