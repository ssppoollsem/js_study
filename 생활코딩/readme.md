## 자바스크립트에서 비동기 처리

### 01.Promise
비동기 작업을 조금 더 편하게 처리 할 수 있도록 ES6에 도입된 기능이다.  
ES6이전에는 비동기 작업을 처리 할 때 콜백 함수로 처리르 하였는데, 비동기 작업이 많아질수록 코드가 난잡해지는 단점이 있었다.  
```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})

myPromise.then(n => {
    console.log(n);
}).catch(n => {
    console.log(error)
})
```

### 02.async/await