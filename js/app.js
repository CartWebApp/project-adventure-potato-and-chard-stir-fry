// document.addEventListener("DOMContentLoaded", function () {
//     const moreInfoBtn = document.getElementById("more-info");
//     const extraInfo = document.getElementById("extra-info");

//     moreInfoBtn.addEventListener("click", function () {
//         extraInfo.classList.toggle("hidden");
//     });
// });

let sessionData = {};

// Store name of the button in sessionStorage
function storeChoice() {
    // let buttonName = this.name;
    let number = 0;

    sessionStorage.setItem(`buttonName${number}`, this.name); // I NEED TO MAKE UNIQUE KEY NAME FOR ALL VALUES DONT FORGET
    console.log(this.name);

    // endArray.push(sessionStorage.getItem("buttonName"));
    number++;
}

function returnChoices() {
    // Loop through all keys in sessionStorage
    for (let i = 0; i < sessionStorage.length; i++) {
        // Get the key at the current index
        let key = sessionStorage.key(i);

        // Get the value associated with that key
        let value = sessionStorage.getItem(key);

        // Store it in the sessionData object
        sessionData[key] = value;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", storeChoice);
});