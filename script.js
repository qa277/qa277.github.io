let board = []
const boardElements = document.querySelectorAll(".grid-square")
let turn = 0;

for (let i = 0; i < 9; i++) {
    board.push({sym: i, el: boardElements[i], clicked: false});
    //boardElements[i].innerHTML = i;
    boardElements[i].onclick = function() {
        if (board[i].clicked == false) {
            console.log(board[i].clicked)
            boardElements[i].style.backgroundColor = "lightblue";
            if (turn % 2 == 1) {
                boardElements[i].innerHTML = "O";
            } else {
                boardElements[i].innerHTML = "X";
            }
            board[i].clicked = true;
            turn++;
        }
    }
}
