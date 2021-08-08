window.onload = init;

function domHide(bodyToLoad, bodyToHide) {
    bodyToHide.style.display = "none";
    bodyToLoad.style.display = "block";
}

function init() {
    var currentVis = document.getElementById("aboutBody");
    document.getElementById("aboutBut").style.background = "#707070";

    document.getElementById("workBut").addEventListener("click", function() {
        domHide(document.getElementById("workBody"), currentVis);
        currentVis = document.getElementById("workBody");
        document.getElementById("workBut").style.background = "#707070";
        });
    document.getElementById("aboutBut").addEventListener("click", function() {
        domHide(document.getElementById("aboutBody"), currentVis);
        currentVis = document.getElementById("aboutBody");
        document.getElementById("aboutBut").style.background = "#707070";
        });
    document.getElementById("skillsBut").addEventListener("click", function() {
        domHide(document.getElementById("skillsBody"), currentVis);
        currentVis = document.getElementById("skillsBody");
        document.getElementById("skillsBut").style.background = "#707070";
        });
    document.getElementById("edBut").addEventListener("click", function() {
        domHide(document.getElementById("edBody"), currentVis);
        currentVis = document.getElementById("edBody");
        document.getElementById("edBut").style.background = "#707070";
        });
}