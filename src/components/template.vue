<template>
<div>
  <p>模板页</p>
</div>
</template>
<script>
export default {
  name: 'Template',
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    func() {
      console.log(111)
    }
  },
  created() {
    console.log(222)
  }
}
</script>
<style>

</style>
