let figures = [
    {
        name: "square",
        sizeA: 4,
        sizeB: 4
    },
    {
        name: "rectangle",
        sizeA: 4,
        sizeB: 8
    },
    {
        name: "triangle",
        sizeA: 4,
        sizeB: 5
    },
    {
        name: "circle",
        sizeA: 5
    }
]

function areaCalculator(objArray) {
    for (let arrElement of objArray) {
        if (arrElement.name == "circle") {
            let elemenArea = arrElement.sizeA * arrElement.sizeA * 3.14;
            console.log(`Area of ${arrElement.name} is: ${elemenArea} sq.cm.`)
        }
        else if (arrElement.name == "triangle") {
            let elemenArea = arrElement.sizeA * arrElement.sizeB / 2;
            console.log(`Area of ${arrElement.name} is: ${elemenArea} sq.cm.`)
        }
        else if (arrElement.name == "square" || arrElement.name == "rectangle") {
            let elemenArea = arrElement.sizeA * arrElement.sizeB;
            console.log(`Area of ${arrElement.name} is: ${elemenArea} sq.cm.`)
        }
        else { console.log(`Requested element doesn't exist`) }
    }
}

areaCalculator(figures);