<template>
  <div id="app">
    Parent counter : {{ parentCounter }} <br />
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <!-- <child v-bind:num="counter"></child> -->
  </div>
</template>

<script>
import Child from './Child.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    child: Child
  },
  // data () {
  //   return {
  //     counter: 0
  //   }
  // },
  methods: {
    addCounter() {
      // this.counter++;
      
      // Mutations를 이용할 때
      // this.$store.commit('addCounter');

      // Actions를 이용할 때
      this.$store.disptch('addCounter');

    },
    subCounter() {
      // this.counter--;
      this.$store.state.counter--;
    }
  },
  computed: mapGetters({
    parentCounter: 'getCounter' // getCounter는 Vuex의 getters에 선언된 속성 이름
  })
}
</script>

<style>

</style>
