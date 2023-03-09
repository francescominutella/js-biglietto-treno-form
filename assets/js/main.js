
function btnGetPrice() {


    //var declaretion
    const kilometers = Number(document.getElementById("km").value);
    const age = Number(document.getElementById("selectAge").value);
    const priceKm = 0.21;
    let ticketPrice = kilometers * priceKm;
    let discountPrice

    switch (age) {
        case "ageNoDescount":
            discountPrice = 1;
            break;
        case "under18":
            discountPrice = 0.2;
            break;
        case "over65":
            discountPrice = 0.4;
            break;
        case "emptyAge":
            discountPrice = "Error!!! Enter only number.";
            break;
    }

    //var declaretion
    let totalPrice = ticketPrice * discountPrice
    let resultEl = document.getElementById("ticketPrice");

    if (isNaN(age)) {
        resultEl.innerHTML = "Error!!! Enter only number."
    } else {
        resultEl.innerHTML = `Price: ${totalPrice.toFixed(2)} € `;
    }
}
