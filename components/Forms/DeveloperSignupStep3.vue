<template>
  <div id="freelancerSignup-step3" class="signup-box-client signup-box-client-lg" :class="{hidden: isHidden}">
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="title">Professional title</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <p class="signup-box_support-text">The more concrete the title, the easier it will be to find projects relevant to your profile. </p>
        <input v-model="formFields.title" class="form-control" id="title" name="title" type="text" value="">
        <div ref="invalid-title" id="invalid-title" class="main-invalid-feedback hidden">
            Please introduce a title.
        </div>
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="description">Description</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <p class="signup-box_support-text">Define in detail your skills, experiences and projects. Why should customers trust the quality of your work? What sets you apart from other contractors? The more specific the response, the greater the likelihood of success.</p>
        <textarea v-model="formFields.description" class="form-control main-text-area" id="description" name="description"></textarea>
        <div ref="invalid-description" id="invalid-description" class="main-invalid-feedback hidden">
            Please describe the work you do for clients.
        </div>
    </div>
    <span class="obrigatorio-text">Fields marked with * are required.</span>
    <div class="signup-box-button-group">
        <button @click="onPrevious" type="button" id="btnanterior3" class="btn btn-anterior">Previous</button>
        <button @click="onProceed" type="button" id="btncontinuar3" class="btn btn-progredir">Proceed</button>
    </div>  
  </div>
</template>
                
<script>
export default {
  props: ['isHidden'],
  data() {
    return {
      formFields: {
        title: '',   
        description: '',
      },
      fieldValidation: {
        title: 'invalid-title',   
        description: 'invalid-description',
      }
    }
  },
  methods: {
    onPrevious() {
      this.$emit('previousFormStep', 'step3') 
    },
    onProceed() {
      if(this.validateFields()) {
        this.$emit('nextFormStep', 'step3')           
      }
    },
    validateFields() {
      let validForm = true
      for(let key in this.formFields){
        let fieldValidationElement = this.$refs[this.fieldValidation[key]]
        if(this.formFields[key] == '') {
          validForm = false
          fieldValidationElement.className = 'main-invalid-feedback'
        } else {
          fieldValidationElement.className = 'main-invalid-feedback hidden'
        }           
      }
      return validForm       
    }
  }
}
</script>
                        
<style lang='scss'>
                
</style>