<script>
import { mapMutations } from "vuex";
import formMixins from "../../../mixins/formMixins";

export default {
  data() {
    return {
      municipalities: this.$store.state.municipalities,
      municipalitiesSelectPlaceholder: "Select municipality...",
      studentIndex: this.$store.state.students,
      studentFullName: "",
      studentDob: "",
      studentMunicipality: "",
      modalId: "new-student",
      todaysDate: new Date().toISOString().split("T")[0],
      nameState: null,
      dobState: null,
      municipalityState: null,
      submitInvalid: null,
      mainError: "Please fill all the fields.",
    };
  },

  methods: {
    ...mapMutations(["addNewStudent"]),

    handleAdd(e) {
      e.preventDefault();

      this.validate(
        this.studentFullName,
        this.studentDob,
        this.studentMunicipality
      );

      if (!this.nameState || !this.dobState || !this.municipalityState) {
        this.submitInvalid = true;
        return;
      }

      const payload = {
        studentFullName: this.studentFullName,
        studentDob: this.studentDob,
        studentMunicipality: this.studentMunicipality,
      };

      this.addNewStudent(payload);
      this.resetState();
      this.hideModal(this.modalId);
    },

    resetState() {
      this.studentFullName = "";
      this.studentDob = "";
      this.studentMunicipality = "";
      this.submitInvalid = null;
      this.nameState = null;
      this.dobState = null;
      this.municipalityState = null;
    },
  },

  mixins: [formMixins],
};
</script>

<template>
  <b-modal
    :id="modalId"
    title="Add new student"
    okTitle="Add"
    @ok="handleAdd"
    @hidden="hideModal"
  >
    <el-row>
      <el-col cols="11">
        <b-alert v-if="submitInvalid" variant="danger" show>{{
          mainError
        }}</b-alert>
      </el-col>
    </el-row>

    <el-form ref="form">
      <el-row>
        <el-col>
          <el-form-item
            class="d-flex align-items-center"
            label="Full Name"
            for="full_name"
          >
            <el-input
              v-model="studentFullName"
              type="text"
              id="full_name"
              name="full name"
              :state="nameState"
              placeholder
              required
            >
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col cols="11">
          <el-form-item
            class="d-flex align-items-center"
            label="Date of Birth"
            label-for="full_name"
          >
            <el-input
              v-model="studentDob"
              type="date"
              id="date_of_birth"
              name="date of birth"
              :state="dobState"
              :max="todaysDate"
              required
            >
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col cols="11">
          <el-form-item
            class="d-flex align-items-center"
            label="Municipality"
            label-for="municipality"
          >
            <el-select
              v-model="studentMunicipality"
              class="w-100"
              :placeholder="municipalitiesSelectPlaceholder"
              id="municipality"
              :state="municipalityState"
            >
              <el-option v-for="item in municipalities" :key="item.value" :label="item.value" :value="item.value"/>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </b-modal>
</template>

<style>
.el-form-item__label {
  font-size: 1rem !important;
  text-align: left;
}

.el-form-item__content {
  margin-left: auto;
  width: 70%;
}

.el-form-item {
  /*justify-content: end;*/
}

@media screen and (max-width: 410px) {
  .el-form-item__label {
    font-size: .8rem !important;
  }
}

/*:deep(.el-form-item__content){*/
/*    width: 80%;*/
/*}*/
</style>
