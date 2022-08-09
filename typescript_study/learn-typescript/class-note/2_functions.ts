// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }

// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식 (js는 30,40은 무시하고 넘어가지만 ts는 오류로 잡아줌)
function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20, 30, 40);

// 함수의 옵셔널 파라미터 (?는 옵션이다. b,c는 있으면 string 타입으로 넘겨 받고 없으면 생략된다.)
function log(a: string, b?: string, c?: string) {}

log('Hello world');
log('hello ts', 'abc');
