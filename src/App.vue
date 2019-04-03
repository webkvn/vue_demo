<template>
<div id="app">
  <router-view />
</div>
</template>
<script>
import child from './components/Child.vue'
import Home from './components/Home.vue'
import SuperAgent from './components/SuperAgent.vue'
import MysqlTest from './components/MysqlTest.vue'
import Multer from './components/Multer.vue'
export default {
  name: 'app',
  data() {
    return {
      'msg': '这是来自父组件的问候'
    }
  },
  components: {
    child,
    Home,
    SuperAgent,
    MysqlTest,
    Multer
  }
}
</script>
<style>

</style>
