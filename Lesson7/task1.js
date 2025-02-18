function handleEven() {
    console.log("Number is even");
}

function handleOdd() {
    console.log("Number is odd");
}

function handleNum(num, evenCallback, oddCallback) {
    if (num % 2 === 0) {
        evenCallback(); 
    } else {
        oddCallback(); 
    }
}

handleNum(2, handleEven, handleOdd);
handleNum(3, handleEven, handleOdd);  