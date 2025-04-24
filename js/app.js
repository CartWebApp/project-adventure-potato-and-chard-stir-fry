let sessionData = {};
let num = 0;

// Store name of the button in sessionStorage
function storeChoice() {
    // let buttonName = this.name;

    findNextAvailableNumber()

    sessionStorage.setItem(`${num}`, this.name);
    console.log(this.name);

    // endArray.push(sessionStorage.getItem("buttonName"));
    return;
}

function findNextAvailableNumber() {
    // Convert number to string for comparison with keys
    while (sessionStorage.hasOwnProperty(String(num))) {
        num++; // If key exists, increment and check again
    }
    return num; // Return the first number that is not a key
}

function returnChoices() {
    const endArray = Object.keys(sessionStorage)
        .map(Number)                   // Convert keys to numbers
        .sort((a, b) => a - b)        // Sort keys numerically
        .map(key => sessionStorage[key]);        // Get values in order
    return endArray;
}


const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", storeChoice);
});