let slideList, slide, slideBtnPrev, slideBtnNext;
let curIndex = 0;
let curSlide;
let slideLen;
const slideWidth = 900;
const slideSpeed = 300;
const startNum = 0;

window.onload = function(){
    slideList = document.querySelector('.slide_list');
    slide = document.querySelectorAll('.slide');
    slideBtnPrev = document.querySelector('.btn_prev');
    slideBtnNext = document.querySelector('.btn_next');
    slideLen = slide.length;

    slideList.style.width = `${slideWidth * (slideLen + 2)}px`

    let firstChild = slideList.firstElementChild;
    let lastChild = slideList.lastElementChild;
    let clonedFirst = firstChild.cloneNode(true);
    let clonedLast = lastChild.cloneNode(true);

    slideList.appendChild(clonedFirst);
    slideList.insertBefore(clonedLast, slideList.firstElementChild);

    curIndex = startNum;
    curSlide = slide[curIndex];
    curSlide.classList.add('slide_active');

    slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";

    slideEvent()
}

function slideEvent() {
    slideBtnPrev.addEventListener('click', prevEvent)
    slideBtnNext.addEventListener('click', nextEvent)
    
}

function prevEvent() {
    if (curIndex >= 0) {
        slideList.style.transition = slideSpeed + "ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
      }
      if (curIndex === 0) {
        setTimeout(function() {
          slideList.style.transition = "0ms";
          slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
        }, slideSpeed);
        curIndex = slideLen;
      }
      curSlide.classList.remove('slide_active');
    curSlide = slide[--curIndex];
    curSlide.classList.add('slide_active');
}

function nextEvent() {
    if (curIndex <= slideLen - 1) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
    }
    if (curIndex === slideLen - 1) {
    setTimeout(function() {
        slideList.style.transition = "0ms";
        slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
    }, slideSpeed);
    curIndex = -1;
    }
    console.log(curSlide)
    curSlide.classList.remove('slide_active');
    curSlide = slide[++curIndex];
    curSlide.classList.add('slide_active');

}