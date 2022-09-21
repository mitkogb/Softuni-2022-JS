function foodDelivery(input) {
    let numbersOfChickenMenus = Number(input[0]);
    let numbersOfFishMenus = Number(input[1]);
    let numbersOfVegeterianMenus = Number(input[2]);

    let priceOfChickenMenu = numbersOfChickenMenus * 10.35;
    let priceOfFishMenu = numbersOfFishMenus * 12.40;
    let priceOfVegeterianMenu = numbersOfVegeterianMenus * 8.15;
    let fullPriceOfAllMenus = priceOfChickenMenu + priceOfFishMenu + priceOfVegeterianMenu;
    let desert = fullPriceOfAllMenus * 20 / 100;
    let fullPrice = fullPriceOfAllMenus + desert + 2.50;
    console.log(fullPrice);
}
foodDelivery()