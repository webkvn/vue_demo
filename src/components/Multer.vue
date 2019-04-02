<template>
<div>
  <p>Multer</p>
  <input type="file" value="" @change="uploadFile()" ref="uploadFile" multiple />
</div>
</template>
<script>
export default {
  name: 'Template',
  data() {
    return {
      'msg': ''
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
        fd.append('files', files[i]);
      }
      // Ajax
      var request = new XMLHttpRequest();
      request.open("POST", "/api/mysql/upload/");
      request.send(fd);
      request.onreadystatechange = function() {
        if (request.readyState === 4 & request.status === 200) {
          console.log("上传成功");
          var response = JSON.parse(request.responseText);
          console.log(response);
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
