interface User {
  age: number;
  name: string;
}

// 1. 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호',
};

// 2. 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: '캡틴',
  age: 44,
};
getUser(capt);

// 3. 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 4. 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0]; // 'a'

// 5. 인터페이스 딕셔너리(Dictionary) 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach(function (value) {});

// 6. 인터페이스 확장(상속)
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  //   name: string;
  //   age: number;
  language: string;
}

var capt: Developer = {
  language: 'java',
};
