// document.addEventListener("DOMContentLoaded", function () {
//     const moreInfoBtn = document.getElementById("more-info");
//     const extraInfo = document.getElementById("extra-info");

//     moreInfoBtn.addEventListener("click", function () {
//         extraInfo.classList.toggle("hidden");
//     });
// });

let data = sessionStorage.getItem("buttonName");

function storeChoice() {
    let buttonName = this.name;
    console.log("Button name:", buttonName);
    sessionStorage.setItem("buttonName", buttonName);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", storeChoice);
});