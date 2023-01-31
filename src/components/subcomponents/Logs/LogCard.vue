<script>
export default {
  props: ["log"],
};
</script>

<template>
  <b-card :sub-title="log.date" class="my-2">
    <b-card-text>
      {{ log.logMsg }}
    </b-card-text>
  </b-card>
</template>
