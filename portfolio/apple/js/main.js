(() => {
    let yOffset = 0; // window.pageYOffset 대신 쓸 변수
    let prevSCrollHeigth = 0; // 현재 스크롤 위치 (yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
    let currentScene = 0; // 현재 활성화된 (눈 앞에 보고있는) 씬(scroll_section)
    let enterNewScene = false; // 새로운 scene이 시작된 순가 true

    const sceneInfo = [
        {
            // scroll_section 0
            type: 'sticky',
            heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll_section_0'),
                messageA: document.querySelector('#scroll_section_0 .main_message.a'),
                messageB: document.querySelector('#scroll_section_0 .main_message.b'),
                messageC: document.querySelector('#scroll_section_0 .main_message.c'),
                messageD: document.querySelector('#scroll_section_0 .main_message.d')
            },
            values: {
                messageA_opacity: [0, 1]
            }
        },
        {
            // scroll_section 1
            type: 'normal',
            heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll_section_1')
            }
        },
        {
            // scroll_section 2
            type: 'sticky',
            heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll_section_2')
            }
        },
        {
            // scroll_section 3
            type: 'sticky',
            heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll_section_3')
            }
        }
    ];

    function setLayout() {
        // 각 스크롤 섹션의 높이 세팅
        for (let i=0; i<sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        }

        let totalScrollHeight = 0;
        yOffset = window.pageYOffset;
        for(let i=0; i<sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if(totalScrollHeight >= yOffset){
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id',`show-scroll-section-${currentScene}`);
    }

    
    function scrollLoop() {
        enterNewScene = false;
        prevSCrollHeigth = 0;
        for(let i=0; i<currentScene; i++){
            prevSCrollHeigth = prevSCrollHeigth + sceneInfo[i].scrollHeight;
        }
        if(yOffset > prevSCrollHeigth + sceneInfo[currentScene].scrollHeight) {
            enterNewScene = true;
            currentScene++;
            document.body.setAttribute('id',`show-scroll-section-${currentScene}`);
        }

        if(yOffset < prevSCrollHeigth){
            enterNewScene = true;
            if(currentScene === 0 ) return;
            currentScene--;
        }

        if(enterNewScene === true) return;

        playAnimation();
    }

    function calcValues(values, currentYOffeset){
        let rv;
        let scrollRatio = currentYOffeset / sceneInfo[currentScene].scrollHeight; // 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기

        rv = scrollRatio * (values[1] - values[0]) + values[0]; 

        return rv;
    }

    function playAnimation(){
        const objs = sceneInfo[currentScene].objs;
        const values = sceneInfo[currentScene].values;
        const currentYOffeset = yOffset - prevSCrollHeigth;
        
        switch (currentScene){
            case 0:
                // console.log('0 play')
                let messageA_opacity_in = calcValues(values.messageA_opacity, currentYOffeset);
                objs.messageA.style.opacity = messageA_opacity_in;
                break;
            case 1:
                // console.log('1 play')
                break;
            case 2:
                // console.log('2 play')
                break;
            case 3:
                // console.log('3 play')
                break;
        }
    }

    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;

        scrollLoop();
    })
    window.addEventListener('resize',setLayout);
    window.addEventListener('load',setLayout);
    
    setLayout();
    
})(); // 즉시 함수 호출