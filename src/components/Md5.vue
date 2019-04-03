<template>
<div>
  <p>Md5</p>
</div>
</template>
<script>
var md5 = require("md5");
export default {
  name: 'Md5',
  data() {
    return {
      msg: '',
      // md5: md5
    }
  },
  methods: {
    func() {
      console.log(111)
    }
  },
  created() {
    var passWord = "you guess!";
    console.log(md5(passWord)); //95fb3868cb53f80b0c82883e96969662
  }
}
</script>
<style>

</style>
