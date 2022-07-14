// 즉시 호출 함수 (전역 변수를 즉시 호출 함수에 넣어 사용함)
(() => {
	let yOffset = 0; // window.pageYOffset 대신 쓸 변수
	let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset) 보다 이전의 위치한 스크롤 섹션들의 스크롤 높이값의 합
	let currentScene = 0; // 현재 활성화 된 section
	let enterNewScene = false; // 새로운 섹션이 시작되는 순간 true (섹션이 넘어가는 순간 messageA_opacity 값이 -되는 현상을 방지하기위해 사용함)

	// 각 섹션에 대한 정보
	const sceneInfo = [
		{
			// 0 섹션
			heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
			scrollHeight: 0,
			type: 'sticky', // 스크롤에 따른 애니메이션 타입
			objs: {
				container: document.querySelector('#scroll-section-0'),
				messageA: document.querySelector('#scroll-section-0 .main-message.a'),
				messageB: document.querySelector('#scroll-section-0 .main-message.b'),
				messageC: document.querySelector('#scroll-section-0 .main-message.c'),
				messageD: document.querySelector('#scroll-section-0 .main-message.d'),
			},
			values: {
				messageA_opacity: [0, 1], // opacity 시작값, 끝값
			}
		},
		{
			// 1 섹션
			heightNum: 5, 
			scrollHeight: 0,
			type: 'normal',
			objs: {
				container: document.querySelector('#scroll-section-1')
			}
		},
		{
			// 2 섹션
			heightNum: 5, 
			scrollHeight: 0,
			type: 'sticky',
			objs: {
				container: document.querySelector('#scroll-section-2')
			}
		},
		{
			// 3 섹션
			heightNum: 5, 
			scrollHeight: 0,
			type: 'sticky',
			objs: {
				container: document.querySelector('#scroll-section-3')
			}
		},
	];

	// 각 스크롤 섹션의 높이 세팅
	function setLayout() {
		for(let i = 0; i < sceneInfo.length; i++ ) {
			sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
			sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
		}

		let totalScrollHeight = 0;
		yOffset = window.pageYOffset
		for(let i = 0; i < sceneInfo.length; i++) {
			totalScrollHeight += sceneInfo[i].scrollHeight;

			if (totalScrollHeight >= yOffset) {
				currentScene = i;
				break;
			}
		}

		document.body.setAttribute('id',`show-scene-${currentScene}`);
	}

	
	function scrollLoop() {
		enterNewScene = false;
		prevScrollHeight = 0; // 초기화
		for(let i = 0; i < currentScene; i++) {
			prevScrollHeight += sceneInfo[i].scrollHeight;
		}

		if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
			enterNewScene = true;
			currentScene++;
			document.body.setAttribute('id',`show-scene-${currentScene}`);
		} 
		if(yOffset < prevScrollHeight) {
			enterNewScene = true;
			currentScene === 0 ? '' : currentScene--; // 브라우저 바운스 효과 방지
			document.body.setAttribute('id',`show-scene-${currentScene}`);
		}

		if(enterNewScene) return;
		playAnimation();
	}

	// 애니메이션 값 변화 계산
	function calcValues(values, currentYOffset) { //currentYOffset = 전체가 아닌 각 섹션마다의 yoffset
		let rv;
		let scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight; // 현재 스크롤섹션에서 스크롤된 범위를 비율로 구하기
		rv = scrollRatio * (values[1] - values[0]) + values[0];

		return rv;
	}

	// 스크롤 될때 실행되는 애니메이션
	function playAnimation() {
		const objs = sceneInfo[currentScene].objs;
		const values = sceneInfo[currentScene].values;
		const currentYOffset = yOffset - prevScrollHeight;

		switch(currentScene) {
			case 0:
				let messageA_opacity_in = calcValues(values.messageA_opacity, currentYOffset);
				objs.messageA.style.opacity = messageA_opacity_in;
				break;
			case 1:
				break;
			case 2:
				break;
			case 3:
				break;
		}
	}
	
	
	window.addEventListener('resize', setLayout); // 화면 리사이즈 발생시 setLayout 재실행
	window.addEventListener('load', setLayout);
	
	window.addEventListener('scroll', () => {
		yOffset = window.pageYOffset; // 스크롤 위치값
		scrollLoop();
	})

})();