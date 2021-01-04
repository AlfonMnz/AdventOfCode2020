const fs = require('fs');
function countDif(input) {
    let difOne = 0;
    let difThree = 0;
    let start = 0;
    let difThreeNumber = {};
    while (input.length != 0) {
        let foundThree = false;
        let foundOne = false;
        for (let i = 0; i < input.length; i++) {
            let currentDif = input[i] - start;
            console.log(currentDif);
            if (currentDif == 1) {
                difOne++;
                start = input[i];
                input.splice(i, 1);
                foundOne = true;
                break;
            }
            if (currentDif == 3) {
                difThreeNumber.index = i;
                difThreeNumber.number = input[i];
                foundThree = true;
            }
        }
        if (foundThree && !foundOne) {
            start = difThreeNumber.number;
            input.splice(difThreeNumber.index, 1);
            difThree++
        }
    }
    console.log(difOne, difThree);
}

(async () => {
    let input = fs.readFileSync('./input.txt', 'utf-8').split("\r\n").map(el => parseInt(el));
    console.log(countDif(input));
})();