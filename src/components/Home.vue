<template>
<div>
  <p>首页</p>
</div>
</template>
<script>
export default {
  name: 'Home',
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
    const _us = this._us;
    // var arr = _us.map([1, 2, 3], function(num) {
    //   return num * 3;
    // });
    // console.table(arr);

    // var obj = _us.map({
    //   one: 1,
    //   two: 2,
    //   three: 3
    // }, function(num, key) {
    //   return num * 2;
    // });
    // console.table(obj);

    // _us.each([1, 2, 3], (item) => {
    //   alert(item * 2)
    // });

    // _us.each({
    //   one: 1,
    //   two: 2,
    //   three: 3
    // }, (value, key) => {
    //   alert(key + ':' + value)
    // })

    // var total = _us.reduce([1, 2, 3], function(memo, num) {
    //   return memo + num;
    // }, 1);
    // console.log(total);

    // var arr = _us.shuffle([1, 2, 3, 4, 5, 6]);
    // console.log(arr);
    //
    // var flag = _us.every([1, 2, 3, 4, 5, 6], function(num) {
    //   return num % 2 == 0;
    // });
    // console.log(flag);

    var flag = _us.some([1, 2, 3, 4, 5, 6], function(num) {
      return num % 2 == 0;
    });
    console.log(flag);

    var size = _us.size({
      one: 1,
      two: 2,
      three: 3
    });
    console.log(size);



  }
}
</script>
<style>

</style>
