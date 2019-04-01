<template>
<div>
  <p>SuperAgent</p>
  <input type="text" v-model="keyword" @keyup.enter="doSearch">
  <button @click="doSearch">搜索</button>
  <form id="myForm">
    <label for="username">用户名</label>
    <input type="text" name="username">
    <label for="password">密码</label>
    <input type="password" name="password">
    <label for="sex">性别</label>
    <input type="radio" value="0" name="sex">男</radio>
    <input type="radio" value="1" name="sex">女</radio>
    <select name="hobby" id="hobby">
      <option value="0">电影</option>
      <option value="1">篮球</option>
      <option value="2">书籍</option>
    </select>
    <button name="send" @click="doFormData">发送</button>
  </form>
  <ul>
    <li v-for="(item,index) in movies">
      <article>
        <h3>{{item.title}}</h3>
        <img :src="item.images.small|getImages" alt="">
        <p>上映年份：<span>{{item.year}}</span>&nbsp;&nbsp;电影类型：<span>{{item.genres[0]}}</span></p>
      </article>
    </li>
  </ul>
</div>
</template>
<script>
import request from 'superagent'
export default {
  name: 'SuperAgent',
  data() {
    return {
      movies: [],
      keyword: '',
      start: 1,
      count: 10
    }
  },
  methods: {
    getDb1() {
      request
        .get('/api/douban/movie/in_theaters')
        .then(res => {
          if (res.statusCode == 200 && res.statusText == 'OK') {
            console.log(res.body.subjects);
            this.movies = res.body.subjects;
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    getDb2() {
      request
        .get('/api/douban/movie/in_theaters')
        .end((err, res) => {
          if (res.statusCode == 200 && res.statusText == 'OK') {
            console.log(res.body.subjects);
            this.movies = res.body.subjects;
          }
        })
    },
    getDb3() {
      request('/api/douban/movie/in_theaters', (err, res) => {
        if (res.statusCode == 200 && res.statusText == 'OK') {
          console.log(res.body.subjects);
          this.movies = res.body.subjects;
        }
      })
    },
    getDb4() {
      request
        .get('/api/douban/movie/in_theaters')
        .set({
          'API-Key': 'foobar',
          'Accept': 'application/json'
        })
        .end((err, res) => {
          if (res.statusCode == 200 && res.statusText == 'OK') {
            console.log(res.body.subjects);
            this.movies = res.body.subjects;
          }
        })
    },
    doSearch() {
      // https://api.douban.com/v2/movie/search?q=战狼&start=25&count=25
      request
        .get('/api/douban/movie/search')
        .query({
          q: this.keyword,
          start: this.start,
          count: this.count
        })
        .then(res => {
          if (res.statusCode == 200 && res.statusText == 'OK') {
            console.log(res.body.subjects);
            this.movies = res.body.subjects;
          }
        });
    },
    doPost() {
      request
        .post('/api/user')
        .set('Content-Type', 'application/json')
        .send('{"name":"tj","pet":"tobi"}')
        .then(res => {

        })
    },
    doFormData() {
      request
        .type('application/json')
        .send(new FormData(document.getElementById('myForm')))
        .then(res => {

        })
    }
  },
  created() {
    // this.getDb4();
    // this.doPost();
  },
  filters: {
    getImages(_url) {
      if (_url !== undefined) {
        let _u = _url.substring(7);
        return 'https://images.weserv.nl/?url=' + _u;
      }
    }
  }
}
</script>
<style>

</style>
