// Checking the posibility of the order creation

function checkOrder (available, ordered) {
    if (typeof ordered !== "number") {
        return "Please enter a number";
    }
    if (ordered > available) {
        return "Your order is too large, we don’t have enough goods";
    } 
    if (ordered === 0) {
        return "Your order is empty";
    } 
        return "Your order is accepted";
    }

console.log(checkOrder(100,"5"));
console.log(checkOrder(100,120));
console.log(checkOrder(100,0));
console.log(checkOrder(100,80));
