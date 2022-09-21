function basketBallEquipment(input) {
    let taxForTraining = Number(input[0]);

    let trainres = taxForTraining - (taxForTraining * 40 / 100);
    let bascetBallEquip = trainres - (trainres * 20 / 100);
    let bascetBall = bascetBallEquip * 25 / 100;
    let bascetBallAcesories = bascetBall * 20/ 100;
    let fullPriceOfTraining = taxForTraining + trainres + bascetBallEquip + bascetBall + bascetBallAcesories;

    console.log(fullPriceOfTraining)
}
basketBallEquipment()