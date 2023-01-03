let initialArr = [2, 3, 5, 4, 8, 7, 9, 10];

function evenNumMult(initValArr) {
    let newArr = initValArr.map(initArrItem => {
        if (initArrItem % 2 == 0) { return initArrItem * 4; }
        else { return initArrItem };
    }
    )
    return newArr;
}

console.log(`Початковий массив: ${initialArr}`)
console.log(`Змінений массив: ${evenNumMult(initialArr)}`);