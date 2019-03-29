import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import SuperAgent from '@/components/SuperAgent.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Home',
    name: 'Home',
    component: Home
  },{
    path: '/',
    name: 'SuperAgent',
    component: SuperAgent
  }

]
})
