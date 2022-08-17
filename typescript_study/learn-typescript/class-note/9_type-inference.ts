// 타입 추론 기본 1 - 타입 추론 소개
var a = '10';

function getB(b = 10) {
  var c = 'hi';
  return b + c; // 10 + 'hi' 는 string 으로 타입을 추론한다.
}

10 + '10'; // '1010'

// *---------------------------------------------------------------*

// 타입 추론 기본 2 - 인터페이스와 제네릭을 이용한 타입 추론 방식
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// var shoppingItem: Dropdown<string> = {
//   value: 'abcd',
//   title: 'hello',
// };

// *---------------------------------------------------------------*

// 타입 추론 기본 3 - 복잡한 구조에서의 타입 추론 방식
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  description: 'abc',
  title: 'ab',
  value: '123',
  tag: 'ddd',
};

// *---------------------------------------------------------------*

// Best Common Type 추론 방식
var arr = [1, 2, true, false, 'a'];
