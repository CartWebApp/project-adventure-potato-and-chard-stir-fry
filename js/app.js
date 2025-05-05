let num = 0;

// Store name of the button in sessionStorage
function storeChoice() {
    findNextAvailableNumber()

    sessionStorage.setItem(`${num}`, this.name);
    console.log(this.name);

    return;
}

function findNextAvailableNumber() {
    // Convert number to string for comparison with keys
    while (sessionStorage.hasOwnProperty(String(num))) {
        num++; // If key exists, increment and check again
    }
    return num; // Return the first number that is not a key
}

let endArray = [];

// Put sessionStorage into an array
function returnChoices() {
    endArray = Object.keys(sessionStorage)
        .map(Number)                   // Convert keys to numbers
        .sort((a, b) => a - b)        // Sort keys numerically
        .map(key => sessionStorage[key]);        // Get values in order

    endArray = endArray.filter(value => value !== undefined); // Remove any instace of undefined
    return endArray;
}

// Function to display endArray as text
let d = 0;
function displayChoices() {
    d++;

    const choicesUl = document.getElementById('choicesUl');
    const endingsText = document.getElementById('endingsText');
    const returnHome = document.getElementsByClassName(`returnHome`);
    const displayChoices = document.getElementById(`displayChoices`);
    const lists = document.querySelectorAll(`li`)
    if (d % 2 === 0) {
        lists.forEach(function(list) {
            list.remove();
        });
        endingsText.style.width = `78vw`;
        returnHome[0].style.left = `14vw`
        displayChoices.style.border = `none`;
        displayChoices.style.left = `73vw`;
        displayChoices.style.background = `hsla(0, 0%, 0%, 0)`;
    } else {
        returnChoices();

        endingsText.style.width = `36vw`;
        returnHome[0].style.left = `5vw`
        displayChoices.style.border = `1px black solid`;
        displayChoices.style.left = `59.5vw`;
        displayChoices.style.background = `hsla(0, 0%, 0%, 0.25)`;

        // Loop through the array and create a <li> for each value
        endArray.forEach(x => {
            // Create a new <li> element
            const createList = document.createElement('li');
            
            // Set the text content of the <li> to the value
            createList.textContent = x;
            
            // Append the <li> to the <ul>
            choicesUl.appendChild(createList);
        });
    }
}

function clearSession() {
    sessionStorage.clear();
};

const displayChoicesButtons = document.querySelectorAll("#displayChoicesButton");
displayChoicesButtons.forEach(displayChoicesButton => {
    displayChoicesButton.addEventListener("click", displayChoices);
});

const startB1s = document.querySelectorAll("#startB1");
startB1s.forEach(startB1 => {
    startB1.addEventListener("click", storeChoice);
});

const startB2s = document.querySelectorAll("#startB2");
startB2s.forEach(startB2 => {
    startB2.addEventListener("click", storeChoice);
});

const startB3s = document.querySelectorAll("#startB3");
startB3s.forEach(startB3 => {
    startB3.addEventListener("click", storeChoice);
});

const returnHomes = document.querySelectorAll(`.returnHome`);
returnHomes.forEach(returnHome => {
    returnHome.addEventListener("click", clearSession);
});