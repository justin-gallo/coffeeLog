let myLog = [];

//Create a new coffee object
function Coffee(name, roaster, flavorProfile, goodOrBad) {
    this.name = name
    this.roaster = roaster
    this.flavorProfile = flavorProfile
    this.goodOrBad = goodOrBad
}

//get info about Coffee object
Coffee.prototype.info = function() {
    if (this.goodOrBad === "goodCoffee") {
        return `${this.name} by ${this.roaster}. Flavor profile: ${this.flavorProfile}. I think it's a good coffee.`;
    } else if (this.goodOrBad === "badCoffee") {
        return `${this.name} by ${this.roaster}. Flavor profile: ${this.flavorProfile}. I think it's a bad coffee.`;
    }
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

//Script to make good/bad coffee button toggleable 
const goodOrBadBtn = document.querySelectorAll(".goodOrBad")

goodOrBadBtn.forEach(button => {
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