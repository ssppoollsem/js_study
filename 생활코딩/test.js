// function max(...rest) {
//     return rest.reduce((acc,current) => acc < current ? acc : current)
//   }
  
//   const result = max(1, 2, 3, 4, 10, 5, 11, 7);
//   console.log(result);

// function sum(...rest) {
//     let a = rest.reduce((acc, current) => {
//         console.log(acc, current)
//         return acc = current
//     }, 0);
//     return a;
//   }
  
//   const result = sum(1, 2, 3, 4, 5, 6);
//   console.log(result); // 21

// function increaseAndPrint(n, callback){
//     setTimeout(() => {
//         const increaded = n + 1;
//         console.log(increaded);
//         if(callback){
//             callback(increaded);
//         }
//     },1000)
// }
// increaseAndPrint(0, n => {
//     increaseAndPrint(n, n => {
//       increaseAndPrint(n, n => {
//         increaseAndPrint(n, n => {
//           increaseAndPrint(n, n => {
//             console.log('끝!');
//           });
//         });
//       });
//     });
//   });


// function sleep(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function makeError() {
//     await sleep(1000);
//     const error = new Error();
//     throw error;
// }

// async function process(){
//     try{
//         await makeError();
//     }catch(e){
//         console.error(e);
//     }
// }

// process();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getㅊㅁㅅ = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}