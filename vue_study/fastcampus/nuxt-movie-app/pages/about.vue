<template>
  <div class="about">
    <div class="photo">
      <Loader v-if="imageLoading" absolute />
      <img :src="image" :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ blog }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Loader from '~/components/Loader';

export default {
  components: {
    Loader,
  },
  data() {
    return {
      imageLoading: true,
    };
  },
  computed: {
    ...mapState('about', ['name', 'email', 'blog', 'phone', 'image']),
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.$loadImage(this.image);
      this.imageLoading = false;
    },
  },
  head() {
    return {
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt Movie App' },
        { hid: 'og:title', property: 'og:title', content: this.name },
        { hid: 'og:description', property: 'og:description', content: this.email },
        { hid: 'og:image', property: 'og:image', content: this.image },
        { hid: 'og:url', property: 'og:url', content: `${process.env.CLIENT_URL}${this.$route.fullPath}` },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  .photo {
    position: relative;
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    background-color: $gray-200;
    border: 10px solid $gray-300;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
  .name {
    margin-bottom: 20px;
    font-size: 40px;
    font-family: 'Oswald', sans-serif;
  }
}
</style>
