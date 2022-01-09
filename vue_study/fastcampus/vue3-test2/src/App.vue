<template>
  <ul>
    <li
      v-for="fruit in fruits"
      :key="fruit">
      {{ fruit }}
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        fruits: ['Apple','Banana','Cherry']
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>