"use strict"

const hover = document.querySelector(".random-possiton");
const codeHT =  document.querySelector(".codeHT");
let state = document.querySelector(".waiting");
const again = document.querySelector(".again");
const message = "Good, you win...";

const ffff = function(){
    let number1 = Math.floor(Math.random() * 70) +1;
    let number2 = Math.floor(Math.random() * 70) +1;
    
    hover.style.top = `calc(${number1}% - 70px)`;
    hover.style.left = `calc(${number2}% - 160px)`;

    hover.addEventListener("click", function() {
        document.querySelector(".main").style.background = "linear-gradient(to top left, #28b487, #7dd56f)";
        state.textContent = message;
        codeHT.textContent = "Try Again!!";
        hover.style.top = ``;
        hover.style.left = ``;
    });
}

hover.addEventListener("mouseover", ffff)

again.addEventListener("click", function () {
    document.querySelector(".main").style.background = "#0085ea"
    state.textContent = "Waiting for you...";
    codeHT.textContent = "Click";
    if(state.textContent == message) ffff()
})



// =======================First code version ===============
// "use strict"

// const hover = document.querySelector(".random-possiton");
// const codeHT =  document.querySelector(".codeHT");
// let state = document.querySelector(".waiting");
// const again = document.querySelector(".again");
// const message = "Good, you win...";

// let number1;
// let number2;

// hover.addEventListener("mouseover", function () {
//     number1 = Math.floor(Math.random() * 70) +1;
//     number2 = Math.floor(Math.random() * 70) +1;
    
//     hover.style.top = `calc(${number1}% - 70px)`;
//     hover.style.left = `calc(${number2}% - 160px)`;

//     hover.addEventListener("click", function() {
//         document.querySelector(".main").style.background = "linear-gradient(to top left, #28b487, #7dd56f)";
//         state.textContent = message;
//         codeHT.textContent = "Try Again!!";
//         hover.style.top = ``;
//         hover.style.left = ``;
//     });
// });

// again.addEventListener("click", function () {
//     document.querySelector(".main").style.background = "#0085ea"
//     state.textContent = "Waiting for you...";
//     codeHT.textContent = "Click";
// })