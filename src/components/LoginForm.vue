<script>
import { username, password } from "../credentials.js";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      inputUsername: "",
      inputPassword: "",
      loginIsSuccessful: "",
      inputIsInvalid: "",
      rememberUserChecked: "",
      mainError: "Username or password is incorrect.",
    };
  },

  methods: {
    ...mapMutations(["logIn", "rememberUser"]),

    redirectToHome() {
      this.$router.push("/");
    },

    validate() {
      let credentialsValid =
        this.inputUsername == username && this.inputPassword == password;

      if (credentialsValid) {
        this.loginIsSuccessful = true;
        this.inputIsInvalid = false;
      } else {
        this.loginIsSuccessful = false;
        this.inputIsInvalid = true;
      }
    },

    handleSubmit() {
      this.validate();

      if (this.loginIsSuccessful) {
        this.logIn();
        this.redirectToHome();

        if (this.rememberUserChecked) {
          this.rememberUser();
        }
      }
    },
  },
};
</script>

<template>
  <b-form @submit.prevent="handleSubmit">
    <b-alert v-if="inputIsInvalid" variant="danger" show>{{
      mainError
    }}</b-alert>

    <b-form-group class="mb-1 w-100" label="Username" label-for="username">
      <b-form-input
        v-model="inputUsername"
        type="text"
        id="username"
        name="username"
        required
      />
    </b-form-group>

    <b-form-group class="mb-1 w-100" label="Password" label-for="password">
      <b-form-input
        v-model="inputPassword"
        type="password"
        id="password"
        name="username"
        required
      />
    </b-form-group>

    <b-form-group class="mb-1">
      <b-form-checkbox
        v-model="rememberUserChecked"
        id="remember-user"
        value="true"
        unchecked-value="false"
      >
        Remember me
      </b-form-checkbox>
    </b-form-group>

    <b-button class="w-100 mt-2" type="submit">Log In</b-button>
  </b-form>
</template>
