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

function UAHequivCalc(waletID) {
    summArr = Object.entries(waletID);
    for (let i = 0; i < bank.length; i++) {
        amount += bank[i].buy * summArr[i][1];
    }
    return amount;
}

UAHequivCalc(userWallet);

console.log(`В результаті обміну всіх Вашх заощаджень, сума на Вашому гривневому рахунку складе ${amount} (всі коміссії враховано)`);