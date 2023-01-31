<script>
import Logo from "./subcomponents/Login/Logo.vue";
import Sidebar from "./subcomponents/Dashboard/Sidebar.vue";
import MobileNavbar from "./subcomponents/Dashboard/MobileNavbar.vue";

export default {
  data() {
    return {
      showComponentsForMediumScreenSizes: null,
      showComponentsForSmallScreenSizes: null,
    };
  },

  methods: {
    redirectToLogin() {
      this.$router.push("/login");
    },
    handleResize() {
      this.showComponentsForSmallScreenSizes = window.innerWidth < 710;
    },
  },

  components: {
    Logo,
    Sidebar,
    MobileNavbar,
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
  },

  created() {
    this.handleResize();

    const userStatus = this.$store.state.userIsLoggedIn;

    if (!userStatus) {
      this.redirectToLogin();
    }
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<template>
  <div class="wrapper">
    <b-container class="content-container" fluid>
      <b-row class="row-main">
        <b-col
          class="sidebar fixed"
          cols="2"
          v-if="!showComponentsForSmallScreenSizes"
        >
          <b-row>
            <b-col>
              <Sidebar />
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="2" v-if="!showComponentsForSmallScreenSizes"> </b-col>

        <b-col class="router-view-container" lg="10" cols="10">
          <b-row align-h="center">
            <b-col class="pt-4" lg="10" md="12" sm="12">
              <router-view />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <div class="bottom-bar" v-if="showComponentsForSmallScreenSizes">
      <b-col>
        <MobileNavbar />
      </b-col>
    </div>
  </div>
</template>

<style scoped>
.bottom-bar {
  z-index: 3;
  background-color: rgb(200, 200, 200);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.wrapper {
  height: 100vh;
}

.content-container {
  height: 100%;
}

.row-main {
  height: 100%;
}

.sidebar {
  background-color: #ccc;
  height: 100%;
  z-index: 1;
}

.fixed {
  position: fixed;
}

@media screen and (max-width: 710px) {
  .router-view-container {
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 640px) {
  .row-main {
    height: 92vh;
    overflow-y: scroll;
  }
}
</style>
