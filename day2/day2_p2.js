const fs = require('fs');
function findPasswords(arrayInput){
    let arrayPw = arrayInput.map(el => el.split(': ')[1]);
    let arrayConditions = arrayInput.map(el => el.split(': ')[0]);
    let counterPassword = 0;
    for (let i = 0; i < arrayConditions.length; i++){
        let letter = arrayConditions[i].split(' ')[1];
        let condition = arrayConditions[i].split(' ')[0].split('-');
        let pw = arrayPw[i].split('');
        //console.log(letter)
        //console.log(`Word: ${pw} First condition: ${pw[parseInt(condition[0])-1]} Second condition: ${pw[parseInt(condition[1])-1]}`)
        if ((pw[parseInt(condition[0])-1] == letter && pw[parseInt(condition[1])-1] != letter) || (pw[parseInt(condition[0])-1] != letter && pw[parseInt(condition[1])-1] == letter)) counterPassword++;
    }
    return counterPassword
}

(async() => {
    let arrayInput = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');
    console.log(findPasswords(arrayInput));
})();