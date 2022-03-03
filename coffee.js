let myLog = [];

function Coffee(name, roaster, flavorProfile, goodOrBad) {
    this.name = name
    this.roaster = roaster
    this.flavorProfile = flavorProfile
    this.goodOrBad = goodOrBad
}



Coffee.prototype.info = function() {
    if (this.goodOrBad === "goodCoffee") {
        return `${this.name} by ${this.roaster}. Flavor profile: ${this.flavorProfile}. I think it's a good coffee.`;
    } else if (this.goodOrBad === "badCoffee") {
        return `${this.name} by ${this.roaster}. Flavor profile: ${this.flavorProfile}. I think it's a bad coffee.`;
    }
}