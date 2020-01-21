// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this.age = age;
//     }
//     get name() {
//         return this._name.toUpperCase();
//     }
//     set name(newName) {
//         if(newName) {
//             this._name = newName;
//         }
//     }
// }

// let man = new Person('John', 10);
// console.log(man.name, man.age);
// man.name = 'John Park';
// man.age = 20;
// console.log(man.name, man.age);

// class Time {
//     constructor(start,end) {
//         this._start = start;
//         this._end = end;
//         this._duration = end - start;
//     }

//     setStart(newStart) {
//         this._start = newStart;
//         this._duration = this._end - this._start;
//     }

//     getStart() {
//         return this._start;
//     }
// }

// const time = new Time(0,20);

// time.setStart(5);
// console.log(time._start);

// function Animal(type, name, sound) {
//   this.type = type;
//   this.name = name;
//   this.sound = sound;
//   this.say = function() {
//     console.log(this.sound);
//   };
// }

// Animal.prototype.say = function(){
//   console.log(this.sound);
// }
// Animal.prototype.sharedValue = 1;

// function Dog(name,sound){
//   Animal.call(this,'개', name, sound);
// }
// Dog.prototype = Animal.prototype;

// function Cat(name,sound){
//   Animal.call(this,'고양이',name,sound);
// }
// Cat.prototype = Animal.prototype;

// const dog = new Dog('멍멍이', '멍멍');
// const cat = new Cat('고양이', '야옹이', '야옹');

// dog.say();
// cat.say();


// class Animal {
//   constructor(type,name,sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound ;
//   }

//   say(){
//     console.log(this.sound);
//   }
// }

// class Dog extends Animal {
//   constructor(name,sound){
//     super('개', name, sound)
//   }
// }

// class Cat extends Animal {
//   constructor(name, sound){
//     super('고양이', name, sound);
//   }
// }

// const dog = new Dog('멍멍이', '멍멍');
// const cat = new Cat('야옹이', '야옹');

// dog.say();
// cat.say();

//&& 연산자로 코드 단축시키기

/*
const dog = {
  name: '멍멍이'
};

function getName(animal){
  // if(animal) return animal.name;

  // return undefined;

  return animal && animal.name;
}

const name = getName();
console.log(name);
*/

// || 연산자로 코드 단축시키기
/* 
const namelessDog = {
  name : ''
};

function getName(animal) {
  const name = animal && animal.name;
  if (!name) {
    return '이름이 없는 동물입니다';
  }
  return name;
}

const name = getName(namelessDog);
console.log(name); 
*/

// function isAnimal(name) {
//   // return (
//   //   name === '고양이' || name === '개' || name === '거북이' || name === '너구리'
//   // );

//   const animals = ['고양이','개','거북이','너구리'];
//   return animals.includes(name);

// }

// console.log(isAnimal('개'));
// console.log(isAnimal('고양이'));

const array = [1,2];
const [one, two] = array;

console.log(one);
console.log(two);