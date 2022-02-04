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
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue'

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
                    href: '/movie/tt4520988'
                },
                {
                    name: 'About',
                    href: '/about'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    height: 70px;
    padding: 0 40px;
    align-items: center;
    
    .logo {
        margin-right: 40px;
    }
}
</style>