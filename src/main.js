import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'


Vue.config.productionTip = false;


Vue.mixin({
  data: function () {
    return {
      BX: window.BX,
      BXMobileApp: window.BXMobileApp,
      bxApp: window.app,
    }
  }
});


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app');


