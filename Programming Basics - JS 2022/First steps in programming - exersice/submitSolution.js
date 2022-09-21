function submitSolution(input) {

    let packageWriting = Number(input[0]);
    let packF = Number(input[1]);
    let cleaning = Number(input[2]);
    let discount = Number(input[3]);

    let moneyForPens = packageWriting * 5.80;
    let moneyForMarkers = packF * 7.20;
    let moneyForPreparation = cleaning * 1.20;

    let totalMoney = moneyForPens + moneyForMarkers + moneyForPreparation;
    let moneyAfterDiscout = totalMoney - (totalMoney * (discount)/100);
    
    console.log(moneyAfterDiscout);
}
submitSolution