<template>
  <div>
    <header class="client-signup__header"> 
        <MainNavbar :alwaysShrunk="true"></MainNavbar>
    </header>
    <main>
        <section class="section-client-signup-form">
            <SectionHowItWorksDeveloperShort :stepsFilled="stepsFilled"></SectionHowItWorksDeveloperShort>
            <div class="signup-box container">
                <form @submit.prevent="onSubmit" enctype="multipart/form-data">
                    <DeveloperSignupStep1 
                        :isHidden="isHiddenStep1" 
                        @nextFormStep="nextFormStep"></DeveloperSignupStep1>
                    <DeveloperSignupStep2 
                        :isHidden="isHiddenStep2" 
                        @nextFormStep="nextFormStep"
                        @previousFormStep="previousFormStep"></DeveloperSignupStep2>
                    <DeveloperSignupStep3 
                        :isHidden="isHiddenStep3" 
                        @nextFormStep="nextFormStep"
                        @previousFormStep="previousFormStep"></DeveloperSignupStep3>
                    <DeveloperSignupStep4 
                        :isHidden="isHiddenStep4" 
                        @submitForm="onSubmit"
                        @previousFormStep="previousFormStep"></DeveloperSignupStep4>
                </form>
            </div>
        </section>
    </main>
  </div>
</template>
                
<script>
import MainNavbar from '~/components/Navbar/MainNavbar'
import SectionHowItWorksDeveloperShort from '~/components/Sections/SectionHowItWorksDeveloperShort'
import DeveloperSignupStep1 from '~/components/Forms/DeveloperSignupStep1'
import DeveloperSignupStep2 from '~/components/Forms/DeveloperSignupStep2'
import DeveloperSignupStep3 from '~/components/Forms/DeveloperSignupStep3'
import DeveloperSignupStep4 from '~/components/Forms/DeveloperSignupStep4'

export default {
    data() {
        return {
            stepsFilled: {
                'step1': true,
                'step2': false,
                'step3': false,
                'step4': false
            },
            isHiddenStep1: false,
            isHiddenStep2: true,
            isHiddenStep3: true,
            isHiddenStep4: true
        }
    },
    // middleware: ['auth'],
    methods: {
        previousFormStep(currentStep) {
            if (currentStep == 'step2') {
                this.isHiddenStep1 = false
                this.isHiddenStep2 = true
                this.stepsFilled.step2 = false
            }
            if (currentStep == 'step3') {
                this.isHiddenStep2 = false
                this.isHiddenStep3 = true
                this.stepsFilled.step3 = false
            }
            if (currentStep == 'step4') {
                this.isHiddenStep3 = false
                this.isHiddenStep4 = true
                this.stepsFilled.step4 = false
            }
        },
        nextFormStep(currentStep) {
            if (currentStep == 'step1') {
                this.isHiddenStep1 = true
                this.isHiddenStep2 = false
                this.stepsFilled.step2 = true
            }
            if (currentStep == 'step2') {
                this.isHiddenStep2 = true
                this.isHiddenStep3 = false
                this.stepsFilled.step3 = true
            }
            if (currentStep == 'step3') {
                this.isHiddenStep3 = true
                this.isHiddenStep4 = false
                this.stepsFilled.step4 = true
            }
        },
        onSubmit() {
            console.log("Here we will submit the data to our API and redirect the user to the confirmation page.")
        }
    },
    components: {
        MainNavbar,
        SectionHowItWorksDeveloperShort,
        DeveloperSignupStep1,
        DeveloperSignupStep2,
        DeveloperSignupStep3,
        DeveloperSignupStep4
    }
}
</script>
                        
<style lang='scss'>
                
</style>