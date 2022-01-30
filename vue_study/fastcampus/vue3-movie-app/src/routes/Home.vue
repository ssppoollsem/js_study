<template>
  <HeadLine />
  <Search />
  <MovieList />
</template>

<script>
import HeadLine from '~/components/Headline'
import Search from '~/components/Search'
import MovieList from '~/components/MovieList.vue'
export default {
  components: { 
    HeadLine,
    Search,
    MovieList 
  },
}
</script>

<style lang="scss" scoped>

</style>