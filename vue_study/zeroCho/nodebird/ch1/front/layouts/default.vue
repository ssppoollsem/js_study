<template>
    <!-- <div>
        <nav>
            <nuxt-link to="/">Home</nuxt-link>기존 router-link 대신 nuxt-link
            <nuxt-link to="/profile">Profile</nuxt-link>
            <nuxt-link to="/signup">Signup</nuxt-link>
        </nav>
        <nuxt />기존 router-view 대신 nuxt => 변경되는 부분
    </div> -->
    <v-app>
        <nav>
            <v-toolbar dark color="green">
                <v-toolbar-title>
                    <nuxt-link to="/">NodeBird</nuxt-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-form @submit.prevent="onSearchHashtag">
                        <div
                            :style="{
                                display: 'flex',
                                height: '100%',
                                alignItems: 'center',
                            }"
                        >
                            <v-text-field
                                v-model="hashtag"
                                label="검색"
                                hide-details
                                prepend-icon="mdi-magnify"
                            ></v-text-field>
                        </div>
                    </v-form>
                    <v-btn text nuxt to="/profile">
                        <div>프로필</div>
                    </v-btn>
                    <v-btn text nuxt to="/signup">
                        <div>회원가입</div>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </nav>
        <div>{{ name }}</div>
        <v-btn @click="onChangeName">바이바이</v-btn>
        <v-row no-gutters>
            <v-col cols="12" md="4">
                <login-form></login-form>
            </v-col>
            <v-col cols="12" md="8">
                <nuxt />
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import LoginForm from '~/components/LoginForm';

export default {
    // head() { // head태그 안에 내용을 변경 할 수 있음(nuxt에 추가됨)
    //     return {
    //         title : 'Nodebird'
    //     }
    // }
    data() {
        return {
            hashtag: true,
        };
    },
    components: {
        LoginForm,
    },
    computed: {
        name() {
            return this.$store.state.posts.name;
        },
    },
    methods: {
        onChangeName() {
            this.$store.commit('posts/bye');
        },
    },
};
</script>

<style></style>
