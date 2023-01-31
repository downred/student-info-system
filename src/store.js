import Vue from "vue";
import Vuex from "vuex";
import municipalities from "./municipalities";
import mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userIsLoggedIn: false,
    rememberUser: false,
    students: [],
    archivedStudents: [],
    municipalities,
    searchQuery: "",
    logs: [],
  },
  mutations,
});

store.subscribe((mutation, state) => {
  if (state.rememberUser) {
    const { searchQuery, ...rest } = state;

    localStorage.setItem("store", JSON.stringify(rest));
  } else {
    const { userIsLoggedIn, searchQuery, ...rest } = state;

    sessionStorage.setItem("userIsLoggedIn", state.userIsLoggedIn);

    localStorage.setItem("store", JSON.stringify(rest));
  }
});

export default store;
