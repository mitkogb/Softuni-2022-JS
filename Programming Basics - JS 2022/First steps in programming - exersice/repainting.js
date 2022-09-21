function repainting(input) {
    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let allPaint = (paint + (paint * 10/ 100)) * 14.50
    let allNaylon = (naylon + 2) * 1.50;
    let bags = 0.40;
    let allThinner = thinner * 5;
    let allMaterils = allPaint + allNaylon + bags + allThinner ;
    let allSumForWorkers = (allMaterils * 30 / 100) * hours;
    let allSum = allMaterils + allSumForWorkers;
    console.log(allSum)
}
repainting()