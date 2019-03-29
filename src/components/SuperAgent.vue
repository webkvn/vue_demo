<template>
<div>
  <p>SuperAgent</p>
  <input type="text" v-model="keyword" @keyup.enter="doSearch">
  <button @click="doSearch">搜索</button>
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
    }
  },
  created() {
    // this.getDb4();
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
