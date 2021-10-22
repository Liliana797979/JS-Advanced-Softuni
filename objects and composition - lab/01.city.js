function city(name, population, treasury) {
   return {
        name: name,
        population: population,
        treasury: treasury
    };
}

console.log(city('Tortuga', 7000, 15000));



function record(name, population, treasury) {
  const city = {};
  city.name = name;
  city.population = population;
  city.treasury = treasury;
  
  return city;
}

console.log(record('Santo Domingo', 12000, 23500));