let gameBoardContainer = document.querySelector('#game-board-container');
let gameBoardRows = document.querySelectorAll('.game-board-rows');
let gameBoardCells = document.querySelectorAll('.game-tile');

const playerOne = document.querySelector('#player-one');
const playerTwo = document.querySelector('#player-two');
let winnerPopUpBox = document.querySelector('#winner-pop-up');

let gameBoardCounters = {
   r1: [0, 0, 0],
   r2: [0, 0, 0],
   r3: [0, 0, 0]
}

let clickCount = 0;

function gameDisplay(){
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
            checkAllCellsForWinner()
        });
    }; 
};

gameDisplay()

const threeCellsAreEven = (val) => val % 2 === 0 && val > 0;
const threeCellsAreOdd = (val) => val % 2 !== 0 && val > 0;
const stringToNumbers = (string) => parseInt(string);

function checkForWinner(arr){
    if(arr.every(threeCellsAreEven)){
        console.log('crosses wins')
        return
    } else if (arr.every(threeCellsAreOdd)){
        console.log('naughts wins')
        return
    } else {
        return
    }
}

function createArrayFromCells(stringArrName, parsedArrName){
    stringArrName = stringArrName.split('');
    parsedArrName = stringArrName.map(x => parseInt(x));
    return parsedArrName;
};

function checkRows() {
    for(let i = 0; i < 3; i++){
        let rowNum = `r${i + 1}`
        
        checkForWinner(gameBoardCounters[rowNum]);
    }
}

function checkColumns(col) { 
    let arrayFromColumn = [];
    let finalColumArray = [];

    for(let k = 0; k < 3; k++){
        let rowNum = `r${k + 1}`;
        arrayFromColumn += gameBoardCounters[rowNum][col].toString(); 
    }
        checkForWinner(createArrayFromCells(arrayFromColumn, finalColumArray));
};

function checkDiagonalsTopLeft(){

    let diagonalTopLeft = [];
    let finalDiagonalTopLeft = [];

    for(let d = 0; d < 3; d++){
        let rowNum = `r${d + 1}`;
        let colNum = d

        diagonalTopLeft += gameBoardCounters[rowNum][colNum]
    }
    checkForWinner(createArrayFromCells(diagonalTopLeft, finalDiagonalTopLeft));
} 

function checkDiagonalsTopRight(){
    
    let allCells = [];
    let finalCells = [];
    let diagonalCells = [];
    
    for(let i = 0; i < 3; i ++){
        let rowNum = `r${i + 1}`;
        allCells += gameBoardCounters[rowNum]               //creates array from all cells
    };
    
    let filteredCells = allCells.split('').filter(word => word !== ',');     //removes dud values
    finalCells = filteredCells.map(x => parseInt(x))                         //parses each entry in the array
    
    diagonalCells = [finalCells[2], finalCells[4], finalCells[6]]
    checkForWinner(diagonalCells)
};

function checkAllCellsForWinner(){    
    checkRows();
    for(let i = 0; i < 3; i++){
        checkColumns(i);
    }
    checkDiagonalsTopLeft();
    checkDiagonalsTopRight();
}



