const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function imageAnimation(){
    let elemC = document.querySelector(".elem-container");
let fixedi = document.querySelector("#fixed-image");
elemC.addEventListener('mouseenter',function(){
    fixedi.style.display = "block";
})
elemC.addEventListener('mouseleave',function(){
    fixedi.style.display = "none";
})
let elem = document.querySelectorAll(".elem");
elem.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
    let imag = ele.getAttribute("data-image");
    fixedi.style.backgroundImage = `url(${imag})`;
    });
});
}
imageAnimation();
// let menu = document.querySelector('nav h3');
// let full = document.querySelector('#full-scr');
// let navImg = document.querySelector('nav img');
// let flag = 0;
// menu.addEventListener('click',function(){
//     if(flag == 0){
//         full.style.top = 0;
//         navImg.style.opacity = 0;
//         flag = 1;
//     }
//     else{
//         full.style.top = "-100%";
//         navImg.style.opacity = 1;
//         flag = 0 ;
//     }
    
// })
function losdingAnimation(){
    let loader = document.querySelector("#loader");
    setTimeout(function(){
        loader.style.top = "-100%";
    },4100);
}
losdingAnimation()


