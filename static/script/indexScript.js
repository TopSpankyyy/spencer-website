window.onload = init;

function domHide(bodyToLoad, bodyToHide) {
    bodyToHide.style.display = "none";
    bodyToLoad.style.display = "block";
}

function init() {
    var currentVis = document.getElementById("aboutBody");
    var currentBut = document.getElementById("aboutBut");
    document.getElementById("aboutBut").style.background = "#707070";

    document.getElementById("workBut").addEventListener("click", function() {
        domHide(document.getElementById("workBody"), currentVis);
        currentBut.style.background = "#404040";
        currentVis = document.getElementById("workBody");
        document.getElementById("workBut").style.background = "#707070";
        currentBut = document.getElementById("workBut");
        });
    document.getElementById("aboutBut").addEventListener("click", function() {
        domHide(document.getElementById("aboutBody"), currentVis);
        currentBut.style.background = "#404040";
        currentVis = document.getElementById("aboutBody");
        document.getElementById("aboutBut").style.background = "#707070";
        currentBut = document.getElementById("aboutBut");
        });
    document.getElementById("skillsBut").addEventListener("click", function() {
        domHide(document.getElementById("skillsBody"), currentVis);
        currentBut.style.background = "#404040";
        currentVis = document.getElementById("skillsBody");
        document.getElementById("skillsBut").style.background = "#707070";
        currentBut = document.getElementById("skillsBut");
        });
    document.getElementById("edBut").addEventListener("click", function() {
        domHide(document.getElementById("edBody"), currentVis);
        currentBut.style.background = "#404040";
        currentVis = document.getElementById("edBody");
        document.getElementById("edBut").style.background = "#707070";
        currentBut = document.getElementById("edBut");
        });
}