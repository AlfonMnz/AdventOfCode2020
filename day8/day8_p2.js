const SUCCESS = "SUCCESS";
const ERROR = "ERROR";
const fs = require('fs')
// Runs the program, and return SUCCESS or ERROR
// Depending on whether or not it finished (line number > code.length)
function runProgram(code) {
    // If a line is processed 2 times, it's an error
    const alreadyProcessed = [];
    let global = 0;
    let currentLine = 0;

    while (true) {
        if (alreadyProcessed[currentLine] === true) return { global, status: ERROR, alreadyProcessed };
        if (code[currentLine] === undefined)
            return { global, status: SUCCESS, alreadyProcessed };
        alreadyProcessed[currentLine] = true;
        const [inst, argument] = code[currentLine];
        switch (inst) {
            case "acc":
                global += parseInt(argument, 10);
                currentLine += 1;
                break;
            case "jmp":
                currentLine += parseInt(argument, 10);
                break;
            case "nop":
                currentLine += 1;
                break;
            default:
                throw new Error(inst);
        }
    }
}
let input = fs.readFileSync('./input.txt', 'utf-8').split("\r\n").map(el => el.split(' '));
input.forEach((_value, index) => {
    const code = [...input];
    const [inst, argument] = code[index];
    if (inst === "jmp") code[index] = ["nop", argument];
    else if (inst === "nop") code[index] = ["jmp", argument];
    const altResult = runProgram(code);
    if (altResult.status === "SUCCESS") console.log(altResult);
});


/*function countAcc(input){
    let counter = 0;
    let indexActions = new Set();
    let counting = true;
    let currentIndex = 0;
    while (counting){
        if (currentIndex > input.length -1) return {res:true, counter: counter, indexActions: indexActions};
        let splitter = input[currentIndex];
        if (indexActions.has(currentIndex)){
            counting = false;
            return {res:false, counter: counter, indexActions: indexActions};
        }
        switch (splitter[0]) {
            case "acc":
                counter+=parseInt(splitter[1]);
                indexActions.add(currentIndex);
                //beforeIndex = currentIndex;
                currentIndex++;
                break;
            case "jmp":
                indexActions.add(currentIndex);
                //beforeIndex = currentIndex;
                currentIndex+=parseInt(splitter[1])
                break;
            case "nop":
                indexActions.add(currentIndex)
                //beforeIndex = currentIndex;
                currentIndex++
                break;
        }

    }
}

(async () => {
    let input = fs.readFileSync('./input.txt', 'utf-8').split("\r\n").map(el => el.split(' '));
    input.forEach((value, index) => {
        if (value[0] == 'jmp') input[index] = ['nop', value[1]]
        else if (value[0] == 'nop') input[index] = ['jmp', value[1]];
        let result = countAcc(input)
        if (result.res) console.log(result)
    });
})();*/