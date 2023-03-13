const theme = document.getElementById("theme-btn");
const toggleBtn = document.getElementById("toggle-btn")
const thm = document.getElementsByClassName("thm")[0]
var body = document.querySelector("body");
var txt = document.querySelector("p");
var brand = document.querySelector("strong");
var span = document.querySelector("span");
var isBlack = false;

//toggle button for mobile screen sizes
toggleBtn.addEventListener("click", function hello() {
    thm.classList.toggle('active')
});

//this function changes the theme of the app
theme.addEventListener("click", myBtn);




// this function enables dark/light mode
function myBtn() {
    //if black
    if(isBlack) {
        body.style.background = "rgb(234, 234, 234)";
        theme.style.background = "black";
        theme.style.color = "white";
        txt.style.color = "black";
        brand.style.color = "black";
        span.style.color = "black";

        //change the text on the button when clicked
        theme.onclick =() => {
            theme.innerHTML = "Enable Dark Mode";
            body.style.transition = "all 1s";
            theme.style.transition = "all 1s";
            txt.style.transition = "all 1s";
            brand.style.transition = "all 1s";
            span.style.transition = "all 1s"; 
        }
    } else {
        body.style.background = "rgb(23, 33, 36)";
        theme.style.background = "white";
        theme.style.color = "black";
        txt.style.color = "white";
        brand.style.color = "white";
        span.style.color = "white";
        
        //change the text on the button when clicked
        theme.onclick =() => {
            theme.innerHTML ="Enable Light Mode";
            body.style.transition = "all 1s";
            theme.style.transition = "all 1s";
            txt.style.transition = "all 1s";
            brand.style.transition = "all 1s";
            span.style.transition = "all 1s";
        }
    }
    isBlack = !isBlack;
}