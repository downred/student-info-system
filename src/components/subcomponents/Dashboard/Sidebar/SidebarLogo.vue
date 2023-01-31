<script>
import LogoSidebarSRC from "../../../../assets/images/logo-sidebar.svg";
import LogoSidebarSmallSRC from "../../../../assets/images/logo-sidebar-sm.svg";

export default {
  data() {
    return {
      LogoSidebarSRC,
      LogoSidebarSmallSRC,
    };
  },

  props: ["showComponentsForMediumScreenSizes"],
};
</script>

<template>
  <div class="py-4">
    <img
      :src="LogoSidebarSRC"
      class="img-fluid logo"
      v-if="!showComponentsForMediumScreenSizes"
    />
    <img
      :src="LogoSidebarSmallSRC"
      class="img-fluid"
      v-if="showComponentsForMediumScreenSizes"
    />
  </div>
</template>

<style scoped>
.logo {
  min-width: 129px;
}
</style>
