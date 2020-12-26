const { count } = require('console');
const fs = require('fs');
function splitPassport(input) {
    let indexInit = 0;
    let resultArray = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] != '') continue;
        resultArray.push(input.slice(indexInit, i).join(' '));
        i++
        indexInit = i;
    }
    return resultArray;
}

function validator(input) {
    let field = input.split(':')[0];
    let value = input.split(':')[1];
    //console.log(`Field: ${field} Value: ${value}`);
    switch (field) {
        case 'byr':
            console.log(`Field: ${field} Value: ${value}`);
            if (value.length != 4) return false;
            if (value < 1920 || value > 2002) return false;
            return true;
        case 'iyr':
            if (value.length != 4) return false;
            if (value < 2010 || value > 2020) return false;
            return true;
        case 'eyr':
            if (value.length != 4) return false;
            if (value < 2020 || value > 2030) return false;
            return true;
        case 'hgt':
            if (!value.includes('cm') && !value.includes('in')) return false;
            if (value.includes('cm')) return (parseInt(value.split('cm')[0]) >= 150 && parseInt(value.split('cm')[0]) <= 193);
            if (value.includes('in')) return (parseInt(value.split('in')[0]) >= 59 && parseInt(value.split('in')[0]) <= 76);
        case 'hcl':
            if (value.length != 7) return false;
            if (value[0] != '#') return false;
            let validChars = '0123456789abcdef'
            for (let i = 1; i < value.length; i++){
                if (!validChars.includes(value[i])) return false;
            }
            return true;
        case 'ecl':
            let checkers = [
                'amb',
                'blu',
                'brn',
                'gry',
                'grn',
                'hzl',
                'oth'
            ];
            for (let check of checkers){
                if (value.includes(check)) return true;
            }
            return false;
        case 'pid':
            if (value.length < 9 || isNaN(value)) return false;
            return true;
        default:
            return true;
    }
}

function checkPassport(input) {
    let countPassport = 0;
    let checkers = [
        'byr',
        'iyr',
        'eyr',
        'hgt',
        'hcl',
        'ecl',
        'pid'
    ];

    for (let passport of input) {
        let correct = true;
        for (let check of checkers) {
            if (!passport.includes(check)) {
                correct = false
                break;
            }
        }
        if (!correct) continue;
        let fieldsToCheck = passport.split(' ');
        for (let fieldToCheck of fieldsToCheck){
            let result = validator(fieldToCheck)
            if (!result) correct = false;
            console.log(result)
            break;
        
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