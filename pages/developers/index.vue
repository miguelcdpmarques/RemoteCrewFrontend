<template>
  <div>
    <header class="freelancers-header">  
        <MainNavbar></MainNavbar>
        <DevelopersHeader></DevelopersHeader>
        <DevelopersSubHeader></DevelopersSubHeader>
    </header>
    <main>
        <SectionHowItWorksDeveloper></SectionHowItWorksDeveloper>
        <SectionWhyRemote></SectionWhyRemote>
        <SectionApplicationProcess title="Application Process"></SectionApplicationProcess>
        <SectionDeveloperStart></SectionDeveloperStart>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>
                
<script>
import MainNavbar from '~/components/Navbar/MainNavbar'
import DevelopersHeader from '~/components/Header/DevelopersHeader'
import DevelopersSubHeader from '~/components/Header/DevelopersSubHeader'
import SectionHowItWorksDeveloper from '~/components/Sections/SectionHowItWorksDeveloper'
import SectionWhyRemote from '~/components/Sections/SectionWhyRemote'
import SectionApplicationProcess from '~/components/Sections/SectionApplicationProcess'
import SectionDeveloperStart from '~/components/Sections/SectionDeveloperStart'
import TheFooter from '~/components/Footer/TheFooter'

export default {
    components: {
        MainNavbar,
        DevelopersHeader,
        DevelopersSubHeader,
        SectionHowItWorksDeveloper,
        SectionWhyRemote,
        SectionApplicationProcess,
        SectionDeveloperStart,
        TheFooter
    }
}
</script>
                        
<style lang='scss'>
                
</style>