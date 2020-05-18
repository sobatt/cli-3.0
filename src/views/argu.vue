<template>
  <div>
      {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name:{
      type: String,
      default: 'lison'
    }
  },
  beforeRouteUpdate (to,from,next){
    // 可以使用this
     console.log(to.name, from.name)
  }
}
</script>
