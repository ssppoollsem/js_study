function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person('캡틴', 100);

// ES2015 (ES6)
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성되었습니다.');
    this.name = name;
    this.age = age;
  }
}

// new Person(); // '생성되었습니다.'
var seho = new Person('세호', 100);
console.log(seho);
