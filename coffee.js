let myLog = [];

//Create a new coffee object:
function Coffee(name, roaster, flavorProfile, isGood) {
    this.name = name
    this.roaster = roaster
    this.flavorProfile = flavorProfile
    this.isGood = isGood
}

//Add coffee to log:
function addCoffeeToLog(name, roaster, flavorProfile, isGood) {
    let newCoffee = new Coffee(name, roaster, flavorProfile, isGood); //create newCoffee object
    myLog.push(newCoffee); //push newCoffee object to myLog Array
    displayCoffeeLog(myLog); //display all coffee in log to DOM
}

//Select cardContainer element:
const cardContainer = document.getElementById("cardContainer");

//Function to remove all children
function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Display coffee objects as cards:
function displayCoffeeLog(arr) {
    removeAllChildren(cardContainer); //Clears all cards

    for (let i = 0; i < arr.length; i++) { //Loop for each coffee in myLog array
        const card = document.createElement('div'); //create card div
        card.classList.add('coffeeCard'); //add coffeeCard class
        cardContainer.appendChild(card); //push new card to cardContainer

        const newName = document.createElement('h3'); //create h3 for name
        newName.classList.add('name'); //add name class

        const newRoaster = document.createElement('h5'); //create h5 for roaster
        newRoaster.classList.add('roaster'); //add roaster class

        const newFlavor = document.createElement('p'); //create p for flavorProfile
        newFlavor.classList.add('flavorProfile'); //add flavorProfile class

        const newRank = document.createElement('button'); //create button for "good/bad coffee" state
        newRank.classList.add('isGood'); //add styling for button

        newName.innerText = arr[i].name; //change newName text to object's name
        newRoaster.innerText = arr[i].roaster; //change newRoaster text to object's roaster
        newFlavor.innerText = arr[i].flavorProfile; //change newFlavor text to object's flavor profile

        if (arr[i].isGood) { //Checks if object contains the "isGood" property
            newRank.innerText = "Good Coffee 👍";
            newRank.classList.add("goodCoffee");
        } else {
            newRank.innerText = "Bad Coffee 👎";
            newRank.classList.add("badCoffee");
        }

        const deleteBtn = document.createElement('button'); //create delete button element
        deleteBtn.classList.add("deleteBtn"); //add deleteBtn class to element
        deleteBtn.innerText = "Delete Coffee";

        card.appendChild(newName); //push newName to card
        card.appendChild(newRoaster); //push newRoaster to card
        card.appendChild(newFlavor); //push newFlavor to card
        card.appendChild(newRank); //push newRank to card
        card.appendChild(deleteBtn); //push deleteBtn to card
    }

    updateIsGoodButtons(); //Updates the list of Good/Bad buttons on the page and re-assigns click events
    updateDeleteBtns(); //Updates the list of delete buttons
}

//Modal Script://
const modal = document.getElementById("newCoffeeModal"); //select the modal popup
const addCoffee = document.getElementById("addCoffee"); //select the "+ add coffee" btn
const closeBtn = document.getElementsByClassName("closeButton")[0]; //select the modal's close btn

//Display the modal when the "+ add coffee" button is clicked
addCoffee.onclick = function() {
    modal.style.display = "block";
}
//Close the modal when the "x" is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}
//Close the modal when the window outside of the modal is clicked
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

function updateIsGoodButtons() {
    //Script to make good/bad coffee button toggleable 
    let isGoodBtn = document.querySelectorAll(".isGood");

    isGoodBtn.forEach(button => {
        button.addEventListener("click", event => {
            if (button.classList.contains("goodCoffee")) { //if current state is "good coffee"
                button.classList.add("badCoffee"); //add badCoffee class
                button.innerText = "Bad Coffee 👎"; //change btn text to "bad coffee 👎"
                button.classList.remove("goodCoffee"); //remove the goodCoffee class
            } else if (button.classList.contains("badCoffee")) { //if current state is "bad coffee"
                button.classList.add("goodCoffee"); //add goodCoffee class
                button.innerText = "Good Coffee 👍"; //change btn text to "good coffee 👍"
                button.classList.remove("badCoffee"); //remove the badCoffee class
            }
        })
    })
}

updateIsGoodButtons(); //allows buttons to have toggle functionality on first load of the page (examples)

const newCoffeeSubmit = document.getElementById("newCoffeeSubmit");

newCoffeeSubmit.onclick = function() {
    let nameInput = document.getElementById("nameInput").value;
    let roasterInput = document.getElementById("roasterInput").value;
    let flavorInput = document.getElementById("flavorInput").value;
    
    if (document.querySelector("#isGoodInput:checked")) { //checks if "isGood" is checked
        let isGoodInput = document.querySelector("#isGoodInput:checked").value; //sets isGoodInput to "yes"
        addCoffeeToLog(nameInput, roasterInput, flavorInput, isGoodInput); //creates card for new coffee
    } else {
        addCoffeeToLog(nameInput, roasterInput, flavorInput); //creates card for new coffee, coffee is classified as "bad"
    }
    modal.style.display = "none";
    document.getElementById("nameInput").value = "";
    document.getElementById("roasterInput").value = "";
    document.getElementById("flavorInput").value = "";
    document.querySelector("#isGoodInput").checked = false;
}

function deleteCoffee(array, index) {
    for (let i = 0; i < array.length; i++) {
        if (i === index) {
            array.splice(index, 1);
        }
    }
    return array;
}

function updateDeleteBtns() {
    const deleteBtns = document.getElementsByClassName("deleteBtn");
    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener("click", function() {
            deleteCoffee(myLog, i);
            displayCoffeeLog(myLog);
        })
    }
}

addCoffeeToLog("Gravitas Blend", "Starbucks Reserve", "Pomegranate, persimmon and baking chocolate.", "yes"); //Example card on first page load