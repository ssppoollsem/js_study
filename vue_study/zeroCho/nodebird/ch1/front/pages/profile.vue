<template>
    <div>
        <v-container>
            <v-card style="margin-bottom:20px">
                <v-container>
                    <v-subheader>내 프로필</v-subheader>
                    <v-form v-model="valid" @submit.prevent="onChangeNickname">
                        <v-text-field
                            label="닉네임"
                            v-model="nickname"
                            :rules="nicknameRules"
                            required
                        ></v-text-field>
                        <v-btn color="blue" type="submit">수정</v-btn>
                    </v-form>
                </v-container>
            </v-card>
            <v-card style="margin-bottom:20px">
                <v-container>
                    <v-subheader>팔로잉</v-subheader>
                    <follow-list></follow-list>
                </v-container>
            </v-card>
            <v-card style="margin-bottom:20px">
                <v-container>
                    <v-subheader>팔로워</v-subheader>
                    <follow-list></follow-list>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import FollowList from '~/components/FollowList';

export default {
    // layout: 'admin', // layout을 default가 아닌 다른거로 연결(nuxt에 추가됨)
    components: {
        FollowList,
    },
    data() {
        return {
            valid: false,
            nickname: '',
            nicknameRules: [v => !!v || '닉네임을 입력하세요!'],
        };
    },
    methods: {
        onChangeNickname() {
            this.$store.dispatch('users/changeNickname', {
                nickname: this.nickname,
            });
        },
    },
};
</script>

<style></style>
