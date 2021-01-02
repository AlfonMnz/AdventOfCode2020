const fs = require('fs');

function findInBags(bags, bagToFind, arrayRepeats){
    let counter = 0;
    for (let bag of bags){
        if (bag[1].includes(bagToFind)) {
            if (!arrayRepeats.includes(bag[1])){
                arrayRepeats.push(bag[1])
                counter += findInBags(bags, bag[0], arrayRepeats)
                counter++
            }
        }
    }
    return counter;
}

(async () => {
    let input = fs.readFileSync('./input.txt', 'utf-8').split('\r\n').map(el => el.split(' bags contain '));
    console.log(findInBags(input, 'shiny gold', []));
    
})();