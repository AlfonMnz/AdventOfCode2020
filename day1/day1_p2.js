const fs = require('fs');
function findSum(arrayInput){
    let previusSums = {};
    for (let firstNumb of arrayInput){
        previusSums.firstNumb = {};
        for (let secondNumb of arrayInput){
            previusSums.firstNumb.secondNumb = [];
            for (let thirdNumb of arrayInput){
                if (previusSums.firstNumb.hasOwnProperty(secondNumb) && previusSums.firstNumb.firstNumb.secondNumb.includes(thirdNumb)) continue;
                if (parseInt(firstNumb)+parseInt(secondNumb)+parseInt(thirdNumb) != 2020){
                    previusSums.firstNumb.secondNumb.push(thirdNumb);
                    continue;
                }
                return parseInt(firstNumb)*parseInt(secondNumb)*parseInt(thirdNumb);
            }
        }
    }
}

(async() => {
    let arrayInput = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');
    console.log(findSum(arrayInput));
})();