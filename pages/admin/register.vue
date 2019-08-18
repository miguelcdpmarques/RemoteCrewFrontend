<template>
    <div>
        <header class="client-signup__header">   
            <MainNavbar :alwaysShrunk="true"></MainNavbar>             
        </header>
        <main>
            <TheRegister></TheRegister>
        </main>
        <TheFooter></TheFooter>
    </div>
</template>
                
<script>
import MainNavbar from '~/components/Navbar/MainNavbar'
import TheRegister from '~/components/Auth/TheRegister'
import TheFooter from '~/components/Footer/TheFooter'

export default {
    components: {
        MainNavbar,
        TheRegister,
        TheFooter
    }
}
</script>
                        
<style lang='scss'>
                
</style>