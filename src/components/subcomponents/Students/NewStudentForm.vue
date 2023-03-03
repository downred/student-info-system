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
      datePickerOptions: {
        disabledDate(date) {
          return date > new Date();
        },
      },
      formModel: {
        studentFullName: "",
        studentDob: "",
        studentMunicipality: "",
      },
      rules: {
        studentFullName: [
          {
            required: true,
            message: "Please input the student's name",
            trigger: "change",
          },
        ],
        studentDob: [
          {
            type: "date",
            required: true,
            message: "Please pick a date of birth",
            trigger: "change",
          },
        ],
        studentMunicipality: [
          {
            required: true,
            message: "Please select a municipality",
            trigger: "change",
          },
        ],
      },
    };
  },

  methods: {
    ...mapMutations(["addNewStudent"]),

    handleAdd(formName) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const payload = {
            studentFullName: this.formModel.studentFullName,
            studentDob: this.formModel.studentDob,
            studentMunicipality: this.formModel.studentMunicipality,
          };

          this.addNewStudent(payload);
          this.closeModal();
        } else {
          return;
        }
      });
      //
      // this.validate(
      //   this.studentFullName,
      //   this.studentDob,
      //   this.studentMunicipality
      // );
      //
      // if (!this.nameState || !this.dobState || !this.municipalityState) {
      //   this.submitInvalid = true;
      //   return;
      // }
    },

    resetForm() {
      this.$refs.form.resetFields();
    },
  },

  mixins: [formMixins],

  props: ["dialogVisible"],
};
</script>

<template>
  <el-dialog title="Add new student" :visible="dialogVisible" width="40%">
    <el-form ref="form" :rules="rules" :model="formModel">
      <el-row>
        <el-col>
          <el-form-item
            class="d-flex"
            label="Full Name"
            for="full_name"
            prop="studentFullName"
          >
            <el-input
              v-model="formModel.studentFullName"
              type="text"
              id="full_name"
              name="full name"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item
            class="d-flex"
            label="Date of Birth"
            label-for="date_of_birth"
            prop="studentDob"
          >
            <el-date-picker
              v-model="formModel.studentDob"
              type="date"
              id="date_of_birth"
              name="date of birth"
              class="w-100"
              :picker-options="datePickerOptions"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-form-item
            class="d-flex"
            label="Municipality"
            label-for="municipality"
            prop="studentMunicipality"
          >
            <el-select
              v-model="formModel.studentMunicipality"
              class="w-100"
              :placeholder="municipalitiesSelectPlaceholder"
              id="municipality"
            >
              <el-option
                v-for="item in municipalities"
                :key="item.value"
                :label="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeModal">Cancel</el-button>
      <el-button type="primary" @click="handleAdd('formModel')">Add</el-button>
    </span>
  </el-dialog>

  <!--  <b-modal-->
  <!--    :id="modalId"-->
  <!--    title="Add new student"-->
  <!--    okTitle="Add"-->
  <!--    @ok="handleAdd"-->
  <!--    @hidden="hideModal"-->
  <!--  >-->
  <!--  </b-modal>-->
</template>

<style>
.el-form-item__label {
  text-align: left;
}

.el-form-item__content {
  margin-left: auto;
  width: 70%;
}

.el-dialog__headerbtn {
  display: none;
}

.el-form-item__error {
  padding-top: 0 !important;
}

@media screen and (max-width: 1180px) {
  .el-dialog {
    width: 50% !important;
  }
}

@media screen and (max-width: 920px) {
  .el-dialog {
    width: 70% !important;
  }
}

@media screen and (max-width: 565px) {
  .el-dialog {
    width: 85% !important;
  }

  .el-form-item__content {
    margin-left: auto;
    width: 60%;
  }
}

@media screen and (max-width: 410px) {
  .el-dialog {
    width: 90% !important;
  }
}
</style>
