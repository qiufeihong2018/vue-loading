<template>
  <div>
    <child-inject></child-inject>
  </div>
</template>

<script>
  import childInject from './components/a'

  export default {
    name: 'index',
    components: {
      childInject
    },
    provide: {
      name: 'qiufeihong'
    }
  }
</script>
