let initialArr = [];
let newRevArr = [];

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
    arrFillerFN.forEach(element => {
        if (element % 2 == 0) {
            newRevArr.push(element * 4);
        }
        else {
            newRevArr.push(element);
        }
    });
}

evenNumMult(arrFiller(prompt(`Введіть довжну массиву`)))

if (initialArr == '') {
    console.log(`Массиви пусті`)
}
else {
    console.log(`Початковий массив: ${initialArr}`)
    console.log(`Змінений массив: ${newRevArr}`);
}