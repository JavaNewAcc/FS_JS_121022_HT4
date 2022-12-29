let userWallet = {
    amountUSD: 150,
    amountEUR: 200,
    amountUAH: 20000
}

const bank = [
    {
        curName: "USD",
        sell: 40.719,
        buy: 39.967
    },
    {
        curName: "EUR",
        sell: 42.602,
        buy: 41.499
    },
    {
        curName: "UAH",
        sell: 1.05,
        buy: 0.95
    }
];

let sellRate = 0;
let buyRate = 0;
let amount = 0;

function amountCalc(waletID) {
    if (waletID.amountUAH <= 0) {
        alert("На Вашому рахунку недостатньо гривень для здайснення обміну");
        return;
    }
    else {
        targetCur = prompt("Вкажіть яку іноземну валюту Ви бажаете придбати (USD або EUR)").toUpperCase();
        if (targetCur == "EUR" || targetCur == "USD") {
            for (let i = 0; i < bank.length; i++) {
                if (bank[i].curName == targetCur) {
                    sellRate = bank[i].sell;
                    buyRate = bank[i].buy;
                    amount = waletID.amountUAH / sellRate;
                }
            }
            return { sellRate, amount, targetCur };
        }
        else {
            alert("Обрана валюта не доступна. На жаль обмін неможливий.");
            return;
        }

    }
}
if (amountCalc(userWallet) == undefined) {
    console.log("Обмін не було здійснено.")
}
else { console.log(`Всі доступні на Вашому рахунку гривні (в розмірі ${userWallet.amountUAH}) можливо обміняти на ${amount} ${targetCur} `) }