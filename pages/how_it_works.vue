<template>
  <div>
    <header class="como-funciona__header">
        <MainNavbar></MainNavbar>
        <HowItWorksHeader></HowItWorksHeader>
    </header>
    <main>
        <SectionHowItWorksDescription></SectionHowItWorksDescription>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>
                
<script>
import MainNavbar from '~/components/Navbar/MainNavbar'
import HowItWorksHeader from '~/components/Header/HowItWorksHeader'
import SectionHowItWorksDescription from '~/components/Sections/SectionHowItWorksDescription'
import TheFooter from '~/components/Footer/TheFooter'

export default {
    components: {
        MainNavbar,
        HowItWorksHeader,
        SectionHowItWorksDescription,
        TheFooter
    }
}
</script>
                        
<style lang='scss'>
                
</style>