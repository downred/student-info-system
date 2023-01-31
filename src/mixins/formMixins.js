export default {
  methods: {
    validate(...propsToValidate) {
      let nameIsValid = propsToValidate[0] != "";
      let dobIsValid = propsToValidate[1] != "";
      let municipalityisValid = propsToValidate[2] != "";

      this.checkName(nameIsValid);
      this.checkDob(dobIsValid);
      this.checkMunicipality(municipalityisValid);
    },

    checkName(nameIsValid) {
      if (!nameIsValid) {
        this.nameState = false;
      } else {
        this.nameState = true;
      }
    },

    checkDob(dobIsValid) {
      if (!dobIsValid) {
        this.dobState = false;
      } else {
        this.dobState = true;
      }
    },

    checkMunicipality(municipalityisValid) {
      if (!municipalityisValid) {
        this.municipalityState = false;
      } else {
        this.municipalityState = true;
      }
    },

    hideModal(modalId) {
      this.$nextTick(() => {
        this.$bvModal.hide(modalId.toString());
      });

      this.resetState();
    },
  },
};
