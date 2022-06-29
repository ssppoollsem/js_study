<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <!-- .pvrevent : button의 기본 동작을 막아준다 (return false 나 preventDefault 같은것) -->
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
<<<<<<< HEAD
      try {
        const { data } = await registerUser({
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        });

        this.logMessage = `${data.username}님이 가입되었습니다.`;
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
=======
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      console.log(data.username);
      this.logMessage = `${data.username} 님이 가입되었습니다`;
      this.initForm();
>>>>>>> 2efff1449eab5563b49f747a2cc181e912fd85fb
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
