# 강의 노트

### package.json
- dependencies : 애플리케이션 로직과 관련된 라이브러리 목록 (npm run build 할때 포함된다.)
- devDependencies : 배포할때 포함되지 않는 목록
---
### Json web 토큰
- `https://jwt.io/`

---
### api 폴더
```js
// api 요청할때 마다 실행됨
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: 'test1234',
  },
});
```

### Interceptors
- 요청을 보내고 특정 응답 받기전에 특정 로직을 실행하는 기능
- `https://github.com/axios/axios#interceptors`

### ionicons
`https://ionic.io/ionicons/usage`

### 라우터 네비게이션 가드
- `https://router.vuejs.org/guide/advanced/navigation-guards.html`