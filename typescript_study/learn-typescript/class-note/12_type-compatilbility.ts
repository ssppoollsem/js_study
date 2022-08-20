// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

var developer: Developer;
var person: Person;

developer = person; // 오류 (skill이 없어서)
// person = developer; // 정상

// 함수
var add = function (a: number) {
  //   console.log(a);
};

var sum = function (a: number, b: number) {
  //   return a + b;
};

sum = add;
add = sum;

// 제너릭
interface Empty<T> {}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2;
