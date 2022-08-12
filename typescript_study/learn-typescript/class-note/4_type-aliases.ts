// interface Person2 {
//   name: string;
//   age: number;
// }

type Person2 = {
  name: string;
  age: number;
};

var seho: Person2 = {
  name: '세호',
  age: 30,
};

type MeySting = string;
var str: MeySting = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}

// 타입별칭과 인터페이스의 차이점 = 인터페이스는 확장 할 수 있으나 타입은 할 수 없다. 따라서 가능한한 별칭보다 인터페이스로 선언해서 사용하는 것이 좋다.
