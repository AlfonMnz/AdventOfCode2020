const fs = require('fs');

function countTrees(input, xMove, yMove){
    let xIndex = 0;
    let counterTrees =0 ;
    for (let i = yMove; i < input.length; i+=yMove){
        xIndex+=xMove;
        if (xIndex > input[i].length -1) xIndex = (xIndex - (input[i].length-1))-1;   
        let char = input[i][xIndex];
        if (char == '#') counterTrees++;
    }
    return counterTrees;
}

(async() => {
    let input = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');
    let firstMove = countTrees(input, 1,1)
    let secondMove = countTrees(input, 3,1)
    let thirdMove = countTrees(input, 5,1)
    let fourthMove = countTrees(input, 7,1)
    let fifthMove = countTrees(input, 1,2)
    console.log(`firstMove: ${firstMove}\n secondMove: ${secondMove}\n thirdMove: ${thirdMove}\n fourthMove: ${fourthMove}\n fifthMove ${fifthMove}`)
    console.log(`result: ${firstMove*secondMove*thirdMove*fourthMove*fifthMove}`);
})();