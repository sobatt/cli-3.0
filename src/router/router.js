import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'Home',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeRouteEnter: (to,from,next) =>{
      // if (from.name === 'About') alert('登bout来的');
      // else alert('不是从登陆页来的');
      // next();
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  }, 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'Argu',
    component: () => import ('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name:'Parent',
    component: () => import ('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        name: 'Child',
        component: () => import ('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import ('@/views/child.vue'),
      email: () => import ('@/views/email.vue'),
      tel: () => import ('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: to => {
      return{
        name: 'Home'
      }
    }
  },
  {
    path:'/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/errror_404.vue')
  }

]


