<template>
    <section class="section-processo-candidatura">
        <h2 class="heading-secondary">{{ title }}</h2>
        <div class="container">
            <div class="row">
                <div class="col-sm candidatura">
                    <img class="candidatura-icon mt-3" src="~assets/images/contractors/icon_form.png" alt="Candidatura">
                    <div class="candidatura-content">
                        <h3 class="candidatura-heading">Online Application</h3>
                        <p class="candidatura-paragraph">Describe your profile, the stack you're most comfortable with and show your portfolio</p>
                    </div>
                </div>
                <div class="col-sm candidatura">
                    <img class="candidatura-icon mt-3" src="~assets/images/contractors/icon_skype.png" alt="Entrevista Skype">
                    <div class="candidatura-content">
                        <h3 class="candidatura-heading">Video Interview</h3>
                        <p class="candidatura-paragraph">Tell us about your past experiences and the type of projects you are looking for</p>
                    </div>
                </div>
                <div class="col-sm candidatura">
                    <img class="candidatura-icon mt-3" src="~assets/images/contractors/icon_code.png" alt="Teste técnico">
                    <div class="candidatura-content">
                        <h3 class="candidatura-heading">Technical Assessment</h3>
                        <p class="candidatura-paragraph">Perform our technical test so we can assess your level of technical expertise</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
                
<script>
export default {
    props: ['title']
}
</script>
                        
<style lang='scss'>
                
</style>