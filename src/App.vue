<template>
<div id="app">
  <!-- <child :content="msg"></child> -->
  <super-agent></super-agent>
</div>
</template>
<script>
import child from './components/Child.vue'
import Home from './components/Home.vue'
import SuperAgent from './components/SuperAgent.vue'
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
    SuperAgent
  }
}
</script>
<style>

</style>
