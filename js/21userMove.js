let move = function (steps, direction) {
    let stepsString = "";
    let numToString = steps.toString();
    let lastChar = numToString.charAt(numToString.length - 1);

    switch (lastChar) {
        case "0": stepsString = "кроків"
            break;
        case "1": stepsString = "крок"
            break;
        case "2":
        case "3":
        case "4": stepsString = "кроки"
            break;
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": stepsString = "кроків"
            break;
    }
    return `Користувач перемістився на ${direction} на ${steps} ${stepsString}`;
}

let userMove = function (userDirection, fn, userSteps) {
    if (userDirection == null || userDirection == "") { return `Не було задано напрямок переміщення. Юзер залишився на місці.` }
    else {
        if (userSteps == null || userSteps == "") { return `Не було задано кількість кроків. Юзер залишився на місці, але збирався йти на ${userDirection}.` }
        else {
            return fn(userSteps, userDirection);
        }
    }
}

console.log(userMove(prompt("Введіть напрямок переміщення"), move, prompt("Введіть кількість кроків")));