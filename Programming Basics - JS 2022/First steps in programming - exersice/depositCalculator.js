function depostCalcilator(input) {
    let depostSum = Number(input[0]);
    let time = Number(input[1]);
    let gpr = Number(input[2]);
    let result = depostSum + time * ((depostSum * gpr/100)/12);
    console.log(result);
}depostCalcilator
