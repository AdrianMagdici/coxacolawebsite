// JavaScript source code
//https://discord.gg/xUrUUYFzEK   <---- discord invite link

let isDarkMode = true;
let items = [4];

document.getElementById("change-mode-button").onclick = function() {
    if(isDarkMode == false) {
        document.getElementById("bg").className = "dark-mode-bg";
        document.getElementById("ul-navbar").style.background = "#1e1e1e";
        items = document.querySelectorAll(".dark-color");
        for(x=0;x<items.length;x++) {
            items[x].className = "light-color";
        }
        document.getElementById("logo-text").src = "logotext.png";
        isDarkMode = true;
    }
    else {
        document.getElementById("bg").className = "light-mode-bg";
        document.getElementById("ul-navbar").style.background = "#eaeaea";
        items = document.querySelectorAll(".light-color");
        for(let x=0; x<items.length; x++) {
            items[x].className = "dark-color";
        }
        document.getElementById("logo-text").src = "logotextbw.png";
        isDarkMode = false;
    }
}