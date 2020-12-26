const { count } = require('console');
const fs = require('fs');
function splitPassport (input){
    let indexInit = 0;
    let resultArray = [];
    for (let i = 0; i < input.length; i++){
        if (input[i] != '') continue;
        resultArray.push(input.slice(indexInit, i).join(' '));
        i++
        indexInit = i;
    }
    return resultArray;
}

function checkPassport (input){
    let countPassport = 0;
    let checkers = [
        'byr',
        'iyr',
        'eyr',
        'hgt',
        'hcl',
        'ecl',
        'pid'
    ]
    for (let passport of input){
        let correct = true;
        for (let check of checkers){
            if (!passport.includes(check)) {
                correct = false
                break;
            }
        }
        if (correct) countPassport++;
    }
    return countPassport;
}


(async () => {
    let input = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');
    let splitter = splitPassport(input);
    console.log(checkPassport(splitter));
})();