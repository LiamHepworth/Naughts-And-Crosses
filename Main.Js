let gameBoardContainer = document.querySelector('#game-board-container');
let gameBoardRows = document.querySelectorAll('.game-board-rows');
let gameBoardCells = document.querySelectorAll('.game-tile');

let gameBoardCounters = {
   r1: [0, 0, 0],
   r2: [0, 0, 0],
   r3: [0, 0, 0]
}

let clickCount = 0;

function drawCounters(){
    for(let i = 0; i < 9; i++){
        gameBoardCells[i].addEventListener('click', function(){
            
            let rowNumber = 'r' + gameBoardCells[i].id.slice(3,4); 
            rowNumber = rowNumber.toString();

            let columnNumber = gameBoardCells[i].id.slice(9);
            
            let cellValue = gameBoardCounters[rowNumber][columnNumber];
            
            if(cellValue == 0 && clickCount % 2 == 0){               //ind = even
                gameBoardCells[i].innerText = 'X'
                clickCount ++;
                gameBoardCounters[rowNumber][columnNumber] = 2;
            } else if (cellValue == 0 && clickCount % 2 !== 0){      //ind = odd
                gameBoardCells[i].innerText = 'O'
                clickCount ++;
                gameBoardCounters[rowNumber][columnNumber] = 1;
            };
            checkRowsForWinner();
            checkColumnsForWinner(1);
        });
    }; 
};

drawCounters()

const threeCellsAreEven = (val) => val % 2 === 0 && val > 0;
const threeCellsAreOdd = (val) => val % 2 !== 0 && val > 0;
const stringToNumbers = (string) => parseInt(string);

function checkRowsForWinner() {
    for(let i = 0; i < 3; i++){
        let rowNum = `r${i + 1}`
        
        if(gameBoardCounters[rowNum].every(threeCellsAreEven)){
            console.log(`Crosses wins on row ${rowNum}`)
        } else if (gameBoardCounters[rowNum].every(threeCellsAreOdd)){
            console.log(`Naughts wins on row ${rowNum}`)
        }
    }
}

function checkColumnsForWinner(col) { 

    let arrayFromColumn = [];
    let finalColumArray = [];

    for(let k = 0; k < 3; k++){
        let rowNum = `r${k + 1}`;
        arrayFromColumn += gameBoardCounters[rowNum][col].toString(); 
    }

        arrayFromColumn = arrayFromColumn.split('');
        finalColumArray = arrayFromColumn.map(x => parseInt(x));

        

        // console.log(finalColumArray)
        // return finalColumArray;
}