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
};
</script>

<template>
  <b-nav class="d-flex justify-content-between align-items-center">
    <router-link to="/students" tag="b-nav-item">
      <div class="d-flex justify-content-center">
        <h4>
          <b-icon-people-fill />
        </h4>
      </div>
    </router-link>
    <router-link to="/archive" tag="b-nav-item">
      <div class="d-flex justify-content-center">
        <h4>
          <b-icon-archive-fill />
        </h4>
      </div>
    </router-link>
    <router-link to="/logs" tag="b-nav-item">
      <div class="d-flex justify-content-center">
        <h4>
          <b-icon-list-ul />
        </h4>
      </div>
    </router-link>

    <b-nav-item @click="showModal">
      <div class="d-flex justify-content-center">
        <h4>
          <b-icon-box-arrow-left />
        </h4>
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
  </b-nav>
</template>

<style>
.nav-item h4 {
  color: white;
  transition: color 0.3s ease-in-out;
}

.nav-item:hover h4,
.router-link-active h4 {
  color: #000000;
}
</style>
