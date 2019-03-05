<template>
  <section>
    <article>
      <div>在 Vue.js 2.6 中不使用 Vuex 来创建 store</div>
      <p>count:{{count}}</p>
      <button @click="setCount(count+1)">+1</button>
      <button @click="setCount(count-1)">-1</button>
    </article>
  </section>
</template>

<script>
  import { store, mutations } from '@/store/store'

  export default {
    name: 'namei',
    computed: {
      count() {
        return store.count
      }
    },
    methods: {
      setCount: mutations.setCount
    }
  }
</script>

<style scoped>

</style>
