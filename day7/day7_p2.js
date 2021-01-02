const fs = require('fs');
let input;
const tree = fs.readFileSync('./input.txt', 'utf-8').split('\r\n').reduce((tree, line) => {
    const color = /(^.*) bags contain/.exec(line)[1];
    tree[color] = [];
  
    const matches = line.matchAll(/,? (\d+) ([^,.]*) bags?/g);
    for (const match of matches) {
      for (let i = 0; i < parseInt(match[1]); i++) {
        tree[color].push(match[2]);
      }
    }
    return tree;
  }, {});
  
  const depth = (color) => {
    if (tree[color] === []) return 1;
    return tree[color].reduce((acc, color) => acc + depth(color), 1);
  };

/*function countInBag(input, bagToCount){
    let contentOfBag = bagToCount[1].replace(' bags.', ' bags, ').replace(' bag.', ' bags, ').replace(' bag, ',' bags, ').split(' bags, ').filter(el => el != '');
    let count = 0;
    for (let content of contentOfBag){
        if (content  == 'no other') continue;
        let newBag = returnBag(input, content.slice(2));
        count += parseInt(content[0]);
        let returnNewBag = countInBag(input, newBag);
        count+= parseInt(content[0])*returnNewBag;
    }
    return count == 0 ? 1 : count;
}

function returnBag(input,bagToReturn) {
    return input.filter(el => el[0] == bagToReturn)[0];
}*/

(async () => {
    console.log(depth('shiny gold')-1)
    //console.log(findInBags(input, 'shiny gold'));
    //console.log(countInBag(input, returnBag(input, 'shiny gold'), []));
    //console.log(returnBag(input, 'shiny gold'));
})();