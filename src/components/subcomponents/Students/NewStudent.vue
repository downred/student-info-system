<script>
import NewStudentForm from "./NewStudentForm.vue";

export default {
  components: { NewStudentForm },
};
</script>

<template>
  <div>
    <b-button class="mx-1" v-b-modal.new-student>Add new student</b-button>
    <b-container fluid>
      <NewStudentForm />
    </b-container>
  </div>
</template>
