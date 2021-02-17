const fs = require('fs');

function findID(seat){
    let arraySeat = seat.split('');
    let rowsAvailable = [0, 127];
    let columnsAvailable = [0, 7];
    for (let info of arraySeat){
        switch (info) {
            case "F":
                rowsAvailable[1] -= Math.round((rowsAvailable[1] - rowsAvailable[0])/2);
                break;
            case "B":
                rowsAvailable[0] += Math.round((rowsAvailable[1] - rowsAvailable[0])/2);
                break;
            case "L":
                columnsAvailable[1] -= Math.round((columnsAvailable[1] - columnsAvailable[0])/2);
                break;
            case "R":
                columnsAvailable[0] += Math.round((columnsAvailable[1] - columnsAvailable[0])/2);
                break;
        }
    }
    return rowsAvailable[0]*8+columnsAvailable[0];

}


(async() => {
    let input = fs.readFileSync('./input.txt','utf-8').split('\r\n');
    let arrayIDs = [];
    for (let seat of input){
        arrayIDs.push(findID(seat));
    }
    let max = 0;
    for (let id of arrayIDs){
        if (id > max) max = id;
    }
    console.log(max)
    
})();