<template>
    <nav id="main-navbar" ref="mainNavbar"
        class="navbar navbar-dark navbar-expand-md fixed-top"
        :class="{shrink: alwaysShrunk}">
        <div class="container-fluid">
            <nuxt-link class="navbar-brand navbar-remotecrew courier-font" to="/">[remote_crew]</nuxt-link>
            <button class="navbar-toggler navbar-toggle-element" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav" style="width: 100%;"> 
                    <li class="nav-item">
                        <nuxt-link class="nav-link navbar-item" to='/how_it_works'>How It Works</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link navbar-item" to='/developers'>Developers</nuxt-link>
                    </li>
                    <li v-if="!authenticated" class="nav-item ml-auto u-collapsed-navbar-nomargin">
                        <nuxt-link class="btn btn-outline-info btn-navbar" to="/admin/register">Register</nuxt-link>
                    </li>
                    <li v-if="!authenticated" class="nav-item">
                        <nuxt-link class="nav-link navbar-item" to="/admin/login">Login</nuxt-link>
                    </li>    
                    <li v-if="authenticated" class="nav-item dropdown ml-auto">
                        <a class="nav-link navbar-item lower dropdown-toggle navbar-dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img id="foto_navbar" src="#" alt="" class="navbar-dropdown-img">
                            Username
                        </a>
                        <div class="dropdown-menu navbar-dropdown-div" aria-labelledby="navbarDropdown">
                            <a v-if="role=='admin'" class="dropdown-item u-primary-color" href="#">Dashboard</a> 
                            <div v-if="role=='admin'" class="dropdown-divider u-dropdown-divider"></div>
                            <a class="dropdown-item u-primary-color" href="#">View Profile</a>
                            <a class="dropdown-item u-primary-color" href="#">Edit Profile</a>
                            <a class="dropdown-item u-primary-color" href="#">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
                
<script>
export default {
    props: ['authenticated', 'role', 'alwaysShrunk'],
    mounted() {
        this.adjustNavbarStyle()
    },
    methods: {
        adjustNavbarStyle() {
            if(!this.alwaysShrunk) {
                var navbarEl = this.$refs.mainNavbar
                window.addEventListener('scroll', () => {
                    try{
                        if(window.scrollY > 150 & !navbarEl.classList.contains('shrink')) {
                            this.$refs.mainNavbar.classList.add('shrink')
                        }
                        if(window.scrollY < 150 & navbarEl.classList.contains('shrink')) {
                            this.$refs.mainNavbar.classList.remove('shrink')
                        }
                    }
                    catch(TypeError) {
                    }
                })
            }     
        }
    },
}
</script>
                        
<style lang='scss'>
                
</style>