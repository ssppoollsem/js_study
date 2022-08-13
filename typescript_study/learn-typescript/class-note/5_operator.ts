// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('11');
// logMessage(11);

// Union Type : 하나의 타입 이상을 쓰는 것
// 타입가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
var seho: String | number | boolean;
function logMessage(value: String | number) {
  console.log(value);
  if (typeof value === 'number') {
    // 타입가드
    value.toLocaleString();
  }

  if (typeof value === 'string') {
    // 타입가드
    value.toString();
  }

  throw new TypeError('value must be string or number');
}
logMessage('11');
logMessage(11);

// union 타입의 특징 - 구조체 같 은 경우 공동체 키값만 사용가능하다. (skill이나 age를 사용하려면 타입가드로 if문처리하여 사용할 수 있다.)
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name;
  someone.skill; // 접근 못함
  someone.age; // 접근 못함
}
askSomeone({ name: '세호', skill: 'Java' });
askSomeone({ name: '조성', age: 100 });

function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill; // 접근 가능
  someone.age; // 접근 가능
}
askSomeone2({ name: '세호', skill: 'Java' }); // name, skill, age 합한 결과 값을 넘겨야 한다.
askSomeone2({ name: '조성', skill: 'Java', age: 100 });

// var jaejin: String | number | boolean;
// var capt: String & number & boolean;
