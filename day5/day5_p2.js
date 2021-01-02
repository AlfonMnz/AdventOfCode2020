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
    //return {row: rowsAvailable[0], column: columnsAvailable[0]}
    return {row: rowsAvailable[0], column:columnsAvailable[0], id: rowsAvailable[0]*8+columnsAvailable[0]};

}

function calculateID (row, column){
    return row*8+column
}

(async() => {
    let input = fs.readFileSync('./input.txt','utf-8').split('\r\n');
    let arrayIDs = [];
    let arrayRows = {};
    for (let seat of input){
        let result = findID(seat)
        arrayIDs.push(result.id);
        if (!arrayRows.hasOwnProperty(result.row)) arrayRows[result.row] = [];
        arrayRows[result.row].push(result.column);
    }
    for (let row of Object.keys(arrayRows)){
        if (arrayRows[row].length == 8) continue;
        let columnsAvailable = [0,1,2,3,4,5,6,7];
        for (let i = 0; i< arrayRows[row].length; i++){
            if (columnsAvailable.indexOf(arrayRows[row][i]) != -1){
                columnsAvailable.splice(columnsAvailable.indexOf(arrayRows[row][i]), 1);
            }
        }
        if (columnsAvailable.length == 8) continue;
        for (let i = 0; i < columnsAvailable; i++){
            let id = calculateID(parseInt(row), columnsAvailable[i]);
            if (arrayIDs.includes(id+1) && arrayIDs.includes(id-1)){
                console.log(`COLUMN: ${columnsAvailable[i]}, ROW: ${parseInt(row)}, ID: ${id}`);
            }

        }
    }

    
})();