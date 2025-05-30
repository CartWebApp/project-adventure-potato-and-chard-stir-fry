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
    const returnOption = document.getElementsByClassName(`returnOption`);
    const displayChoices = document.getElementById(`displayChoices`);
    const lists = document.querySelectorAll(`li`);
    const displayChoicesButton = document.getElementById("displayChoicesButton");
    const mainEndings = document.getElementById(`mainEndings`);

    if (window.screen.width > 1024) {
        if (d % 2 === 0) {
            lists.forEach(function(list) {
                list.remove();
            });
            endingsText.style.width = `78vw`;
            returnOption[0].style.left = `53vw`
            displayChoices.style.border = `none`;
            displayChoices.style.left = `73vw`;
            displayChoices.style.background = `hsla(0, 0%, 0%, 0)`;
            displayChoices.style.width = `0`
        } else {
            returnChoices();
            endingsText.style.width = `36vw`;
            returnOption[0].style.left = `23vw`
            displayChoices.style.border = `1px black solid`;
            displayChoices.style.left = `61.5vw`;
            displayChoices.style.background = `hsla(0, 0%, 0%, 0.5)`;
            displayChoices.style.width = `25vw`
            displayChoices.style.bottom = `9.5vh`
            displayChoicesButton.style.left = `-11vw`

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
    } else if (window.screen.width > 520) {
        if (d % 2 === 0) {
            lists.forEach(function(list) {
                list.remove();
            });
            displayChoices.style.border = `none`;
            displayChoices.style.background = `hsla(0, 0%, 0%, 0)`;
            displayChoices.style.width = `0`;
            mainEndings.style.height = `auto`;
        } else {
            returnChoices();
            mainEndings.style.height = `172vh`;
            displayChoices.style.background = `hsla(0, 0%, 0%, 0.5)`;
            displayChoices.style.bottom = `-70vh`;
            displayChoices.style.left = `9vw` ;
            displayChoices.style.width = `80.15vw`;
            displayChoices.style.border = `1px solid black`;

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
    } else {
        if (d % 2 === 0) {
            lists.forEach(function(list) {
                list.remove();
            });
            displayChoices.style.border = `none`;
            displayChoices.style.width = `0`;
            displayChoices.style.background = `hsla(0, 0%, 0%, 0)`;
            mainEndings.style.height = `auto`;
        } else {
            returnChoices();
            mainEndings.style.height = `180vh`;
            displayChoices.style.width = `80.15vw`;
            displayChoices.style.left = `9%`;
            displayChoices.style.bottom = `-77%`;
            displayChoices.style.border = `1px black solid`;
            displayChoices.style.background = `hsla(0, 0%, 0%, 0.5)`;
            displayChoices.style.height = `72.5vh`;

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

//ideas for media query//
// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 700px)")

// Call listener function at run time
// myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});