
function btnGetPrice() {


    //var declaretion
    const kilometers = Number(document.getElementById("km").value);
    const age = document.getElementById("selectAge").value;
    const priceKm = 0.21;
    let ticketPrice = kilometers * priceKm;
    let totalPrice


    switch (age) {
        case "ageNoDescount":
            totalPrice = 1;
            break;
        case "under18":
            totalPrice = 0.2;
            break;
        case "over65":
            totalPrice = 0.4;
            break;
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
