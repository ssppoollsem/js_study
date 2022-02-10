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
  created () {
    this.$store.commit('movie/resetMovies');
  },
}
</script>

<style lang="scss" scoped>

</style>