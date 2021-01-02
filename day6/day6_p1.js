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

function countAnswer(input){
    let answerInGroup = '';
    console.log(input)
    for (let answer of input){
        for (let a of answer){
            if (answerInGroup.includes(a)) continue;
            answerInGroup+=a;
            
        }
    }
    console.log(answerInGroup.length)
    return answerInGroup.length;
}

(async() => {
    let input = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');
    let splittedInput = splitInput(input);
    let sum = 0;
    //countAnswer(splittedInput[0])
    for (let answer of splittedInput){
        sum+=countAnswer(answer);
    }
    console.log(sum);
})();