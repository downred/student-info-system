<script>
import Search from "./subcomponents/Students/Search.vue";
import Table from "./subcomponents/Students/Table.vue";
import NewStudent from "./subcomponents/Students/NewStudent.vue";
import filterArrayByString from "../helpers/filterArrayByString";

export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      tableItems: this.$store.state.archivedStudents,
    };
  },

  computed: {
    rows() {
      return this.filteredTableItems.length;
    },

    filteredTableItems() {
      let searchQuery = this.$store.state.searchQuery;

      return filterArrayByString(this.tableItems, searchQuery);
    },
  },

  components: {
    Search,
    Table,
    NewStudent,
  },

  beforeRouteLeave(to, from, next) {
    this.$store.commit("clearSearchQuery");
    next();
  },
};
</script>

<template>
  <b-container fluid>
    <b-row class="my-3">
      <b-col lg="3">
        <Search />
      </b-col>
    </b-row>

    <b-row class="my-3">
      <b-col>
        <Table
          :paginationPerPage="perPage"
          :paginationCurrentPage="currentPage"
          :tableItems="tableItems"
          :filteredTableItems="filteredTableItems"
          :controlButtons="false"
          :restoreButton="true"
          :showDateArchived="true"
        />
      </b-col>
    </b-row>

    <b-row class="my-3">
      <b-col class="d-flex justify-content-end">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="student-table"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
