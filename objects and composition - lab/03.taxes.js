function createRecord(name, population, treasury) {
    return {
        name, population, treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession (percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100); 
        },
    };
}

console.log(createRecord(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']));