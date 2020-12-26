const fs = require('fs');
function findSum(arrayInput){
    let sumsDone = {};
    for (let firstNumb of arrayInput){
        sumsDone.firstNumb = [];
        for (let secondNumb of arrayInput){
            if (sumsDone.firstNumb.includes(secondNumb)) continue;
            if (parseInt(firstNumb)+parseInt(secondNumb) != 2020){
                sumsDone.firstNumb.push(secondNumb);
                continue;
            }
            return parseInt(firstNumb)*parseInt(secondNumb);
        }
        
    }
}

(async () => {
    let arrayInput = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');
    console.log(findSum(arrayInput));
})();