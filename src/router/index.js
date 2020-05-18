import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle}  from '@/lib/util' 
 
Vue.use(VueRouter)

const router = new VueRouter({
  routes
}) 

const HAS_LOGIN = true


router.beforeEach((to,from,next) => {
  // if(to.meta.title)
  to.meta && setTitle(to.meta.title)
  if(to.name !== 'Login') {
    if(HAS_LOGIN) next()
    else next({ name: 'Login'})
  }else{
    if (HAS_LOGIN) next({ name: 'home' })
    else next()
  }
})

// router.beforeResolve({

// })

// router.afterEach((to,from) => {
//   loading=  false
// })

/**
 * 1.导航被触发
 * 2.在失活对组件（即将离开的页面插件） 里调用离开守卫 beforeRouteLeave
 * 3.调用全局对前置守卫 beforeEach
 * 4.在重用对组件里调用 beforeRouteUpdate
 * 5.调用路由独享对守卫 beforeEnter
 * 6.解析异步组件
 * 7.在被激活对组件（即将进入的页面组件） 里调用 beforeRouteEnter
 * 8.调用全局对解析守卫 beforeReslove
 * 9。导航被确认
 * 10.调用全局对后置守卫 afterEach
 * 11.触发Dom更新
 * 12.调用穿件好的示例调用beforRouteEnter守卫里传给next对回调函数
 * 
 */

export default router


