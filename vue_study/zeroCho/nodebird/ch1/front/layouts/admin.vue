<template>
    <div>
        <nav>
            <nuxt-link to="/">Home</nuxt-link><!-- 기존 router-link 대신 nuxt-link -->
            <nuxt-link to="/profile">Profile</nuxt-link>
            <nuxt-link to="/signup">Signup</nuxt-link>
            <nuxt-link to="/admin">Admin</nuxt-link>
        </nav>
        <nuxt /><!-- 기존 router-view 대신 nuxt => 변경되는 부분 -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>