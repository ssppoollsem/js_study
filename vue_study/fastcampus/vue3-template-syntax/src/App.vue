<template>
  <h1 @click="changeMessage">
    {{ msg }}
  </h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
  export default {
    data() {
      return {
        // Getter, Setter
        msg: 'Hello?'
      }
    },
    computed: {
      // Getter (읽기전용)
      // reversedMessage() {
      //   return this.msg.split('').reverse().join('')
      // }

      // Getter, Setter
      reversedMessage: {
        get() {
          return this.msg.split('').reverse().join('')
        },
        set(newValue) {
          this.msg = newValue
        }
      }
    },
    watch: {
      msg() {
        console.log('msg:', this.msg)
      }
    },
    methods: {
      changeMessage() {
        this.msg = 'Good!'
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>