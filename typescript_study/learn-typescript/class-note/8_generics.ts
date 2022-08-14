// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// -----------------------------------

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// // 호출하는 시점에서 타입을 정한다.
// logText<string>('하이');

// -----------------------------------

// 1. 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점 : 중복코드 발생
// function logText(text: string) {
//   console.log(text);
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// logText('10');
// logNumber(10);

// -----------------------------------

// 2. 기존 문법과 제네릭의 차이점 - 유니온 타입을 이요한 선언 방식의 문제점 : 타입이 둘다 인식됨

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText('a');
// a.split // split 오류 남 (타입이 string, number 둘다 인식되기 때문)

// -----------------------------------

// 3. 제네릭의 장점과 타입 추론에서의 이점 : 중복된 코드 없이 타입을 각각 정의할 수 있다.

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const a = logText<string>('a');
a.split('');

const login = logText<boolean>(true);

// -----------------------------------

// 4. 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: '10', selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<number> = { value: 10, selected: false };

// -----------------------------------

// 5. 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   return text;
// }
// logTextLength('hi');

// -----------------------------------

// 6. 제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength('10');
logTextLength({ length: 10 });

// -----------------------------------

// 7. 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption('10');
getShoppingItemOption('name');
