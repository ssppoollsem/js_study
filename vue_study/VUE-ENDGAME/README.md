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

--- 

### Interceptors
- 요청을 보내고 특정 응답 받기전에 특정 로직을 실행하는 기능
- `https://github.com/axios/axios#interceptors`

--- 

### ionicons
`https://ionic.io/ionicons/usage`

---

### 라우터 네비게이션 가드
- `https://router.vuejs.org/guide/advanced/navigation-guards.html`

--- 

### stateofjs
- `https://2019.stateofjs.com/testing/`



## 프론트엔드 테스팅

### 테스트 코드
- 목적 : 일일이 기능을 손으로 확인하는 시간을 줄인다.

--- 

### Jset
- 자바스크립트 테스팅 라이브러리
- `https://jestjs.io/`
- '테스트파일이름.spec.js' or '테스트파일이름.test.js'

#### describe()
- 연관된 테스트 케이스를 그룹화하는 api 함수

#### test()
- 하나의 테스트 케이스를 검증하는 api 함수

#### find()
- 컴포넌트안의 html요소들을 css선택자로 찾을수 있게 해주는 api 함수

#### shallowMount
- 특정 컴포넌트를 마운팅 할 수 있는 api 함수
- `https://v1.test-utils.vuejs.org/guides/`

```js
// 테스트 유틸 라이브러리
// 컴포넌트 로딩

describe('테스트 컴포넌트이름', () => {
  test('테스트할 동작이나 기능', () => {
    // 내용 정의
  });
});

```