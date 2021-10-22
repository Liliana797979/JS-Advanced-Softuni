function townPopulation(townsArray) {
    const towns = {};
    for (let townsAsString of townsArray) {
        let [name, population] = townsAsString.split(" <-> ");
        //console.log(name, population);
        population = Number(population);
        if (towns[name] != undefined) {
            population += towns[name];
        } towns[name] = population;
    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);