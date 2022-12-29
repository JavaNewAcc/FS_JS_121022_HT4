let arrInitial = [];
let arrEdited = [];
let keepElement = "Keep";
let removeElenent = "Remove";

function arrFiller(qttyOfElements) {
    for (let i = 0; i < qttyOfElements; i++) {
        if (i % 2 == 0) {
            arrInitial[i] = keepElement;
        }
        else {
            arrInitial[i] = removeElenent;
        }
    }
    return arrInitial;
}

function arrEditor(arrFillerFN, keyWord) {
    arrFillerFN = arrFiller(prompt(`Вкажіть кількість елементів массива`))
    if (arrFiller().length == 0) {
        return "Массив пустий"
    }
    else {
        let j = 0;
        for (let i = 0; i < arrInitial.length; i++) {
            if (arrInitial[i] == keyWord) {
                arrEdited[j] = arrInitial[i];
                j++;
            }
            else { continue }
        }
        return arrEdited;
    }
}

console.log(arrEditor(arrFiller, keepElement));