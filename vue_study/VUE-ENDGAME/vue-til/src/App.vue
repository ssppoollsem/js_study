<template>
  <div>
    <header>
      <!-- 링크 -->
      <router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원가입</router-link>
    </header>

    <!-- router 화면 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
