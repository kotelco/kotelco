var scrol = document.querySelectorAll(".scro");
var wrap = document.getElementById("wrapper");
var mous = document.getElementById("mouse");
var herotext = document.querySelectorAll(".hero_text");
var herologo = document.getElementById("hero_logo");
function wscroll() {
    if (wrap.scrollTop >= 200) {
        scrol.forEach(el => el.classList.add('scrol'));
        /*scrol.classList.add("scroll");*/
        mous.style.opacity = "0";
        herotext.forEach(el=> el.style.opacity = "0");
        herologo.style.opacity = '.8';
    } else {
        scrol.forEach(el => el.classList.remove('scrol','scro'));
        mous.style.opacity = "1";
        herotext.forEach(el=> el.style.opacity = "1");
        herologo.style.opacity = '0';
    }
}
wrap.onscroll = wscroll;