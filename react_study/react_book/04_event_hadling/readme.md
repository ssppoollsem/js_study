# 이벤트 핸들링

사용자가 웹 브라우저에서 `DOM` 요소들과 상호 작용하는 것을 이벤트라고 한다.
예를 들어 버튼에 마우스 커서를 올렸을 때는 `onmouseover` 이벤트를 실행하고, 클릭했을 때는 `onclick` 이벤트를 실행한다.
`Form`요소는 값이 바뀔 때  `onchange` 이벤트를 실행한다. 
`HTML`에서는 이벤트를 실행하면 ""사이에 있는 자바스크립트를 실행하도록 코드를 작성한다.  

> onclick = "alert('executed')"

리액트에서 이벤트를 다룰 때는 이와 비슷하면서도 조금 다르다.
