<template>
  <div class="home">
    <h1>{{ food }} 
    </h1>
    <h2>Home</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="handeClick('back')">返回上一页</button>
    <button @click="handeClick('push')">返回到parent</button>
    <button @click="handeClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter(to,from,next){
      console.log(to.name);
      next( vm => {
        console.log(vm)
      });
  },
  beforeRouteLeave(to,from,next){
      // const leave = confirm('你确定要离开吗')
      // if (leave) next()
      // else next(false)
      next()
  },
  methods: {
    handeClick(type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        this.$router.push({
          name: 'Parent',
          query: {
            name: 'lison'
          }
        })
      }
      else if (type === 'replace') this.$router.replace({
        name: "Parent"
      })
    }
  }
}
</script>
