let statistics = {
    redcars: 21,
    blueCars: 45,
    greencars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const car in statistics) {
    if (car[0] === 'r' || statistics[car] % 2 !== 0) {
        console.log(statistics[car]);
    }
}