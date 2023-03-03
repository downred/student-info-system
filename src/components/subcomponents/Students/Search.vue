<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      query: "",
      placeholder: "Search...",
    };
  },
  methods: {
    ...mapMutations(["setSearchQuery"]),
  },
  watch: {
    query(value) {
      this.setSearchQuery(value);
    },
  },
};
</script>

<template>
  <el-input
    prefix-icon="el-icon-search"
    v-model="query"
    :placeholder="placeholder"
  >
  </el-input>
</template>

<style scoped>
.search-icon {
  position: absolute;
  display: block;
  margin-top: 0.7rem;
  margin-left: 0.5rem;
  width: 1rem;
  height: 1rem;
}

.search-input {
  padding-left: 1.8rem;
}
</style>
