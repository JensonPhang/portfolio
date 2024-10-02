let delay = 0;
let navbar = document.querySelector('.navbar')
let optionsBtn = document.querySelector(".options-bar");
let optionsMenu = document.querySelector(".options-menu");
let toggle = 0;
let autoIndexPC = 0;
let slides = document.querySelectorAll(".slide-section");
let opt = document.querySelectorAll(".opt");
let section = document.querySelectorAll(".section");
let kelebihansubsec = document.querySelectorAll(".textOpt");
let kelebihansubsecslide = document.querySelectorAll(".subsection-kelebihan-slide");

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
let openingInterval = setInterval(noScroll, 3000);
function noScroll() {
    document.body.style.overflowY = "scroll";
    clearInterval(openingInterval);
}
function startDelay(ms) {
    delay = 1;
    let delayIndex = 1;
    let delayInterval = setInterval(function () {
        if (delayIndex == 0) {
            clearInterval(delayInterval);
            delay = 0;
        } else {
            delayIndex--;
        }
    }, ms)
}  //delay, parameter is delay timing (ms)
optionsBtn.addEventListener("click", toggleMenu);
toggleMenu(0);
function toggleMenu() {
    if (toggle == 1) {
        optionsMenu.style.top = "69px";
        toggle = 0;
    } else {
        optionsMenu.style.top = "-200px";
        toggle = 1;
    }
}
function menuChangeSection(i) {
    optionsMenu.style.top = "-200px";
    toggle = 1;
    changeSection(i);
}
function changeSection(i) {
    for (x = 0; x < 3; x++) {
        section[x].style.display = "none";
    }
    section[i].style.display = "block";
}
changeSection(0);
let autoChangeSlideInterval = setInterval(autoChangeSlide, 2500); //automatic slide timer
function autoChangeSlide() {
    autoIndexPC++;
    if (autoIndexPC > 3) {
        autoIndexPC = 0;
    }
    changeSlide(autoIndexPC);
}
function manualChangeSlide(i) {
    if (delay == 0) {
        clearInterval(autoChangeSlideInterval);
        changeSlide(i);
        autoIndexPC = i;
        startDelay(200);
    }
}
function manual2ChangeSlide(i) {
    if (delay == 0) {
        autoIndexPC += i;
        if (autoIndexPC > 3) {
            autoIndexPC = 0;
        } else if (autoIndexPC < 0) {
            autoIndexPC = 3;
        }
        clearInterval(autoChangeSlideInterval);
        changeSlide(autoIndexPC);
        startDelay(300);
    }
}
function changeSlide(index) {

    for (i = 0; i < 4; i++) {
        opt[i].className = "opt";
    }
    slides[index].className = "slide-section one";
    slides[(index + 1) % 4].className = "slide-section two";
    slides[(index + 2) % 4].className = "slide-section three";
    slides[(index + 3) % 4].className = "slide-section four";

    opt[index].className = "opt active";
}
function changeSection2(x) {
    if (x == 0) {
        kelebihansubsec[0].className = "textOpt opaque";
        kelebihansubsec[1].className = "textOpt";
        kelebihansubsecslide[0].className = "subsection-kelebihan-slide";
        kelebihansubsecslide[1].className = "subsection-kelebihan-slide none";
    } else {
        kelebihansubsec[1].className = "textOpt opaque";
        kelebihansubsec[0].className = "textOpt";
        kelebihansubsecslide[1].className = "subsection-kelebihan-slide";
        kelebihansubsecslide[0].className = "subsection-kelebihan-slide none";
    }
}
changeSection2(0);