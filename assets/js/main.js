
function btnGetPrice() {

    //var declaretion
    const kilometers = document.getElementById("km").value;
    const age = document.getElementById("selectAge").value;
    const ticketPrice = document.getElementById("ticketPrice");

    const priceKm = 0.21;
    let discount = 0;
    
    switch (age) {
        case "ageNoDescount":
            discount = 1;
            break;
        case "under18":
            discount = 0.2;
            break;
        case "over65":
            discount = 0.4;
            break;
    }

    let Price = kilometers * priceKm * discount;
    ticketPrice.innerHTML = `Price: ${Price.toFixed(2)} € `;

    if (isNaN(kilometers)) {
        ticketPrice.innerHTML = "Error km";
      
    }

    if (isNaN(age)) {
        ticketPrice.innerHTML = "Error age";
        
    }

/*     //var declaretion
    let totalPrice = ticketPrice * discountPrice
    let resultEl = document.getElementById("ticketPrice");

    if (isNaN(age)) {
        resultEl.innerHTML = "Error!!! Enter only number."
    } else {
        resultEl.innerHTML = `Price: ${totalPrice.toFixed(2)} € `;
    } */
}
