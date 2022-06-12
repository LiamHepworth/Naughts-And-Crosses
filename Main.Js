let gameBoardContainer = document.querySelector('#game-board-container');
let gameBoardRows = document.querySelectorAll('.game-board-rows');
let gameBoardCells = document.querySelectorAll('.game-tile');

let gameBoardCounters = {
   r1: [0, 1, 2],
   r2: [3, 4, 5],
   r3: [6, 7, 8]
}

function changeGameBoardState(){
    for(let i = 0; i < 9; i++){
        gameBoardCells[i].addEventListener('mousedown', function(){
            function getCell(){
                let rowNumber = gameBoardCells[i].id.slice(3,4)
                console.log(`row number: ${rowNumber}`);
                
                let cellNumber = gameBoardCells[i].id.slice(9)
                console.log(`cell number: ${cellNumber}`);

                // gameBoardCells[i].innerText = gameBoardCounters.r+rowNumber[cellNumber];
            }
            getCell()
        })
    } 
}

changeGameBoardState()


function updateGameBoard(){
    for(let i = 0; i < 3; i++){
        gameBoardRows[0].children[i].innerText = gameBoardCounters.r1[i]
        gameBoardRows[1].children[i].innerText = gameBoardCounters.r2[i]
        gameBoardRows[2].children[i].innerText = gameBoardCounters.r3[i]
    };
};

updateGameBoard();

// Array.prototype.indexOf.call(parent, Node);