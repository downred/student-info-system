<script>
export default {
  props: ["handleClearLogs"],
};
</script>

<template>
  <b-dropdown size="md" variant="link" no-caret right>
    <template #button-content>
      <b-icon-gear-fill />
    </template>
    <b-dropdown-item @click="handleClearLogs">Clear logs</b-dropdown-item>
  </b-dropdown>
</template>

<style scoped>
.bi-gear-fill {
  color: #6c757d !important;
}
</style>