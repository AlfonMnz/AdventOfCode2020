const fs = require('fs');
function findPasswords(arrayInput){
    let arrayPw = arrayInput.map(el => el.split(': ')[1]);
    let arrayConditions = arrayInput.map(el => el.split(': ')[0]);
    let counterPassword = 0;
    for (let i = 0; i < arrayConditions.length; i++){
        let letter = arrayConditions[i].split(' ')[1];
        let condition = arrayConditions[i].split(' ')[0].split('-');
        let counter = 0;
        let pw = arrayPw[i].split('');
        for (let letr of pw){
            if (letr == letter) counter ++;
        }
        if (counter >= condition[0] && counter <= condition[1]){
            counterPassword++
        }
    }
    return counterPassword
}

(async() => {
    let arrayInput = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');
    console.log(findPasswords(arrayInput));
})();