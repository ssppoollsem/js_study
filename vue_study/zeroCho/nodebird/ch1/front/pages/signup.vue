<template>
    <div>
        <v-container>
            <v-card>
                <v-container>
                    <v-subheader>회원가입</v-subheader>
                    <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                        <v-text-field  :rules="emailRules" v-model="email" label="이메일" type="email" required></v-text-field>
                        <v-text-field :rules="passwordRules" v-model="password" label="비밀번호" type="password" required></v-text-field>
                        <v-text-field :rules="passwordCheckRules" v-model="passwordCheck" label="비밀번호확인" type="password" required></v-text-field>
                        <v-text-field :rules="nicknameRules" v-model="nickname" label="닉네임" type="nickname" required></v-text-field>
                        <v-checkbox :rules="termsRules" v-model="terms" label="어쩌구 저쩌구 이러쿵 저러쿵을 동의합니다." required></v-checkbox>
                        <v-btn color="green" type="submit">가입하기</v-btn>
                    </v-form>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            passwordCheck: '',
            nickname: '',
            terms: false,
            emailRules: [
                v => !!v || '이메일은 필수입니다.',
                v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
            ],
            nicknameRules: [
                v => !!v || '닉네임은 필수입니다.',
            ],
            passwordRules: [
                v => !!v || '비밀번호는 필수입니다.',
            ],
            passwordCheckRules: [
                v => !!v || '비밀번호 확인은 필수입니다.',
                v => v === this.password || '비밀번호가 일치하지 않습니다.',
            ],
            termsRules: [
                v => !!v || '약관에 동의해야 합니다.'
            ]
        }
    },
    methods: {
        onSubmitForm() {
            if(this.$refs.form.validate()){
                alert('회원가입 시도')
            }else {
                alert('폼이 유효하지 않습니다.')
            };
            console.log(this.valid)
        }
    }
}
</script>

<style>

</style>