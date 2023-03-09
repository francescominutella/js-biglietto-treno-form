
function btnGetPrice() {
    //var declaretion
    let kilometers
    let age
    const priceKm = 0.21;
    let ticketPrice = kilometers * priceKm;
    let totalPrice

    if (age < 18) {
        totalPrice = 0.2;

    } else if (age > 65) {
        totalPrice = 0.4;

    } else if (age >= 18 && age <= 65) {
        totalPrice = 0;
    }

    //var declaretion
    const discountPrice = ticketPrice * totalPrice
    const resultEl = document.getElementById("result");

    if (isNaN(kilometers)) {
        resultEl.innerHTML = "Error!!! Enter only number."
    } else {
        resultEl.innerHTML = `Price: ${discountPrice.toFixed(2)} € `;
    }
}
