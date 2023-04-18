//calculating scroll length
let progressBar = document.getElementById("ProgressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.height = progressHeight + "%";
}