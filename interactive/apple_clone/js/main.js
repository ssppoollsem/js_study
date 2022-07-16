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
				messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2}], // opacity 시작값, 끝값, 애니메이션 시작  구간, 끝 구간
				messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2}], // translateY 시작값, 끝값, 타이밍 
				messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4}], 
				messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3}],
				messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3}], // translateY 시작값, 끝값, 타이밍 
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
		const scrollHeight = sceneInfo[currentScene].scrollHeight;
		const scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight; // 현재 스크롤섹션에서 스크롤된 범위를 비율로 구하기
		
		if(values.length === 3) {
			// start ~ end 사이에 애니메이션 실행WWWW
			const partScrollStart = values[2].start * scrollHeight;
			const partScrollEnd = values[2].end * scrollHeight;
			const partScrollHeight = partScrollEnd - partScrollStart;

			if(currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
				rv = (currentYOffset - partScrollStart) / partScrollHeight  * (values[1] - values[0]) + values[0];
			} else if (currentYOffset < partScrollStart) {
				rv = values[0];
			} else if (currentYOffset > partScrollEnd) {
				rv = values[1];
			}
		}else {
			rv = scrollRatio * (values[1] - values[0]) + values[0];
		}
		return rv;
	}

	// 스크롤 될때 실행되는 애니메이션
	function playAnimation() {
		const objs = sceneInfo[currentScene].objs;
		const values = sceneInfo[currentScene].values;
		const currentYOffset = yOffset - prevScrollHeight; // 현재 섹션의 스크롤된 높이
		const scrollHeight = sceneInfo[currentScene].scrollHeight; // 현재 섹션의 scrollHeight
		const scrollRatio = currentYOffset / scrollHeight;

		switch(currentScene) {
			case 0:
				const messageA_opacity_in = calcValues(values.messageA_opacity_in, currentYOffset);
				const messageA_translateY_in = calcValues(values.messageA_translateY_in, currentYOffset);
				const messageA_opacity_out = calcValues(values.messageA_opacity_out, currentYOffset);
				const messageA_translateY_out = calcValues(values.messageA_translateY_out, currentYOffset);

				if(scrollRatio <= .22) {
					// in
					objs.messageA.style.opacity = messageA_opacity_in;
					objs.messageA.style.transform = `translateY(${messageA_translateY_in}%)`;
				} else {
					// out
					objs.messageA.style.opacity = messageA_opacity_out;
					objs.messageA.style.transform = `translateY(${messageA_translateY_out}%)`;
				}
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