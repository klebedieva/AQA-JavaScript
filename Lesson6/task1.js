// function declaration
function calculateRectangleArea1 (width, height) 
{ 
    return width * height;
}
console.log(calculateRectangleArea1(2,3));

// function expression

const calculateRectangleArea2 = function (width, height) 
{ 
    return width * height;
}
console.log(calculateRectangleArea2(4,6));

// arrow function

const calculateRectangleArea3 = (width, height) => width * height;
console.log(calculateRectangleArea3(8,10));