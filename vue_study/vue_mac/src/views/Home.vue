<template>
  <div>
      <h1>Welcome to {{ title }}!</h1>
      <input type="text" v-model="input1" /> <!-- v-model = value -->
      <button @click="getData">무야호</button>
      <button @click="setData">set</button>
      <select class="form-control" v-model="region">
        <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
      </select>

      <table class="table table-bordered" v-if="tableShow">
        <tr :key="i" v-for="(d,i) in options">
          <td>{{d.v}}</td>
          <td>{{d.t}}</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '퍼블의 품격',
      input1: 'abc',
      options: [
        {v:'S',t:'Seoul'},
        {v:'J',t:'Jeju'},
        {v:'B',t:'Busan'},
      ],
      region: 'J',
      tableShow: false
    }
  },
  methods: {
    getData() {
      alert(this.input1);
    },
    setData() {
      this.input1 = "무야호"
    }
  },
  watch: {
    input1() {
      console.log(this.input1);
    }
  },
  beforeCreate() {
    // console.log('beforeCreate');
  },
  created() {
    // console.log('created');
  },
  beforeMount() {
    // console.log('beforeMount');
  },
  mounted() {
    // console.log('mounted');
  },
  beforeUpdate() {
    // console.log('beforeUpdate');
  },
  updated() {
    // console.log('updated');
  },
  beforeDestroy() {
    // console.log('beforeDestroy');
  },
  destroyed() {
    // console.log('destroyed');
  }
}
</script>

<style>

</style>