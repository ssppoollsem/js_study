<template>
    <div>
        <v-container>
            <v-card style="margin-bottom:20px">
                <v-container>
                    <v-subheader>내 프로필</v-subheader>
                    <v-form>
                        <v-text-field label="닉네임" required></v-text-field>
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
import FollowList from '~/components/FollowList'

export default {
    // layout: 'admin', // layout을 default가 아닌 다른거로 연결(nuxt에 추가됨)
    components : {
        FollowList,
    },
    data() {
        return {
            name : 'Nuxt.js'
        }
    }
}
</script>

<style>

</style>