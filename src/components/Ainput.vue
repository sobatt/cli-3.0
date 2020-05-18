<template>
  <input type="text" @input="handInput" :value="value">
</template>
<script>
export default {
  name:'Ainput',
  props: {
    value: {
      type: [String,Number],
      default: ''
    }
  },
  methods: {
    handInput (event) {
      const value = event.target.value
      this.$emit('input',value)
    }
  }

}
</script>