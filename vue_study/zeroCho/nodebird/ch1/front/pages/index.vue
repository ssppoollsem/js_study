<template>
    <v-container>
        <post-form v-if="me" />
        <div>
            <post-card v-for="p in mainPosts" :key="p.id" :post="p" />
        </div>
    </v-container>
</template>

<script>
import PostCard from '~/components/PostCard';
import PostForm from '~/components/PostForm';

export default {
    data() {
        return {
            name : 'Nuxt.js'
        }
    },
    components : {
        PostCard,
        PostForm,
    },
    computed: {
        me() {
            return this.$store.state.users.me;
        },
        mainPosts() {
            return this.$store.state.posts.mainPosts;
        },
        hasMorePost() {
            return this.$store.state.posts.hasMorePost;
        }
    },
    fetch({ store }) {
        store.dispatch('posts/loadPosts');
    },
    mounted() {
        // window는 created에서는 사용하지 못한다.
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 200) {
                if(this.hasMorePost) {
                    this.$store.dispatch('posts/loadPosts');
                }
            }
        },
    }, 
}
</script>

<style>

</style>