function fruit(typeOfFruit, weightInGrams, priceInKilogram) {
    let weightInKG = weightInGrams / 1000;
    let moneyNeeded = weightInKG * priceInKilogram;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${typeOfFruit}.`);
}

fruit('orange', 2500, 1.80);