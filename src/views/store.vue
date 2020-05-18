<template>
  <div>
      <Ainput @input="handInput"/>
      <h2>{{ inputValue }} :lastLetter is {{inputValuelastLetter}}</h2>
      <!-- <Ashow :content="inputValue"/> -->
      <p> {{ appName }} </p>
       <!-- <p>appNameWithVersion: 
         {{appNameWithversion}}</p> -->
         <p> username:{{ userName }}, firstLetter {{ firstLetter }}</p>
  </div>
</template>

<script>
import Ainput from '@/components/Ainput.vue'
import Ashow from '@/components//AShow.vue'
import { mapState, mapGetters} from 'vuex'
// import { createNamespacedHelpers} from 'vuex'
// const { mapState } = createNamespacedHelpers('user')

export default {
  name:'store',
  data(){
    return {
      inputValue:  ""
    }
  },
  components: {
    Ainput,
    Ashow
  },
  computed: {
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })
    ...mapState('user',{
        userName: state => state.userName,
        appName: state => state.appName    
    }),
    ...mapGetters('user',[
      'firstLetter'
    ]),
    // appName (){
    //   return this.$store.state.appName
    // },
    // userName() {
    //   return this.$store.state.user.userName;
    // }
    // appNameWithversion() {
    //   return this.$store.getters.appNameWithversion
    // },
    inputValuelastLetter(){
      return this.inputValue.substr(-1,1)
    }
  },
  methods: {
    handInput(val){
      console.log(val)
      this.inputValue = val;
      console.log(this.$store.state)
    }
  }
}
</script>