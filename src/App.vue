<template>
  <div id="app">
    <child :content="msg"></child>
  </div>
</template>
<script>
  import child from './components/Child.vue'
  export default{
    name: 'app',
    data () {
      return {
        'msg': '这是来自父组件的问候'
      }
    },
    components: {
      child
    }
  }
</script>
<style>

</style>
