const fs = require('fs');
(async() => {
    let file = fs.readFileSync('../files/input.txt', 'utf-8').split("\r\n");
    let counter = 0;
    let indexActions = [];
    let currentIndex = 0;
    let counting = true;
    while (counting) {
        if (indexActions.includes(currentIndex)){
            counting = false;
        }else{
            let splitter = file[currentIndex].split(" ");
            switch (splitter[0]) {
                case "acc":
                    counter+=parseInt(splitter[1]);
                    indexActions.push(currentIndex);
                    currentIndex++;
                    break;
                case "jmp":
                    let number = parseInt(splitter[1])
                    indexActions.push(currentIndex);
                    currentIndex += number
                    break;
                case "nop":
                    indexActions.push(currentIndex);
                    currentIndex++;
                    break;
            }
        }
    }
    console.log(counter)

})()