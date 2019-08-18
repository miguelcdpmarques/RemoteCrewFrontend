<template>
    <section class="section-client-signup-form login-bg">   
        <div class="signup-box container">   
            <div v-for="message in messages" :key="message.id" class="alert alert-warning mt-4 mb-0">
                <button type="button" class="close" data-dismiss="alert">
                    <span aria-hidden="true">&times;</span>
                </button>
                {{ message }}
            </div>
            <div class="signup-box-header signup-box-client">
                <h4 class="signup-box-header-text">Contractor Registration</h4>
            </div>
            <div class="signup-box-client signup-box-confirmacao">
                <p class="login-text">Join us and start receiving proposals</p>
                <form @submit.prevent="onSubmit">
                    <!-- <input id="csrf_token" name="csrf_token" type="hidden" value="ImY0YjFjMmU3ZDVjMTY4NmMxOTA3ZDA4NWY4NTU5ZDhlMzMzYjNlMDAi.XVlRCQ.s1hGYiYlhdIS4kAZYKTknAUdwMI"> -->
                    <input v-model="email" class="form-control mb-3" id="email" name="email" placeholder="Email" required="" type="text" value="">
                    <input v-model="password" class="form-control" id="password" name="password" placeholder="Password" required="" type="password" value="">
                    <div class="registo-termos-group">
                        <input class="registo-checkbox" id="termos" name="termos" required="" type="checkbox" value="y">
                        <p class="registo-termos">I accept the <nuxt-link class="login-link" to="/legal/terms">Terms and Conditions</nuxt-link> and the <nuxt-link class="login-link" to="/legal/privacy_policy">Policy Privacy</nuxt-link>.</p>
                    </div>
                    <input class="btn btn-login" id="login" name="login" type="submit" value="Register">
                </form>
                <hr>
                <p class="login-support-text">Already have an account? <nuxt-link class="login-link" to="/admin/login">Login</nuxt-link></p>  
            </div>     
        </div>
    </section>
</template>
                
<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        messages() {
            return this.$store.state.auth.infoMessages
        }
    },
    methods: {
        onSubmit() {
            var authData = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('auth/registerUser', authData)
            .then(response => {
                console.log("Post made successfully", response)
            })
            .catch(error => console.log(error))
        }
    }
}
</script>
                        
<style lang='scss'>
                
</style>