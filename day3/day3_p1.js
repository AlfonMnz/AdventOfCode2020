const fs = require('fs');

function countTrees(input){
    let xIndex = 0;
    let yIndex = 0;
    let counterTrees =0 ;
    for (let i = 0; i < input.length-1; i++){
        xIndex+=3;
        yIndex+=1;
        if (xIndex > input[yIndex].length -1){
            console.log(`before xIndex ${xIndex}  yIndex ${yIndex}`);
            xIndex = (xIndex - (input[yIndex].length-1))-1;  
            console.log(`after xIndex ${xIndex}  yIndex ${yIndex}`);
        } 
        let char = input[yIndex][xIndex];
        if (char == '#') counterTrees++;
    }
    return counterTrees;
}

(async() => {
    let input = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');
    console.log(countTrees(input));
})();