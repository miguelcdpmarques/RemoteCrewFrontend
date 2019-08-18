<template>
    <div>
        <header class="client-signup__header">   
            <MainNavbar :alwaysShrunk="true"></MainNavbar>             
        </header>
        <main>
            <TheLogin></TheLogin>
        </main>
        <TheFooter></TheFooter>
    </div>
</template>
                
<script>
import MainNavbar from '~/components/Navbar/MainNavbar'
import TheLogin from '~/components/Auth/TheLogin'
import TheFooter from '~/components/Footer/TheFooter'

export default {
    components: {
        MainNavbar,
        TheLogin,
        TheFooter
    }
}
</script>
                        
<style lang='scss'>
                
</style>