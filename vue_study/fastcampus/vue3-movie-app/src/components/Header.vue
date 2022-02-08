<template>
  <header>
    <Logo />
    <div class="nav">
      <div
        class="nav-item nav-pills"
        v-for="nav in navigations"
        :key="nav.name">
        <RouterLink
          :to="nav.href"
          :class="{ active : isMatch(nav.path) }"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div
      class="user"
      @click="toAbout">
      <img
        :src="image"
        :alt="name" />
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue'
import { mapState } from 'vuex'

export default {
    components: { Logo },
    data() {
        return {
            navigations: [
                {
                    name: 'Search',
                    href: '/'
                },
                {
                    name: 'Movie',
                    href: '/movie/tt4520988',
                    path: /^\/movie/ // '/movie'로 시작하는
                },
                {
                    name: 'About',
                    href: '/about'
                }
            ]
        }
    },
    methods: {
      isMatch(path) {
        if (!path) return false
        return path.test(this.$route.fullPath)
      },
      toAbout() {
        this.$router.push('/about')
      }
    },
    computed: {
      ...mapState('about', [
        'image',
        'name'
      ])
      // image() {
      //   return this.$store.state.about.image 
      // },
      // name() {
      //   return this.$store.state.about.name 
      // }
    },
}
</script>

<style lang="scss" scoped>


header {
  position: relative;
  display: flex;
  height: 70px;
  padding: 0 40px;
  align-items: center;
  
  .logo {
      margin-right: 40px;
  }

  .user {
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: .4s;

    &:hover {
      background-color: darken($gray-200, 10%);
    }

    img {
      width: 100%;
    }
  }

  @include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}
</style>