<template> 
    <div id="freelancerSignup-step1" 
        class="signup-box-client signup-box-client-lg" 
        :class="{hidden:isHidden}">
        <div class="media">                
            <img id="foto_perfil_imagem" src="~assets/images/profile_pics/default.jpg" alt="" class="signup-box_profile-pic">

            <div class="signup-box-question-group">
                <label class="form-label signup_formlabel" for="foto_perfil">Profile Photo</label>
                <input accept="image/*" class="form-control-file form-file-text mt-3 mb-3" id="foto_perfil" name="foto_perfil" type="file">
                <span class="support-text">Please upload a square image to avoid distortion.</span>
            </div>
        </div>
        <div class="signup-box-basicinfo">
            <div class="signup-box-question-group signup-box_half-width">
                <label class="form-label signup_formlabel" for="nome_completo">Full Name</label>
                <span class="obrigatorio-symbol">*</span>
                <input class="form-control support-email-input" id="nome_completo" name="nome_completo" type="text" value="">
                <div id="invalid-nome_completo" class="main-invalid-feedback hidden">
                    Please write your name.
                </div>
            </div>
            <div class="signup-box-question-group signup-box_half-width float-right">
                <label class="form-label signup_formlabel" for="email">Email</label>
                <span class="obrigatorio-symbol">*</span>
                <p class="support-email-text">We will contact you through this email. </p>
                <input class="form-control" id="email" name="email" readonly="" type="text" value="admin@tester.comr">
                <div id="invalid-email" class="main-invalid-feedback hidden">
                    Please introduce an email.
                </div>
            </div>
        </div>            
        <div class="signup-box-basicinfo">
            <div class="signup-box-question-group signup-box_half-width">
                <label class="form-label signup_formlabel" for="telefone">Phone</label>
                <div class="input-group mb-3">
                    <input class="form-control" id="telefone" name="telefone" type="text" value="">
                </div>
            </div>
            <div class="signup-box-question-group signup-box_half-width float-right">
                <label class="form-label signup_formlabel" for="distrito">Location</label>
                <span class="obrigatorio-symbol">*</span>
                <select class="form-control" id="distrito" name="distrito">
                    <option value="" disabled="true">Select</option>
                    <option value="International">International</option>
                    <option value="--------" disabled="true">--------</option>
                    <option value="Lisboa">Lisboa</option>
                    <option value="Porto">Porto</option>
                    <option value="Aveiro">Aveiro</option>
                    <option value="Beja">Beja</option>
                    <option value="Braga">Braga</option>
                    <option value="Bragança">Bragança</option>
                    <option value="Castelo Branco">Castelo Branco</option>
                    <option value="Coimbra">Coimbra</option>
                    <option value="Évora">Évora</option>
                    <option value="Faro">Faro</option>
                    <option value="Guarda">Guarda</option>
                    <option value="Leiria">Leiria</option>
                    <option value="Portalegre">Portalegre</option>
                    <option value="Santarém">Santarém</option>
                    <option value="Setúbal">Setúbal</option>
                    <option value="Viseu">Viseu</option>
                    <option value="Viana Do Castelo">Viana Do Castelo</option>
                    <option value="Vila Real">Vila Real</option>
                    <option value="Madeira">Madeira</option>
                    <option value="Açores">Açores</option>
                    </select>
                <div id="invalid-distrito" class="main-invalid-feedback hidden">
                    Please select a location.
                </div>
            </div>
        </div>
        <div class="signup-box-button-group mt-2 mb-2">
            <button type="button" id="btncontinuar1" class="btn btn-progredir">Proceed</button>
        </div>
        <span class="obrigatorio-text">Fields marked with * are required.</span>
    </div>
</template>
                
<script>
export default {
    props: ['isHidden']
}
</script>
                        
<style lang='scss'>
                
</style>