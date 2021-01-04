//1212510616
const fs = require('fs');

function findNumbers(input) {
    let numberToCheck = 1212510616;
    let found = false;
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            let numbersToCheck = input.slice(i, j).map(el => parseInt(el));
            let result = numbersToCheck.reduce((accumulator, currentVal) => parseInt(accumulator) + parseInt(currentVal), 0);
            //console.log(`Checked From: ${i}[${input[i]}] - ${j}[${input[j]}] Result: ${result}`);
            if (result > numberToCheck){
                
                //console.log(`Upper`);
                break;   
            }
            //console.log(result);
            if (result == numberToCheck){
                console.log(`MIN: ${Math.min(...numbersToCheck)} MAX: ${Math.max(...numbersToCheck)} Result: ${parseInt(Math.min(...numbersToCheck)) + parseInt(Math.max(...numbersToCheck))}`)
                found = true;
            }
        }
        if (found) break;
    }
}


(async () => {
    let input = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');
    findNumbers(input)
})();