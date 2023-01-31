<script>
import EditStudentForm from "./EditStudentForm.vue";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      confirmDeletionModalId: "delete-" + this.studentIndex,
      editStudentModalId: "edit-student-" + this.studentIndex,
      confirmDeletionMsg: "Are you sure you want to delete this entry?",
    };
  },

  methods: {
    ...mapMutations(["archiveStudent", "restoreStudent"]),

    handleArchive() {
      this.archiveStudent(this.studentIndex);
    },

    handleRestore() {
      this.restoreStudent(this.studentIndex);
    },
  },

  components: {
    EditStudentForm,
  },

  props: [
    "studentIndex",
    "studentFullName",
    "studentDob",
    "studentMunicipality",
    "controlButtons",
    "restoreButton",
  ],
};
</script>

<template>
  <div>
    <b-button
      v-b-modal="editStudentModalId"
      class="mx-1 p-1 edit-button"
      v-if="controlButtons"
    >
      <b-icon-pencil-fill />
    </b-button>

    <b-button
      v-b-modal="confirmDeletionModalId"
      class="mx-1 p-1"
      v-if="controlButtons"
      variant="danger"
    >
      <b-icon-trash-fill />
    </b-button>

    <b-modal
      :id="confirmDeletionModalId"
      title="Confirm deletion"
      okTitle="Yes"
      @ok="handleArchive"
    >
      <span>{{ confirmDeletionMsg }}</span>
    </b-modal>

    <b-button class="mx-1 p-1" v-if="restoreButton" @click="handleRestore">
      <b-icon-arrow-counterclockwise />
    </b-button>

    <b-container fluid>
      <EditStudentForm
        :studentIndex="studentIndex"
        :studentFullName="studentFullName"
        :studentDob="studentDob"
        :studentMunicipality="studentMunicipality"
        :editStudentModalId="editStudentModalId"
      />
    </b-container>
  </div>
</template>

<style>
.close {
  display: none;
}

@media screen and (max-width: 641px) {
  .edit-button {
    margin-bottom: 5px;
  }
}
</style>
