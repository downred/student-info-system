<script>
import { mapMutations } from "vuex";
import formMixins from "../../../mixins/formMixins";

export default {
  data() {
    return {
      municipalities: this.$store.state.municipalities,
      newStudentFullName: this.$props.studentFullName,
      newStudentDob: this.$props.studentDob,
      newStudentMunicipality: this.$props.studentMunicipality,
      todaysDate: new Date().toISOString().split("T")[0],
      nameState: null,
      dobState: null,
      municipalityState: null,
      submitInvalid: null,
      mainError: "Please fill all the fields.",
    };
  },

  methods: {
    ...mapMutations(["editStudent"]),

    handleEdit(e) {
      e.preventDefault();

      this.validate(
        this.newStudentFullName,
        this.newStudentDob,
        this.newStudentMunicipality
      );

      if (!this.nameState || !this.dobState || !this.municipalityState) {
        this.submitInvalid = true;
        return;
      }

      const payload = {
        studentIndex: this.studentIndex,
        newStudentFullName: this.newStudentFullName,
        newStudentDob: this.newStudentDob,
        newStudentMunicipality: this.newStudentMunicipality,
      };

      this.editStudent(payload);
      this.resetState();
      this.hideModal(this.editStudentModalId);
    },

    resetState() {
      const { studentFullName, studentDob, studentMunicipality } = this.$props;
      this.newStudentFullName = studentFullName;
      this.newStudentDob = studentDob;
      this.newStudentMunicipality = studentMunicipality;
      this.submitInvalid = null;
      this.nameState = null;
      this.dobState = null;
      this.municipalityState = null;
    },
  },

  props: [
    "studentIndex",
    "studentFullName",
    "studentDob",
    "studentMunicipality",
    "editStudentModalId",
  ],

  mixins: [formMixins],
};
</script>

<template>
  <b-modal
    :id="editStudentModalId"
    title="Edit student information"
    okTitle="Save"
    @ok="handleEdit"
    @hidden="hideModal"
  >
    <b-row>
      <b-col cols="11">
        <b-alert v-if="submitInvalid" variant="danger" show>{{
          mainError
        }}</b-alert>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="11">
        <b-form-group
          class="d-flex align-items-center"
          label="Index"
          label-for="index"
          content-cols="8"
        >
          <b-form-input
            class="m-2"
            type="text"
            id="index"
            name="index"
            :value="studentIndex"
            disabled
          >
          </b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="11">
        <b-form-group
          class="d-flex align-items-center"
          label="Full Name"
          label-for="full_name"
          content-cols="8"
        >
          <b-form-input
            v-model="newStudentFullName"
            class="m-2"
            type="text"
            id="full_name"
            name="full name"
            :state="nameState"
            required
          >
          </b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="11">
        <b-form-group
          class="d-flex align-items-center"
          label="Date of Birth"
          label-for="date_of_birth"
          content-cols="8"
        >
          <b-form-input
            v-model="newStudentDob"
            class="m-2"
            type="date"
            id="date_of_birth"
            name="date of birth"
            :state="dobState"
            :max="todaysDate"
            required
          >
          </b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="11">
        <b-form-group
          class="d-flex align-items-center"
          label="Municipality"
          label-for="municipality"
          content-cols="8"
        >
          <b-form-select
            v-model="newStudentMunicipality"
            class="m-2 w-100"
            :options="municipalities"
            id="municipality"
            :state="municipalityState"
          />
        </b-form-group>
      </b-col>
    </b-row>
  </b-modal>
</template>
