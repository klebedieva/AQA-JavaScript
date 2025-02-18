function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Error: Division by zero is not allowed.");
    }
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Error: Both arguments must be numbers.");
    }
    return numerator / denominator;
}


try {
    let result1 = divide(10, 5);
    console.log(`Result: ${result1}`);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Operation completed.");
}

try {
    let result2 = divide(2, 0); 
    console.log(`Result: ${result2}`);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Operation completed.");
}

try {
    let result3 = divide("4", 2); 
    console.log(`Result: ${result3}`);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Operation completed.");
}

try {
    let result4 = divide(6, "b"); 
    console.log(`Result: ${result4}`);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Operation completed.");
}