<script>
import LoginForm from "./LoginForm.vue";
import Logo from "./subcomponents/Login/Logo.vue";

export default {
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },

  components: {
    LoginForm,
    Logo,
  },

  created() {
    const userStatus = this.$store.state.userIsLoggedIn;

    if (userStatus) {
      this.redirectToHome();
    }
  },
};
</script>

<template>
  <div class="wrapper d-flex justify-content-center align-items-center">
    <b-container fluid>
      <b-row class="mb-5">
        <b-col class="d-flex justify-content-center" lg="12">
          <Logo />
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col lg="3" md="6" sm="8">
          <LoginForm />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
}
</style>
