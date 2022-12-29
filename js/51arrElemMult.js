let initialArr = [2, 3, 5, 4, 8, 7, 9, 10];
let newArr = [];

function evenNumMult(arrOfValues) {
    for (let i = 0; i < arrOfValues.length; i++) {
        if (arrOfValues[i] % 2 == 0) {
            newArr[i] = arrOfValues[i] * 4;
        }
        else {
            newArr[i] = arrOfValues[i];
        }
    }
    return newArr;
}

console.log(`Початковий массив: ${initialArr}`)
console.log(`Змінений массив: ${evenNumMult(initialArr)}`);