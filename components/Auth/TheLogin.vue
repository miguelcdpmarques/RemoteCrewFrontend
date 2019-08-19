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
                <h4 class="signup-box-header-text">Contractor Login</h4>
            </div>
            <div class="signup-box-client signup-box-confirmacao">
                <p class="login-text">Login with your account</p>
                <form @submit.prevent="onSubmit">
                    <!-- <input id="csrf_token" name="csrf_token" type="hidden" value="ImY0YjFjMmU3ZDVjMTY4NmMxOTA3ZDA4NWY4NTU5ZDhlMzMzYjNlMDAi.XVlFcg.5yeHllRzg3jok3AnGMiR6soSckY"> -->
                    <input class="form-control mb-3" id="email" name="email" placeholder="Email" required="" type="text" v-model="email">
                   <input class="form-control" id="password" name="password" placeholder="Password" required="" type="password" v-model="password">
                    <input class="btn btn-login" id="login" name="login" type="submit" value="Login">
                </form>
                <hr>  
                <p class="login-support-text"><nuxt-link class="login-link" to="/admin/forgot_password">Forgot my password</nuxt-link></p>
                <p class="login-support-text">Don't have an account yet? <nuxt-link class="login-link" to="/admin/register">Register</nuxt-link></p>
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
            this.$store.dispatch('auth/loginUser', authData)
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