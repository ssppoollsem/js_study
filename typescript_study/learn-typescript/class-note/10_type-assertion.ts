// 타입 단언(type assertion) : 타입스크립트가 아닌 개발자가 정의한 타입
var a;
a = 20;
a = 'a';
var b = a as string;

// 타입 단언 예제 (DOM API 조작)
var div = document.querySelector('div');
if (div) {
  div.innerText;
}
