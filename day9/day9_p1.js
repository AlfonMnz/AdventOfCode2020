const fs = require('fs');

function findBadNum (input){
    for (let i = 25; i < input.length; i++){
        let number = parseInt(input[i]);
        let numbersToCheck = input.slice(i-25, i);
        let sumsDone = {};
        let found = false;
        console.log(numbersToCheck);
        for (let n1 = 0; n1 < numbersToCheck.length; n1++){
            let firstNumber = numbersToCheck[n1];
            sumsDone.firstNumber = [];
            
            for (let n2 = 0; n2 < numbersToCheck.length; n2++){
                let secondNumber = numbersToCheck[n2];
                if (n1 == n2) continue;
                if (sumsDone.firstNumber.includes(secondNumber)) continue;
                if (parseInt(firstNumber) + parseInt(secondNumber) == number){
                    console.log(`${firstNumber} + ${secondNumber} = ${parseInt(firstNumber) + parseInt(secondNumber)}`);
                    found = true;
                    break;
                }
                sumsDone.firstNumber.push(secondNumber);
            }
            if (found) break;
        }
        if (!found) return number;
    }
}

(async () => {
    let input = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');
    console.log(input);
    console.log(findBadNum(input));
})();