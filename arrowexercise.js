const nums = [1,2,3,4,5,6]



const double = (arr) => arr.map((val) => val * 2)

const squareAndFindEvens =(arr) => arr.map((num) => num ** 2 ).filter((square)=> square % 2 === 0)