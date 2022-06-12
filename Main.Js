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
            let cellNumber = gameBoardCells[i].id.slice(9);
            
            let gameBoardIndex = gameBoardCounters[rowNumber][cellNumber];
            gameBoardCells[i].innerText = gameBoardIndex;

            if(gameBoardIndex === 0 && clickCount % 2 == 0){               //ind = even
                console.log('placed cross')
            } else if (gameBoardIndex === 0 && clickCount % 2 !== 0){      //ind = odd
                console.log('placed naught')
            };

            clickCount += 1;
        });
    }; 
};

drawCounters()

// function updateGameBoard(){
//     for(let i = 0; i < 3; i++){
//         gameBoardRows[0].children[i].innerText = gameBoardCounters.r1[i]
//         gameBoardRows[1].children[i].innerText = gameBoardCounters.r2[i]
//         gameBoardRows[2].children[i].innerText = gameBoardCounters.r3[i]
//     };
// };

// updateGameBoard();

// Array.prototype.indexOf.call(parent, Node);