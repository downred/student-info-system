<script>
import NewStudentForm from "./NewStudentForm.vue";

export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    closeForm() {
      this.dialogVisible = false;
    },
  },
  components: { NewStudentForm },
};
</script>

<template>
  <div>
    <!--    <b-button class="mx-1" v-b-modal.new-student>Add new student</b-button>-->
    <el-button @click="dialogVisible = true" type="info">
      Add new student
    </el-button>
    <!--    <b-container fluid>-->
    <NewStudentForm :dialog-visible="dialogVisible" @close="closeForm()" />
    <!--    </b-container>-->
  </div>
</template>
