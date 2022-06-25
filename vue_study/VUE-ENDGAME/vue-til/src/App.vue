<template>
  <div>
    <AppHeader></AppHeader>
    <!-- router 화면 -->
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss" scoped></style>
