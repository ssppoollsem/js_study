<!-- _(언더바)를 붙이면 동적라우팅이라는 표시 -->
<template>
    <v-container v-if="post">
        <post-card :post="post" />
    </v-container>
    <div v-else>
        해당 아이디의 게시글이 존재하지 않습니다.
    </div>
</template>

<script>
import PostCard from '~/components/PostCard';
export default {
    components: { PostCard },
    computed: {
        post() {
            return this.$store.state.posts.mainPosts.find(
                v => v.id === parseInt(this.$route.params.id, 10),
            ); // params는 문자열이기 때문에 parseInt 해줘야됨
        },
    },
};
</script>

<style></style>
