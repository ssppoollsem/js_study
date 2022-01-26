<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text"
      placeholder="Seach for Movies, Series & more" />
    <div class="selects">
      <select
        class="form-select"
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name">
        <option
          v-if="filter.name === 'year' "
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                type: 'movie',
                number: 10,
                year: '',
                filters: [
                    { 
                        name: 'type',
                        items: ['movie', 'series', 'episode']
                    },
                    {
                        name: 'number',
                        items: [10, 20, 30]
                    },
                    {
                        name: 'year',
                        items: (() => {
                            const years = [];
                            const thisYear = new Date().getFullYear(); // 올해년도

                            for (let i = thisYear; i > 1985; i--) {
                                years.push(i)
                            }
                            return years
                        })()
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    > * {
        margin-right: 10px;
        font-size: 15px; 

        &:last-child {
            margin-right: 0;
        }
    }

    .selects {
        display: flex;

        select {
            width: 120px;

            &+select {
                margin-left: 10px;
            }
        }
    }
}
</style>