<script>
import Actions from "./Actions.vue";

export default {
  data() {
    return {
      sortBy: "full_name",
      sortDesc: false,
    };
  },

  computed: {
    filteredFields() {
      let fields = [
        { key: "index", sortable: false },
        { key: "full_name", sortable: true },
        { key: "date_of_birth", label: "Date of Birth", sortable: true },
        { key: "municipality", sortable: true },
        { key: "date_archived", sortable: true },
        { key: "action", label: "Action", sortable: false },
      ];

      if (this.showDateArchived) {
        return fields;
      } else {
        return fields.filter((field) => field.key !== "date_archived");
      }
    },
  },

  components: {
    Actions,
  },

  props: [
    "paginationPerPage",
    "paginationCurrentPage",
    "tableItems",
    "filteredTableItems",
    "controlButtons",
    "restoreButton",
    "showDateArchived",
  ],
};
</script>

<template>
  <b-table
    label-sort-asc=""
    label-sort-desc=""
    label-sort-clear=""
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc"
    sort-icon-left
    :fields="filteredFields"
    :items="filteredTableItems"
    :per-page="paginationPerPage"
    :current-page="paginationCurrentPage"
    responsive="sm"
    primary-key="index"
    striped
    hover
  >
    <template #cell(action)="data">
      <Actions
        :controlButtons="controlButtons"
        :restoreButton="restoreButton"
        :studentIndex="data.item.index"
        :studentFullName="data.item.full_name"
        :studentDob="data.item.date_of_birth"
        :studentMunicipality="data.item.municipality"
      />
    </template>
  </b-table>
</template>
