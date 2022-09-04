type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [k in Heroes]: number }; // 기존에 있는 타입을 새로운 맵드타입을 이용해 새로운 타입으로 변환
const ages: HeroAges = {
  Hulk: 130,
  Capt: 20,
  Thor: 100,
};

// for in 반복문 코드
// var arr = ['a', 'b', 'c'];
// for (var key in arr) {
//   console.log(arr[key]);
// }
