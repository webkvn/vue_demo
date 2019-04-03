<template>
<div>
  <p>Moment</p>
</div>
</template>
<script>
export default {
  name: 'Moment',
  data() {
    return {
      'msg': ''
    }
  },
  methods: {
    func() {
      console.log(111)
    }
  },
  created() {
    const _today = this._mt();
    console.log(_today.format('YYYY'));
    console.log(_today.format('MM'));
    console.log(_today.format('DD'));
    console.log(_today.format());
    console.log(_today.format('YYYY-MM-DD'));
  }
}
</script>
<style>

</style>
