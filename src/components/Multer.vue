<template>
<div>
  <p>Multer</p>
  <input type="file" value="" name="test" ref="uploadFile" multiple />
  用户名<input type="text" name="username" v-model="username">
  年龄<input type="text" name="age" v-model="age">
  <button @click="uploadFile()">提交</button>
</div>
</template>
<script>
export default {
  name: 'Template',
  data() {
    return {
      msg: '',
      username: '',
      age: ''
    }
  },
  methods: {
    func() {
      console.log(111)
    },
    uploadFile() {
      var uf = this.$refs.uploadFile;
      var files = !!uf.files ? uf.files : [];
      if (!files.length || !window.FileReader) {
        console.log("浏览器不支持HTML5");
        return false;
      };
      console.log(files);
      // 创建一个FormData对象,用来组装一组用 XMLHttpRequest发送请求的键/值对
      var fd = new FormData();
      // 把 input 标签获取的文件加入 FromData 中
      //fd.append('file', files[0]);
      for (var i = 0; i < files.length; i++) {
        fd.append('test', files[i]);
      }

      fd.append('username', this.username)
      fd.append('age', this.age)
      // console.table(fd.get('username'))

      // Ajax
      var request = new XMLHttpRequest();
      request.open("POST", "/api/mysql/upload/");
      request.send(fd);
      request.onreadystatechange = function() {
        if (request.readyState === 4 & request.status === 200) {
          console.log("上传成功");
          console.log(request.responseText);
          // var response = JSON.parse(request.responseText);
          // console.log(response);
        }
      }
    }
  },
  created() {


  }
}
</script>
<style>

</style>
