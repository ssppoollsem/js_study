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
    .then(n => {increaseAndPrint(n)})
    .then(n => {increaseAndPrint(n)})
    .then(n => {increaseAndPrint(n)})
    .then(n => {increaseAndPrint(n)})
    .catch((e) => {
        console.error(e)
    })