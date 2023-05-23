$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    $('.carousel').owlCarousel({

    })
});




/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
};


window.onload = function(){
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
        let value = progress.getAttribute('data-value');
        progress.style.width = `${value}%`;
        let count = 0;
        let progressAnimation = setInterval(() =>{
            count++;
            progress.setAttribute('data-text', `${count}%`);
            if (count >= value){
                clearInterval(progressAnimation);
            }
        }, 15);
    });
};


function _class(name){
  return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");


    _class("tab-indicator")[0].style.top = `calc(60px + ${i*50}px`;

    _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");

   
  });
}