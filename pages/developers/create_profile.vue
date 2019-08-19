<template>
  <div>
    <header class="client-signup__header"> 
        <MainNavbar :alwaysShrunk="true"></MainNavbar>
    </header>
    <main>
        <section class="section-client-signup-form">
            <SectionHowItWorksDeveloperShort></SectionHowItWorksDeveloperShort>
            <div class="signup-box container">
                <form action="" method="POST" enctype="multipart/form-data">
                    <DeveloperSignupStep1 :isHidden="isHiddenStep1"></DeveloperSignupStep1>
                    <DeveloperSignupStep2 :isHidden="isHiddenStep2"></DeveloperSignupStep2>
                    <DeveloperSignupStep3 :isHidden="isHiddenStep3"></DeveloperSignupStep3>
                    <DeveloperSignupStep4 :isHidden="isHiddenStep4"></DeveloperSignupStep4>
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
            isHiddenStep1: false,
            isHiddenStep2: false,
            isHiddenStep3: false,
            isHiddenStep4: false
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