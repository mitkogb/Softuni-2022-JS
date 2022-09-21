function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volumeOfAquariumInCm = lenght * width * height;
    let volumeOfAquariumInLiters = volumeOfAquariumInCm / 1000;
    let volumeOfOcupedSpace = volumeOfAquariumInLiters * 17 /100;
    let nesesryLiters = volumeOfAquariumInLiters - volumeOfOcupedSpace;

    console.log(nesesryLiters);
}
fishTank()