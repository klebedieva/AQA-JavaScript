function recursiveCount(num) {
    if (num <= 0) { 
        console.log(num);
        return;
    }
    console.log(num); 
    recursiveCount(num - 1); 
}
recursiveCount(5); 