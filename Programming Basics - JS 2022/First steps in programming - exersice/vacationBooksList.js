function vacationBookList(input) {
    let pagesNumber = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysNumber = Number(input[2]);
    let result = (pagesNumber / pagesPerHour)/daysNumber;
    console.log(result);
}
vacationBookList()