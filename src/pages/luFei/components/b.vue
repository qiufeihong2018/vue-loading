<template>
  <div>孙子组件:{{name}}</div>
</template>

<script>
  export default {
    name: 'b',
    inject: ['name']
  }
</script>
