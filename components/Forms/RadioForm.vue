<template>
    <div class="radio-answer-box">
        <label v-for="option in options" :key="option.id" class="radio-answer-box-label">
            <input v-model="selectedOption" @change="updateSelected" ref="selectedOption" class="radio-answer-box-input" :id="question" :name="question" type="radio" :value="option"> 
            <span class="radio-answer-box-span radio-answer-box-span-sm">{{ option }}</span>
        </label>
    </div>
</template>
                
<script>
export default {
    props: ['question', 'options'],
    data() {
        return {
            selectedOption: ''
        }
    },
    methods: {
        updateSelected() {
            this.$emit('change', this.selectedOption)
        }
    }
}
</script>
                        
<style lang='scss'>
                
</style>