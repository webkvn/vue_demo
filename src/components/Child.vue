<template>
<div>
  <h3>这里是一个子组件</h3>
  <p>{{content}}</p>
</div>
</template>
<script>
export default {
  props: ['content']
}
</script>
