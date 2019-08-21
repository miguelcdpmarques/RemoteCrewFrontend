<template>
  <div id="freelancerSignup-step4" class="signup-box-client signup-box-client-lg" :class="{hidden: isHidden}">
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="linkedin_profile">LinkedIn Profile</label>
        </h4>
        <input class="form-control" id="linkedin_profile" name="linkedin_profile" placeholder="https://www.linkedin.com/in/nome123" type="text" value="">
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="perfil_github">Github, Bitbucket or StackOverflow Profile</label>
        </h4>
        <input class="form-control" id="perfil_github" name="perfil_github" placeholder="https://github.com/nome" type="text" value="">
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
            <label class="signup_formlabel" for="experiencia_area">Years of professional experience</label>
            <span class="obrigatorio-symbol">*</span>
        </h4>
        <RadioForm 
            :question="'experiencia_area'" 
            :options="['< 1 Year', '1 - 3 Years', '4 - 9 Years', '> 10 Years']"></RadioForm>
        <div ref="invalid-experiencia_area" id="invalid-experiencia_area" class="main-invalid-feedback hidden">
            Please select an option.
        </div>
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="freelancer_atual">Do you currently work as a contractor?</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <RadioForm :question="'freelancer_atual'" :options="['Yes', 'No']"></RadioForm>
        <div ref="invalid-freelancer_atual" id="invalid-freelancer_atual" class="main-invalid-feedback hidden">
            Please select an option.
        </div>
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="freelancer_fulltime">Are you a full-time contractor (&gt; 30h week)?</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <RadioForm :question="'freelancer_fulltime'" :options="['Yes', 'No']"></RadioForm>
        <div ref="invalid-freelancer_fulltime" id="invalid-freelancer_fulltime" class="main-invalid-feedback hidden">
            Please select an option.
        </div>
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="experiencia_freelance">Years of experience working as a contractor</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <RadioForm :question="'experiencia_freelance'" :options="['Less than 3', 'More than 3']"></RadioForm>
        <div ref="invalid-experiencia_freelance" id="invalid-experiencia_freelance" class="main-invalid-feedback hidden">
            Please select an option.
        </div>
    </div>
    <span class="obrigatorio-text">Fields marked with * are required.</span>
    <div class="signup-box-button-group">
        <button @click="onPrevious" type="button" id="btnanterior4" class="btn btn-anterior">Previous</button>
        <input class="btn btn-progredir" type="submit" id="btnsubmeter" name="submit" value="Submit">
    </div>
  </div>
</template>
                
<script>
import RadioForm from '~/components/Forms/RadioForm'

export default {
  props: ['isHidden'],
  data() {
    return {
      formFields: {
        experiencia_area: '',   
        freelancer_atual: '',
        freelancer_fulltime: '',
        experiencia_freelance: ''
      },
      fieldValidation: {
        experiencia_area: 'invalid-experiencia_area',   
        freelancer_atual: 'invalid-freelancer_atual',
        freelancer_fulltime: 'invalid-freelancer_fulltime',
        experiencia_freelance: 'invalid-experiencia_freelance'
      }
    }
  },
  methods: {
    onPrevious() {
      this.$emit('previousFormStep', 'step4') 
    },
    onSubmit() {
      if(this.validateFields()) {
        this.$emit('submitForm')
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
  },
  components: {
    RadioForm
  }
}
</script>
                        
<style lang='scss'>
                
</style>