import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/bootstrap";
import "./plugins/elementui"

new Vue({
  render: (h) => h(App),
  router,
  store,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
}).$mount("#app");
