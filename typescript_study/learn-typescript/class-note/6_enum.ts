// enum Shoes {
//   Nike,
//   Adidas,
// }

// // 별도의 enum을 설정하지 않으면 숫자형 enum
// var myShoes = Shoes.Nike;
// console.log(myShoes); // 0

enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

// 별도의 enum을 설정하지 않으면 숫자형 enum
var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// enum 활용예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답');
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}

askQuestion('y');
askQuestion('예스');
askQuestion('Yes');
askQuestion(Answer.Yes);
