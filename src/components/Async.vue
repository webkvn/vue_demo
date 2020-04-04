<template>
<div>
  <p>Async</p>
</div>
</template>
<script>
export default {
  name: 'Async',
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    async funOne() {
      return 'hello async.'
    },
    async funTwo(flag) {
      if (flag) {
        return 'hello async.'
      } else {
        throw 'failure'
      }
    }
  },
  created() {
    // 返回一个promise对象
    // console.log(this.funOne())

    this.funOne().then(result => {
      console.log(result);
    })

    this.funTwo(true).then(result => {
      console.log(result)
    })
    this.funTwo(false).catch(err => {
      console.log(err)
    })

  }
}
</script>
<style>

</style>
