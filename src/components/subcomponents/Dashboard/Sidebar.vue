<script>
import SidebarLogo from "./Sidebar/SidebarLogo.vue";
import SidebarLinks from "./Sidebar/SidebarLinks.vue";

export default {
  data() {
    return {
      showComponentsForMediumScreenSizes: null,
    };
  },

  methods: {
    handleResize() {
      this.showComponentsForMediumScreenSizes = window.innerWidth < 900;
    },
  },

  components: {
    SidebarLogo,
    SidebarLinks,
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
  },

  created() {
    this.handleResize();
  },
};
</script>

<template>
  <b-nav vertical>
    <b-row>
      <b-col>
        <SidebarLogo
          :showComponentsForMediumScreenSizes="
            showComponentsForMediumScreenSizes
          "
        />
        <SidebarLinks
          :showComponentsForMediumScreenSizes="
            showComponentsForMediumScreenSizes
          "
        />
      </b-col>
    </b-row>
  </b-nav>
</template>
