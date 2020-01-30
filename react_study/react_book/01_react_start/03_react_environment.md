# 리액트 작업환경 설정

## Node.js와 npm
리액트 프로젝트를 만들 때는 `Node.js`를 반드시 먼저 설치해야 한다.  
`Node.js`는 크롬 V8 자바스크립트 엔진으로 빌드한 자바스크립트 런타임이다.  
이것을 통해 웹 브라우저가 아닌 곳에서도 자바스크립트를 사용하여 연산할 수 있다.  
리액트는 웹 브라우저에서 실행되는 코드이므로 `Node.js`와 직접적인 연과은 없지만,  
프로젝트를 개발하는 데 필요한 주요 도구들이 `Node.js`를 사용하기 때문에 설치해야 한다.  
이때 사용한는 개발자 도구에는 `ES6`를 호환시켜주는 `바벨`, 모듈화된 코드를 한 파일로 합치고(번들링)  
코드를 수정할 때마다 웹 브라우저를 리로딩하는 등의 여러 기능을 지닌 `웹팩`등이 있다.  


`Node.js`를 설치하면 `Node.js`패키지 도구인 `npm`이 같이 설치된다. `npm`으로 개발자들이 만든 패키지를
설치하고 설치한 패키지의 버전을 관리 할 수 있다. 리액트 역시 하나의 패키지이다. 

## yarn 설치
> npm install -g yarn


## create-react-app으로 프로젝트 생성하기
`create-react-app`은 리액트 프로젝트를 생성할 때 `웹팩`,`바벨`의 설치 및 설정 과정을 생략하고  
바로 간편하게 프로젝트 작업 환경을 구축해 주는 도구이다.  
사용하는 방법은 다음과 같다.  
> $ yarn create react-app <프로젝트 이름>


yarn을 사용하지 않는 경우라면 다음 명령어를 사용하여 리액트 프로젝트를 생설할 수 있다.
> $ npm init react-app <프로젝트 이름>

프로젝트가 생성이 완료되었다면 해당 프로젝트 디렉토리로 이동한 뒤 개발 전용 서버를 구동하자.
> $ yarn start 
> (or $ npm start)