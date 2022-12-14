const { Console } = require('console');
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'example.txt');
/**
COLUMMN A
A = Rock (1)
B = Paper (2)
C = Scissors (3)

COLUMN B
X = Rock (1)
Y = Paper (2)
Z = Scissors (3)

0 if you lose
3 if you draw
6 if you win

The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

A(1) v. Y(2) ==> win = 6, round score = 8
B(2) v. X(1) ==> lose = 0, round score = 1
C(3) v. Z(3) ==> draw = 3, round score = 6

Total score = 8 + 1 + 6 = 15

**/

fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
    if (!err) {
        
    //a function that checks the result of the game and returns the score
    const checkGame = (them, me) => {
        if (them > me) {
            return 0
        } else if (them === me) {
            return 3
        } else if (them < me) {
            return 6
        }
    }
    const convertMove = (move) => {
        if (move === "A" || move === "X") {
            return 1
        }
        if (move === "B" || move === "Y") {
            return 2
        }
        if (move === "C" || move === "Z") {
            return 3
        }
    }
        const gameScores = []
        const allData = data.split('\n'); //split the data into games (pairs)
        //console.log(allData)
        for (pair of allData) {
            const theirMove = convertMove(pair[0])
            const myMove = convertMove(pair[2])
            gameScores.push(checkGame(theirMove, myMove))
        }
        console.log(gameScores)
        
        
     } else {
            console.error(err);
        }

})
