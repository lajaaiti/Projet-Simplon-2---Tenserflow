var btn = document.getElementById("btn");
var vid = document.getElementById("Cam");
var test = 0;

btn.addEventListener("click", function() {
    if (test == 0) {
        btn.style.backgroundColor = "red";
        test = 1;
    } else {
        btn.style.backgroundColor = "green";
        test = 0;
    }
})