function solve10(arr) {
    function hasWin(field, coordinates) {
        const [x, y] = coordinates;
        if (field[0][y] === field[1][y] &&
            field[0][y] === field[2][y] && field[0][y]
            !== false) {
                return true;
        } else if (field[x][0] === field[x][1] && field[x][0] === field[x][2] &&
            field[x][0] !== false) {
                return true;
        } else return (field[0][0] === field[1][1] && field[0][0] === field[2][2] &&
            field[0][0] !== false)
            || (field[0][2] === field[1][1]
                && field[0][2] === field[2][0] && field[0][2] !== false);
    }
    function printResult(field) {
        field.forEach((el) => {
            console.log(el.join("\t"));
        });
    }
    let gameWon = false;
    let turnsPlayed = 0;
    let currentPlayerSign = "X";
    const playField = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    for (let i = 0; i < arr.length; i++) {
        const [x, y] = arr[i].split("").map(el => parseInt(el));
        if (playField[x][y]) {
            console.log(`This place is already taken. Please choose another!`);
        } else {
            playField[x][y] = currentPlayerSign;
            turnsPlayed++;
            if (hasWin(playField, [x, y])) {
                gameWon = true;
                console.log(`Player ${currentPlayerSign} wins!`);
                printResult(playField);
                break;
            } else if (turnsPlayed == 9) {
                break;
            }
            currentPlayerSign = currentPlayerSign == "X" ? "0" : "X";
        }
    }
    if (!gameWon) {
        console.log(`The game ended! Nobody wins :("")`);
        printResult(playField);
    }
}

 

function solve(input) {
    const board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
 
    const winningConditions = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];
 
    let player = 'O';
    for (let i = 0; i < input.length; i++) {
        let [x1, y1] = input[i].split(' ');
        x1 = Number(x1);
        y1 = Number(y1);
 
        if (board[x1][y1] == false) {
            if (player === 'X') {
                player = 'O';
            } else {
                player = 'X';
            }
            board[x1][y1] = player;
        } else {
            console.log('This place is already taken. Please choose another!');
        }
 
        let winner = checkForWin();
        if (winner != false) {
            console.log(`Player ${winner} wins!`);
            break;
        }
 
        let hasFinished = true;
        for (let j = 0; j < 3; j++) {
            let lineFinished = true;
            for (let k = 0; k < 3; k++) {
                if (board[j][k] == false) {
                    lineFinished = false;
                    break;
                }
            }
            if (lineFinished == false) {
                hasFinished = false;
                break;
            }
        }
 
        if (hasFinished) {
            console.log("The game ended! Nobody wins :(");
            break;
        }
 
 
    }
 
    for (let i = 0; i < board.length; i++) {
        console.log(board[i].join('\t'));
    }
 
    function checkForWin() {
        for (win of winningConditions) {
            if (board[win[0][0]][win[0][1]] != false &&
                board[win[0][0]][win[0][1]] === board[win[1][0]][win[1][1]] &&
                board[win[0][0]][win[0][1]] === board[win[2][0]][win[2][1]]) {
                return board[win[0][0]][win[0][1]];
            }
        }
 
        return false;
    }
 
 
}