let initialArr = [];
let newArr = [];

function arrFiller(arrLength) {
    arrLength = parseInt(arrLength);
    if (arrLength <= 0) {
        console.log(`Довжна массива має будти більше 0.`)
    }
    else if (arrLength != arrLength) {
        console.log(`Введіть, будь ласка, числове значення довжини массива.`)
    }
    else {
        for (let i = 0; i < arrLength; i++) {
            initialArr[i] = parseInt(Math.random() * 10);
        }
    }
    return initialArr;
}

function evenNumMult(arrFillerFN) {
    for (let i = 0; i < arrFillerFN.length; i++) {
        if (arrFillerFN[i] % 2 == 0) {
            newArr[i] = arrFillerFN[i] * 4;
        }
        else {
            newArr[i] = arrFillerFN[i];
        }
    }
    return newArr;
}

evenNumMult(arrFiller(prompt(`Введіть довжну массву`)))

if (initialArr == '') {
    console.log(`Массиви пусті`)
}
else {
    console.log(`Початковий массив: ${initialArr}`)
    console.log(`Змінений массив: ${newArr}`);
}