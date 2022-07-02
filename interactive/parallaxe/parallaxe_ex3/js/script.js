let x = 0;
let y = 0;
let moveX = 0;
let moveY = 0;
let mouseMoveX = 0;
let mouseMoveY = 0;
let speed = 0.09;
let scrollTop = 0;
let bar, parallax_0, parallax_1, parallax_2, parallax_3, parallax_4, parallax_5, scrollHeight, windowHeight, cursor;



window.onload = function() {
    bar = document.querySelector('.progressBar');
    parallax_0 = document.getElementById('parallax_0');
    parallax_1 = document.getElementById('parallax_1');
    parallax_2 = document.getElementById('parallax_2');
    parallax_3 = document.getElementById('parallax_3');
    parallax_4 = document.getElementById('parallax_4');
    parallax_5 = document.getElementById('parallax_5');
    cursor = document.querySelector('.cursor')
    
    window.addEventListener('resize', stageResize, false);
    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    stageResize();
    loop();
}

function scrollFunc(e) {
    var scrollTop = document.documentElement.scrollTop;

    bar.style.width = `${scrollTop / (scrollHeight - windowHeight) * 100}%`

    parallax_0.style.transform = `translate3d(0,${scrollTop * .03}px,0)`;
    parallax_1.style.transform = `translate3d(0,${-scrollTop * .09}px,0)`;
    parallax_3.style.transform = `translate3d(0,${-scrollTop * .10}px,0)`;
    parallax_4.style.transform = `translate3d(0,${-scrollTop * .20}px,0)`;
    parallax_5.style.transform = `translate3d(0,${-scrollTop * .25}px,0)`;
}

function stageResize() {
    scrollHeight = document.documentElement.scrollHeight;
    windowHeight = window.innerHeight;

}

function loop() {
    mouseMoveX += (x - mouseMoveX) * speed;
    mouseMoveY += (y - mouseMoveY) * speed;
    moveX += (x - window.innerWidth / 2 - moveX) * speed;
    moveY += (y - window.innerHeight / 2 - moveY) * speed;

    cursor.style.transform = `translate(${mouseMoveX}px, ${mouseMoveY}px)`
    parallax_3.style.transform = `translate3d(${moveX / 140}px, ${-scrollTop * .10}px,0)`
    parallax_4.style.transform = `scale(1.1) translate(${moveX / 50}px,${-scrollTop * .20}px)`
    parallax_5.style.transform = `scale(1.2) translate(${moveX / 20}px,${-moveY / 20}px)`
    window.requestAnimationFrame(loop);
}


function mouseMove (e) {
    x = e.clientX;
    y = e.clientY;
}
