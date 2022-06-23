import Vue from 'vue';
import VueRouter from 'vue-router';

// Vue.use = 플러그인을 초기화
Vue.use(VueRouter);

export default new VueRouter({
  // 페이지 정보를 담는 배열
  mode: 'history', // url 중간에 '#'을 제거해줌 ('#'이 붙어있는 이유는 새로운 파일인지 아닌지 서버가 구분하는 기준임), (사용하는 서버에 따라 추가 설정이 필요함 vue 공식홈에 나옴)
  routes: [
    {
      //  리다이렉트 설정 (초기화면을 login페이지로 설정함)
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage'), // 코드 스플리팅 [다이나믹 임포트] (이동할때마다 필요한 자바스크립트 파일을 불러오는것)
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage'), // 코드 스플리팅 [다이나믹 임포트] (이동할때마다 필요한 자바스크립트 파일을 불러오는것)
    },
    {
      // 없는 페이지 일 경우 나타남
      path: '*',
      component: () => import('@/views/NotFoundPage'),
    },
  ],
});
