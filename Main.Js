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
            } else if (cellValue == 0 && clickCount % 2 !== 0){      //ind = odd
                gameBoardCells[i].innerText = 'O'
                clickCount ++;
            };
            gameBoardCounters[rowNumber][columnNumber] += 1;
            checkRowsAreEven()
        });
    }; 
};

drawCounters()

const rowIsEven = (val) => val % 2 === 0 && val > 0;
// const rowIsOdd = (val) => val % 2 !== 0 && val > 0;

function checkRowsAreEven() {
    for(let i = 0; i < 3; i++){
        let rowNum = `r${i + 1}`
        
        if(gameBoardCounters[rowNum].every(rowIsEven)){
            console.log(`Evens wins on row ${rowNum}`)
        } else if (gameBoardCounters[rowNum].every(rowIsOdd)){
            console.log(`Odds wins on row ${rowNum}`)
        }
    }
}


// checkRowsAreEven();