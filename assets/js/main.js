let kilometers
console.log(kilometers)

let age
console.log(age)

const priceKm = 0.21;
console.log(priceKm)


let ticketPrice = kilometers * priceKm;
console.log(ticketPrice);

let totalPrice


if (age < 18) {
    totalPrice = 0.2;

} else if (age > 65) {
    totalPrice = 0.4;

} else if (age >= 18 && age <= 65) {
    totalPrice = 0;
}

const discountPrice = ticketPrice * totalPrice



const resultEl = document.getElementById("result");

if (isNaN(kilometers)){
    resultEl.innerHTML = "Error!!! Enter only number."
} else{
    resultEl.innerHTML = `Price: ${discountPrice.toFixed(2)} € `;
}