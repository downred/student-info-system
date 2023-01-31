<script>
import { mapMutations } from "vuex";
import formMixins from "../../../mixins/formMixins";

export default {
  data() {
    return {
      municipalities: this.$store.state.municipalities,
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
    <b-row>
      <b-col cols="11">
        <b-alert v-if="submitInvalid" variant="danger" show>{{
          mainError
        }}</b-alert>
      </b-col>
    </b-row>

    <form ref="form">
      <b-row>
        <b-col cols="11">
          <b-form-group
            class="d-flex align-items-center"
            label="Full Name"
            label-for="full_name"
            content-cols="8"
          >
            <b-form-input
              v-model="studentFullName"
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
            label-for="full_name"
            content-cols="8"
          >
            <b-form-input
              v-model="studentDob"
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
              v-model="studentMunicipality"
              class="m-2 w-100"
              :options="municipalities"
              id="municipality"
              :state="municipalityState"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </form>
  </b-modal>
</template>
