<template>
  <RouterLink
    :to="`/movie/${movie.imdbID}`"
    class="movie"
    :style="{ backgroundImage: `url(${movie.Poster})` }">
    <Loader
      v-if="imageLoading"
      :size="1.5"
      absolute />
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </RouterLink>
</template>

<script>
import Loader from '~/components/Loader'

export default {
  props: {
      movie: {
          type: Object,
          default: () => ({})
      }
  },
  components: {
    Loader,
  },
  data() {
    return {
      imageLoading: true
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    async init() {
      const poster = this.movie.Poster;

      // 이미지가 없거나 N/A일 경우 로딩모션 예외처리
      if (!poster || poster === 'N/A') {
        this.imageLoading = false
      } else {
        await this.$loadImage(poster)
        this.imageLoading = false
      }
    }
  },
}
</script>

<style lang="scss" scoped>
;

.movie {
  $width: 168px;
  width: $width;
  height: $width * (calc(3/2));
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  position: relative;
  overflow: hidden;

  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 6px solid $primary; 
  }

  .info {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba($black, 0.3);
    width: 100%;
    padding: 14px;
    font-size: 14px;
    text-align: center;
    backdrop-filter: blur(10px);

    .year {
      color:  $primary;
    }

    .title {
      color: $white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>