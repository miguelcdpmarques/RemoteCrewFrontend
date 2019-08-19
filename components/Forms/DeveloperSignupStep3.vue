<template>
  <div id="freelancerSignup-step3" class="signup-box-client signup-box-client-lg" :class="{hidden: isHidden}">
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="titulo">Professional title</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <p class="signup-box_support-text">The more concrete the title, the easier it will be to find projects relevant to your profile. </p>
        <input class="form-control" id="titulo" name="titulo" type="text" value="">
        <div id="invalid-titulo" class="main-invalid-feedback hidden">
            Please introduce a title.
        </div>
    </div>
    <div class="signup-box-question-group">
        <h4 class="signup-question">
          <label class="signup_formlabel" for="descricao">Description</label>
          <span class="obrigatorio-symbol">*</span>
        </h4>
        <p class="signup-box_support-text">Define in detail your skills, experiences and projects. Why should customers trust the quality of your work? What sets you apart from other contractors? The more specific the response, the greater the likelihood of success.</p>
        <textarea class="form-control main-text-area" id="descricao" name="descricao"></textarea>
        <div id="invalid-descricao" class="main-invalid-feedback hidden">
            Please describe the work you do for clients.
        </div>
    </div>
    <div class="signup-box-button-group">
        <button type="button" id="btnanterior3" class="btn btn-anterior">Previous</button>
        <button type="button" id="btncontinuar3" class="btn btn-progredir">Proceed</button>
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