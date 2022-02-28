let board = []
const boardElements = document.querySelectorAll(".grid-square")
let turn = 0;

for (let i = 0; i < 9; i++) {
    board.push({sym: i, el: boardElements[i]});
    boardElements[i].innerHTML = i;
    boardElements[i].onclick = function() {
        if (board[i] != i) {
            if (turn % 2 == 1) {
                boardElements[i].innerHTML = "O";
            } else {
                boardElements[i].innerHTML = "X";
            }
            turn++;
        }
    }
}



