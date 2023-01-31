<script>
export default {
  data() {
    return {
      confirmLogoutMsg: "Are you sure you want to log out?",
    };
  },

  methods: {
    showModal() {
      this.$refs["confirmLogoutModal"].show();
    },

    handleLogout() {
      this.$store.commit("logOut");
      this.refreshPage();
    },

    refreshPage() {
      window.location.reload();
    },
  },

  props: ["showComponentsForMediumScreenSizes"],
};
</script>

<template>
  <div>
    <router-link to="/students" tag="b-nav-item">
      <div v-if="!showComponentsForMediumScreenSizes">
        <span> <b-icon-people-fill /> Students </span>
      </div>
      <div
        class="d-flex justify-content-center"
        v-if="showComponentsForMediumScreenSizes"
      >
        <h3>
          <b-icon-people-fill />
        </h3>
      </div>
    </router-link>

    <router-link to="/archive" tag="b-nav-item">
      <div v-if="!showComponentsForMediumScreenSizes">
        <span> <b-icon-archive-fill /> Archive </span>
      </div>
      <div
        class="d-flex justify-content-center"
        v-if="showComponentsForMediumScreenSizes"
      >
        <h3>
          <b-icon-archive-fill />
        </h3>
      </div>
    </router-link>

    <router-link to="/logs" tag="b-nav-item">
      <div v-if="!showComponentsForMediumScreenSizes">
        <span> <b-icon-list-ul /> Logs </span>
      </div>
      <div
        class="d-flex justify-content-center"
        v-if="showComponentsForMediumScreenSizes"
      >
        <h3>
          <b-icon-list-ul />
        </h3>
      </div>
    </router-link>

    <b-nav-item @click="showModal">
      <div v-if="!showComponentsForMediumScreenSizes">
        <span> <b-icon-box-arrow-left /> Log out </span>
      </div>
      <div
        class="d-flex justify-content-center"
        v-if="showComponentsForMediumScreenSizes"
      >
        <h3>
          <b-icon-box-arrow-left />
        </h3>
      </div>
    </b-nav-item>

    <b-modal
      ref="confirmLogoutModal"
      title="Log out confirmation"
      okTitle="Yes"
      @ok="handleLogout"
    >
      <span>{{ confirmLogoutMsg }}</span>
    </b-modal>
  </div>
</template>

<style scoped>
div > span {
  color: #000;
}

h3 {
  color: #000 !important;
}

.nav-item {
  border-radius: 10px;
  margin-bottom: 0.2rem;
}

.nav-item {
  transition: background-color 0.1s ease-in-out;
}

.nav-item:hover,
.router-link-active {
  background-color: rgb(255, 255, 255);
}
</style>
