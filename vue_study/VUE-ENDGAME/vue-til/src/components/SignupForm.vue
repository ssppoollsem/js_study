<template>
  <!-- .pvrevent 새로고침 방지? -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw : </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname : </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">회원 가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      //   log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const { data } = await registerUser({
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      });

      this.logMessage = `${data.username}님이 가입되었습니다.`;

      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style lang="scss" scoped></style>
