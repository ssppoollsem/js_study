let btn_tag;
let cursorItem;
let circle;
let x=0, y = 0;
let mx=0, my = 0;

window.onload = function(){
    btn_tag = document.querySelectorAll("a");

    cursorItem = document.querySelector(".cursorItem");
    circle = cursorItem.querySelector(".circle");    

    //네 버튼 이벤트
    btn_tag.forEach(element => {
        element.addEventListener("mouseover", function(e){
            circle.style.transform = "scale(.3)";
        })
        element.addEventListener("mouseout", function(e){
            circle.style.transform = "scale(1)";
        })
    })
    window.addEventListener("mousemove", function(e){
        x = e.clientX;
        y = e.clientY;
        // cursorItem.style.transform = "translate("+ x +"px, "+ y + "px )";
    });
    
    loop();
}

function loop(){
    mx += (x - mx ) * .09;
    my += (y - my ) * .09; 
    cursorItem.style.transform = "translate("+ mx +"px, "+ my + "px )";

    requestAnimationFrame(loop);
}