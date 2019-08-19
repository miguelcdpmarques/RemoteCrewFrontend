<template>
  <div id="freelancerSignup-step2" class="signup-box-client signup-box-client-lg" :class="{hidden: isHidden}">
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="categoria">What's the main category of work you provide as a contractor?</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <select class="btn btn-dropdown" id="categoria" name="categoria">
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
        <div id="invalid-categoria" class="main-invalid-feedback hidden">
            Please select a category.
        </div>
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="skills_principais">What are your top skills?</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <p class="signup-box_support-text">Enter up to 6 skills separated by commas. They should represent the stack in which you have the most experience as a professional. Example: JavaScript, PHP, Laravel, MySQL. </p>
        <input type="text" name="" value="This has to be reviewed for tags input">
        <div id="invalid-skills_principais" class="main-invalid-feedback hidden">
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
          
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <div class="radio-answer-box">   
          <label class="radio-answer-box-label">
              <input class="radio-answer-box-input" id="disponibilidade" name="disponibilidade" type="radio" value="Test1"> 
              <span class="radio-answer-box-span radio-answer-box-span-sm">Test1</span>
          </label>
          <label class="radio-answer-box-label">
              <input class="radio-answer-box-input" id="disponibilidade" name="disponibilidade" type="radio" value="Test2"> 
              <span class="radio-answer-box-span radio-answer-box-span-sm">Test2</span>
          </label>  
        </div>
        <div id="invalid-disponibilidade" class="main-invalid-feedback hidden">
            Please choose an option.
        </div>
    </div>
    <div class="signup-box-button-group">
        <button type="button" id="btnanterior2" class="btn btn-anterior">Previous</button>
        <button type="button" id="btncontinuar2" class="btn btn-progredir">Proceed</button>
    </div>
  </div>
</template>
                
<script>
export default {
  props: ['isHidden']
}
</script>
                        
<style lang='scss'>
                
</style>