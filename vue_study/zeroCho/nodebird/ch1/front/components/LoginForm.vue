<template>
    <v-container v-if="!me"
        ><!-- padding을 줌 -->
        <v-card>
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                <v-container>
                    <v-text-field
                        v-model="email"
                        :rules="emailCheck"
                        lavel="이메일"
                        type="email"
                        required
                    />
                    <v-text-field
                        v-model="password"
                        :rules="passwordCheck"
                        lavel="비밀번호"
                        type="password"
                        required
                    />
                    <v-btn color="green" type="submit" :disabled="!valid"
                        >로그인</v-btn
                    >
                    <v-btn nuxt to="/signup">회원가입</v-btn>
                </v-container>
            </v-form>
        </v-card>
    </v-container>

    <v-container v-else>
        <v-card>
            <v-container>
                {{ me.nickname }}님 로그인되었습니다.
                <v-btn @click="onLogOut">로그아웃</v-btn>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            emailCheck: [
                v => !!v || '이메일을 입력해주세요.',
                v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
            ],
            passwordCheck: [v => !!v || '비밀번호를 입력해주세요.'],
        };
    },
    methods: {
        onSubmitForm() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('users/logIn', {
                    email: this.email,
                    nickname: '제로초',
                });
            }
        },
        onLogOut() {
            this.$store.dispatch('users/logOut');
        },
    },
    computed: {
        me() {
            return this.$store.state.users.me;
        },
    },
};
</script>

<style></style>
