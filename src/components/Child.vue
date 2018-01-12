<template>
  <div>
    <h3>这是子组件</h3>
    <p>{{content}}</p>
  </div>
</template>
<script>
  export default{
    props: ['content']
  }
</script>
