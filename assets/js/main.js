
function btnGetPrice() {


    //var declaretion
    const kilometers = Number(document.getElementById('km').value);
    const age = Number(document.getElementById('age').value);
    const priceKm = 0.21;
    let ticketPrice = kilometers * priceKm;
    let totalPrice
    

    if (age < 18) {
        totalPrice = 0.2;

    } else if (age > 65) {
        totalPrice = 0.4;

    } else {
        totalPrice = 1;
    }

    //var declaretion
    const discountPrice = ticketPrice * totalPrice
    const resultEl = document.getElementById("ticketPrice");

    if (isNaN(kilometers)) {
        resultEl.innerHTML = "Error!!! Enter only number."
    } else {
        resultEl.innerHTML = `Price: ${discountPrice.toFixed(2)} € `;
    }
}
