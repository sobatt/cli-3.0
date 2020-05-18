<template>
  <div class="tel"> {{ message }}</div>
</template>
<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted (){
    this.$Bus.$on('on-click', mes => {

      this.message =mes
    })
  }
} 
</script>
<style lang="less">
.tel{
  border : 1px solid  red; 
    height: 40px;
}
</style>