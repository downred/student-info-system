<script>
import logo from "../../../assets/images/logo.svg";
import logoMobile from "../../../assets/images/logo-mobile.svg";

export default {
  data() {
    return {
      logo,
      logoMobile,
    };
  },
};
</script>

<template>
  <div>
    <img :src="logo" class="logo" />
    <img :src="logoMobile" class="logo-mobile img-fluid" />
  </div>
</template>

<style scoped>
.logo {
  max-width: 50rem;
}

@media screen and (max-width: 1090px) {
  .logo {
    display: none;
  }
}

@media screen and (min-width: 1090px) {
  .logo-mobile {
    display: none;
  }
}
</style>
