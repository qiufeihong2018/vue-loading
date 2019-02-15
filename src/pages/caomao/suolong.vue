<template>
  <div>
    <child-symbols></child-symbols>
  </div>
</template>

<script>
  import childSymbols from './components/childSymbols'

  export default {
    name: 'suolong',
    components: {
      childSymbols
    },
    provide() {
      return {
        [name]: 'qiufeihong'
      }
    }
  }
</script>
