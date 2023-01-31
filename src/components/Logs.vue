<script>
import LogCard from "./subcomponents/Logs/LogCard.vue";
import Settings from "./subcomponents/Logs/Settings.vue";

export default {
  computed: {
    logs() {
      return this.$store.state.logs;
    },
  },
  methods: {
    handleClearLogs() {
      this.$store.commit("clearLogs");
    },
  },
  components: { LogCard, Settings },
};
</script>

<template>
  <div>
    <b-row>
      <b-col class="d-flex justify-content-between align-items-center">
        <h1 class="my-4">Logs</h1>
        <Settings :handleClearLogs="handleClearLogs" />
      </b-col>
    </b-row>

    <hr />

    <div v-for="log in logs">
      <LogCard :log="log" />
    </div>
  </div>
</template>
