<template>
  <div id="freelancerSignup-step4" class="signup-box-client signup-box-client-lg" :class="{hidden: isHidden}">
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="perfil_linkedin">LinkedIn Profile</label>
        </h4>
        <input class="form-control" id="perfil_linkedin" name="perfil_linkedin" placeholder="https://www.linkedin.com/in/nome123" type="text" value="">
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="perfil_github">Github, Bitbucket or StackOverflow Profile</label>
        </h4>
        <input class="form-control" id="perfil_github" name="perfil_github" placeholder="https://github.com/nome" type="text" value="">
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question"><label class="signup_formlabel" for="experiencia_area">Years of professional experience</label><span class="obrigatorio-symbol">*</span></h4>
        <div class="radio-answer-box">
            <label class="radio-answer-box-label">
                <input class="radio-answer-box-input" id="experiencia_area" name="experiencia_area" type="radio" value="Test1"> 
                <span class="radio-answer-box-span radio-answer-box-span-sm">Test1</span>
            </label>
            <label class="radio-answer-box-label">
                <input class="radio-answer-box-input" id="experiencia_area" name="experiencia_area" type="radio" value="Test1"> 
                <span class="radio-answer-box-span radio-answer-box-span-sm">Test1</span>
            </label>
        </div>
        <div id="invalid-experiencia_area" class="main-invalid-feedback hidden">
            Please select an option.
        </div>
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="freelancer_atual">Do you currently work as a contractor?</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <div class="radio-answer-box">
            <label class="radio-answer-box-label">
                <input class="radio-answer-box-input" id="freelancer_atual" name="freelancer_atual" type="radio" value="Test1"> 
                <span class="radio-answer-box-span radio-answer-box-span-sm">Test2</span>
            </label>
            <label class="radio-answer-box-label">
                <input class="radio-answer-box-input" id="freelancer_atual" name="freelancer_atual" type="radio" value="Test1"> 
                <span class="radio-answer-box-span radio-answer-box-span-sm">Test2</span>
            </label>
        </div>
        <div id="invalid-freelancer_atual" class="main-invalid-feedback hidden">
            Please select an option.
        </div>
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="freelancer_fulltime">Are you a full-time contractor (&gt; 30h week)?</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <div class="radio-answer-box">
          <label class="radio-answer-box-label">
              <input class="radio-answer-box-input" id="freelancer_fulltime" name="freelancer_fulltime" type="radio" value="Test1"> 
              <span class="radio-answer-box-span radio-answer-box-span-sm">Test1</span>
          </label>
          <label class="radio-answer-box-label">
              <input class="radio-answer-box-input" id="freelancer_fulltime" name="freelancer_fulltime" type="radio" value="Test1"> 
              <span class="radio-answer-box-span radio-answer-box-span-sm">Test1</span>
          </label>
        </div>
        <div id="invalid-freelancer_fulltime" class="main-invalid-feedback hidden">
            Please select an option.
        </div>
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="experiencia_freelance">Years of experience working as a contractor</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <div class="radio-answer-box">
            <label class="radio-answer-box-label">
                <input class="radio-answer-box-input" id="experiencia_freelance" name="experiencia_freelance" type="radio" value="Test1"> 
                <span class="radio-answer-box-span radio-answer-box-span-sm">Test1</span>
            </label>
            <label class="radio-answer-box-label">
                <input class="radio-answer-box-input" id="experiencia_freelance" name="experiencia_freelance" type="radio" value="Test1"> 
                <span class="radio-answer-box-span radio-answer-box-span-sm">Test1</span>
            </label>
        </div>
        <div id="invalid-experiencia_freelance" class="main-invalid-feedback hidden">
            Please select an option.
        </div>
    </div>
    <div class="signup-box-button-group">
        <button type="button" id="btnanterior4" class="btn btn-anterior">Previous</button>
        <input class="btn btn-progredir" id="btnsubmeter" name="submit" type="submit" value="Submit">
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