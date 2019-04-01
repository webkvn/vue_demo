<template>
<div id="app">
  <!-- <child :content="msg"></child> -->
  <mysql-test></mysql-test>
</div>
</template>
<script>
import child from './components/Child.vue'
import Home from './components/Home.vue'
import SuperAgent from './components/SuperAgent.vue'
import MysqlTest from './components/MysqlTest.vue'
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
    MysqlTest
  }
}
</script>
<style>

</style>
