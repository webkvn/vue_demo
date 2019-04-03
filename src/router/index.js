import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import SuperAgent from '@/components/SuperAgent.vue'
import MysqlTest from '@/components/MysqlTest.vue'
import Multer from '@/components/Multer.vue'
import Moment from '@/components/Moment.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Home',
    name: 'Home',
    component: Home
  },{
    path: '/',
    name: '',
    component: Moment
  },{
    path: '/SuperAgent',
    name: 'SuperAgent',
    component: SuperAgent
  },{
    path: '/MysqlTest',
    name: 'MysqlTest',
    component: MysqlTest
  },{
    path: '/Multer',
    name: 'Multer',
    component: Multer
  },{
    path: '/Moment',
    name: 'Moment',
    component: Moment
  }
]
})
