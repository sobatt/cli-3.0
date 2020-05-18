<template>
  <div class="mail">
    <button @click="handClick">点击</button>
  </div>
</template>

<script>
export default {
  methods: {
    handClick(){
      this.$Bus.$emit('on-click','hello')
    }
  }, 
  mounted() {
    this.$on('on-click',mes => {
      console.log(mes)
    })
  }
}
</script> 
<style lang="less">
.mail{
  border:1px solid blue;
}
</style>