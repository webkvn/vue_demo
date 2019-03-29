<template>
<div id="app">
  <!-- <child :content="msg"></child> -->
  <home></home>
</div>
</template>
<script>
import child from './components/Child.vue'
import Home from './components/Home.vue'
export default {
  name: 'app',
  data() {
    return {
      'msg': '这是来自父组件的问候'
    }
  },
  components: {
    child,
    Home
  }
}
</script>
<style>

</style>
