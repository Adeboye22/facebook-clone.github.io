var theme = document.getElementById("theme-btn");
var body = document.querySelector("body");
var txt = document.querySelector("p");
var brand = document.querySelector("brand-b");
var isBlack = false;

//this function changes the theme of the app
theme.addEventListener("click", function myBtn() {
    //if black
    if(isBlack) {
        body.style.background = "rgb(234, 234, 234)";
        theme.style.background = "black";
        theme.style.color = "white";
        txt.style.color = "black";
        
        //change the text on the button when clicked
        theme.onclick = function() {
            theme.innerHTML = "Enable Dark Mode";
            body.style.transition = "all 1s";
            theme.style.transition = "all 1s";
            txt.style.transition = "all 1s";
        }
    } else {
        body.style.background = "rgb(23, 33, 36)";
        theme.style.background = "white";
        theme.style.color = "black";
        txt.style.color = "white";
        
        //change the text on the button when clicked
        theme.onclick = function() {
            theme.innerHTML ="Enable Light Mode";
            body.style.transition = "all 1s";
            theme.style.transition = "all 1s";
            txt.style.transition = "all 1s";
        }
    }
    isBlack = !isBlack;
});