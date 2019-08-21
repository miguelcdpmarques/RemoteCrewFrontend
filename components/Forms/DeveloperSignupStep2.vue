<template>
  <div id="freelancerSignup-step2" class="signup-box-client signup-box-client-lg" :class="{hidden: isHidden}">
    <div class="signup-box-question-group">
      <h4 class="signup-question">
        <label class="signup_formlabel" for="category">What's the main category of work you provide as a contractor?</label>
        <span class="obrigatorio-symbol">*</span>
      </h4>
      <select v-model="formFields.category" class="btn btn-dropdown" id="category" name="category">
        <option value="">Select</option>
        <option value="Web Development">Web Development</option>
        <option value="Frontend Development">Frontend Development</option>
        <option value="Backend Development">Backend Development</option>
        <option value="E-commerce Development">E-commerce Development</option>
        <option value="Desktop Apps Development">Desktop Apps Development</option>
        <option value="Mobile Development">Mobile Development</option>
        <option value="Game Development">Game Development</option>
        <option value="API Development">API Development</option>
        <option value="Data Science">Data Science</option>
        <option value="DevOps">DevOps</option>
        <option value="Other">Other</option>
        </select>
      <div ref="invalid-category" id="invalid-category" class="main-invalid-feedback hidden">
          Please select a category.
      </div>
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="skills_principais">What are your top skills?</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <p class="signup-box_support-text">Enter up to 6 skills separated by commas. They should represent the stack in which you have the most experience as a professional. Example: JavaScript, PHP, Laravel, MySQL. </p>
        <input v-model="formFields.skills" type="text" name="" value="This has to be reviewed for tags input">
        <div ref="invalid-skills_principais" id="invalid-skills_principais" class="main-invalid-feedback hidden">
            Please enter your skills.
        </div>
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="experiencia_skills">Experience with each skill</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <p class="signup-box_support-text">Enter the experience you have with each of the defined skills.</p>
        <div class="signup-box-experience-group">
            <table id="experience-table" class="table experience-table">
                <thead>
                  <tr>
                    <th class="experience-table-row" scope="col">Skill</th>
                    <th class="experience-table-row" scope="col">Experience</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <input class="form-control hidden" id="experiencia_skills" name="experiencia_skills" type="text" value="">
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="availability">What is your availability to work in new projects?</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <RadioForm 
          @change="formFields.availability = $event" 
          :question="'availability'" 
          :options="['Part-time', 'Full-time']"></RadioForm>
        <div ref="invalid-availability" id="invalid-availability" class="main-invalid-feedback hidden">
            Please choose an option.
        </div>
    </div>
    <span class="obrigatorio-text">Fields marked with * are required.</span>
    <div class="signup-box-button-group">
        <button @click="onPrevious" type="button" id="btnanterior2" class="btn btn-anterior">Previous</button>
        <button @click="onProceed" type="button" id="btncontinuar2" class="btn btn-progredir">Proceed</button>
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
        category: '',   
        skills: '',
        availability: ''
      },
      fieldValidation: {
        category: 'invalid-category',   
        skills: 'invalid-skills_principais',
        availability: 'invalid-availability'
      }
    }
  },
  methods: {
    onPrevious() {
      this.$emit('previousFormStep', 'step2') 
    },
    onProceed() {
      if(this.validateFields()) {
        this.$emit('nextFormStep', 'step2')           
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