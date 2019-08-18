<template>
  <footer class="footer courier-font">
    <div class="container footer-columns">
        <div class="footer-left-menu">
            <h4 class="footer-heading footer-remote_crew">[remote_crew]</h4>
            <ul>
                <li class="footer-left-menu-item">
                    <nuxt-link to="/how_it_works" class="footer-left-menu-link">How it works</nuxt-link> 
                </li>
                <li class="footer-left-menu-item">
                    <nuxt-link to="/developers" class="footer-left-menu-link">Developers</nuxt-link>
                </li>
                <li class="footer-left-menu-item">
                    <nuxt-link to="/legal/terms" class="footer-left-menu-link">Terms and Conditions</nuxt-link>
                </li>
                <li class="footer-left-menu-item">
                    <nuxt-link to="/legal/privacy_policy" class="footer-left-menu-link">Privacy Policy</nuxt-link>
                </li>
            </ul>   
        </div>
        <div class="footer-right-menu">
            <h4 class="footer-heading">Get in touch</h4>
            <ul>
                <li class="footer-right-menu-item">
                    <img class="footer-right-menu-icon" 
                    src="~assets/images/homepage/footer/icon_phone.png" alt="Phone">
                    <span class="footer-right-menu-link">+351 910830152</span> 
                </li>
                <li class="footer-right-menu-item">
                    <img class="footer-right-menu-icon"
                    src="~assets/images/homepage/footer/icon_email.png"  alt="Email">
                    <span class="footer-right-menu-link">
                        <a href="mailto:info@remotecrew.io" style="color: white">info@remotecrew.io</a>
                    </span>
                </li>
                <li class="footer-right-menu-item">
                    ☀️<span class="footer-right-menu-link ml-12"> Lisbon, Portugal</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="container footer-copyright">
        <h6>&copy; [remote_crew] 2019</h6>
    </div>
  </footer>
</template>
                
<script>
export default {

}
</script>
                        
<style lang='scss'>
                
</style>