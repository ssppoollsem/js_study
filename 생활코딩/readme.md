## 자바스크립트에서 비동기 처리

### 01.Promise
비동기 작업을 조금 더 편하게 처리 할 수 있도록 ES6에 도입된 기능이다.  
ES6이전에는 비동기 작업을 처리 할 때 콜백 함수로 처리를 하였는데, 비동기 작업이 많아질수록 코드가 난잡해지는 단점이 있었다.  
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

Promise를 사용하면 비동기 작업의 개수가 많아져도 코드의 깊이가 깊어지지 않는다.
```javascript
function increaseAndPrint(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if(value === 5){
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        },1000)
    })
}

increaseAndPrint(0)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch((e) => {
        console.error(e)
    })
```

### 02.async/await
async/await는 ES8에 해당하는 문법으로, Promise를 더욱 쉽게 사용 할 수 있게 해준다.
기본적인 사용법은 다음과 같다.
```javascript
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function process(){
    console.log('안녕하세요');
    await sleep(1000); //1초 쉬고
    console.log('반갑습니다');
}

process().then(() => {
    console.log('작업이 끝났어요');
});
```
함수를 선언 할때 앞부분에 `async`를 붙이고 Promise 앞부분에 `await`를 넣어주면 해당 프로미스가 끝난 다음 작업을 수행 할 수 있다.