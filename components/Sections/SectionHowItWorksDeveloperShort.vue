<template>
    <div class="main-timeline-timeline m-4">
        <ul class="main-timeline-steps">
            <li>
                <div class="main-timeline-element m-0">                         
                    <div class="main-timeline-text">
                        <h6 id="timeline-text1" class="main-timeline-text-signup main-timeline-text-signup-bold">Basic Info</h6>
                    </div>
                    <div id="tl-step1" class="main-timeline-circle main-timeline-circle-signup-filled u-p-1">
                        <span id="span-step1" class="main-timeline-stepno">1</span> 
                    </div>
                </div>
            </li>
            <li>
                <div class="main-timeline-element m-0">                          
                    <div class="main-timeline-text">
                        <h6 
                            id="timeline-text2" 
                            class="main-timeline-text-signup"
                            :class="{'main-timeline-text-signup-bold': stepsFilled.step2}">Services</h6>
                    </div>
                    <div 
                        id="tl-step2" 
                        class="main-timeline-circle u-p-1"
                        :class="stepsFilled.step2 ? 'main-timeline-circle-signup-filled' : 'main-timeline-circle-signup-empty'">
                        <span 
                            id="span-step2" 
                            class="main-timeline-stepno"
                            :class="{'main-timeline-stepno-empty': !stepsFilled.step2}">2</span> 
                    </div>
                </div>
            </li>
            <li>
                <div class="main-timeline-element m-0">
                    <div class="main-timeline-text">
                        <h6 
                            id="timeline-text3" 
                            class="main-timeline-text-signup"
                            :class="{'main-timeline-text-signup-bold': stepsFilled.step3}">Profile</h6>
                    </div>                       
                    <div 
                        id="tl-step3" 
                        class="main-timeline-circle u-p-1"
                        :class="stepsFilled.step3 ? 'main-timeline-circle-signup-filled' : 'main-timeline-circle-signup-empty'">
                        <span 
                        id="span-step3" 
                        class="main-timeline-stepno"
                        :class="{'main-timeline-stepno-empty': !stepsFilled.step3}">3</span> 
                    </div>
                </div>
            </li>
            <li>
                <div class="main-timeline-element m-0">
                    <div class="main-timeline-text">
                        <h6 
                            id="timeline-text4" 
                            class="main-timeline-text-signup"
                            :class="{'main-timeline-text-signup-bold': stepsFilled.step4}">Experience</h6>
                    </div>                       
                    <div 
                        id="tl-step4" 
                        class="main-timeline-circle u-p-1"
                        :class="stepsFilled.step4 ? 'main-timeline-circle-signup-filled' : 'main-timeline-circle-signup-empty'">
                        <span 
                            id="span-step4" 
                            class="main-timeline-stepno"
                            :class="{'main-timeline-stepno-empty': !stepsFilled.step4}">4</span> 
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
                
<script>
export default {
    props: ['stepsFilled']
}
</script>
                        
<style lang='scss'>
                
</style>