## 자바스크립트에서 비동기 처리

### 01.Promise
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