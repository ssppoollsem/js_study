<template>
    <div>
        <header>
            <h1>{{ $route.name }}페이지</h1>
            <NuxtLink to="/">홈페이지</NuxtLink>
            <NuxtLink to="/main">메인 페이지</NuxtLink>
            <NuxtLink to="/product">프로덕트 페이지</NuxtLink>
            <!-- <router-link></router-link> 와 동일한 기능을 한다 -->
        </header>
        <Nuxt />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>