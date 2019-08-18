<template>
  <div>
    <header class="homepage-header">
      <MainNavbar :authenticated="loggedIn" :role="role"></MainNavbar>
      <HomeHeader></HomeHeader>
    </header>
    <main>
      <SectionContractors></SectionContractors>
      <SectionHowItWorksClient></SectionHowItWorksClient>
      <SectionApplicationProcess title="Contractor Vetting Process"></SectionApplicationProcess>
      <SectionJumpstart></SectionJumpstart>
      <SectionClientStart></SectionClientStart>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import MainNavbar from '~/components/Navbar/MainNavbar'
import HomeHeader from '~/components/Header/HomeHeader'
import SectionContractors from '~/components/Sections/SectionContractors'
import SectionHowItWorksClient from '~/components/Sections/SectionHowItWorksClient'
import SectionApplicationProcess from '~/components/Sections/SectionApplicationProcess'
import SectionJumpstart from '~/components/Sections/SectionJumpstart'
import SectionClientStart from '~/components/Sections/SectionClientStart'
import TheFooter from '~/components/Footer/TheFooter'

export default {
  components: {
    MainNavbar,
    HomeHeader,
    SectionContractors,
    SectionHowItWorksClient,
    SectionApplicationProcess,
    SectionJumpstart,
    SectionClientStart,
    TheFooter
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.userIsAuthenticated
    },
    role() {
      return this.$store.state.auth.role
    }
  },
  created() {
    console.log(this.$store.state.auth.userIsAuthenticated)
    console.log(this.$store.state.auth.role)
  }
}
</script>

<style>

</style>
