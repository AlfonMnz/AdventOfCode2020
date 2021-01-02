const fs = require('fs');

function splitInput(input) {
    let initIndex = 0;
    let returnArray = [];
    for (let i = 0; i < input.length; i++){
        if (input[i] != '') continue;
        returnArray.push(input.slice(initIndex, i))
        initIndex = i+1;
    }
    returnArray.push(input.slice(initIndex, input.length));
    return returnArray;
}

function countAnswer(input) {
    let answerInGroup = '';
    let answerToCheck = input[0];
    for (let i = 0; i < answerToCheck.length; i++){
        let include = true;
        for (let j = 1; j < input.length; j++){
            if (!input[j].includes(answerToCheck[i])){
                include = false;
                break;
            }
        }
        if (include) answerInGroup+=answerToCheck[i];
    }
    return answerInGroup.length;
}

(async() => {
    let input = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');
    let splittedInput = splitInput(input);
    let sum = 0;
    for (let answer of splittedInput){
        sum+=countAnswer(answer);
    }
    console.log(sum);
})();