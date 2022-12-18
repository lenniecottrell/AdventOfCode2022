const { Console } = require('console');
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'input.txt');
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
    //TODO Fix this, it's not just greater than or less than
    const checkGame = (them, me) => {
        if (them === "A"){
            switch(me) {
                case "X":
                return 3
                break;
            case "Y":
                return 6;
                break;
            case "Z":
                return 0;
                break;
            }
        } else if (them === "B") {
            switch(me) {
                case "X":
                return 0
                break;
            case "Y":
                return 3;
                break;
            case "Z":
                return 6;
                break;
            }
        } else if (them === "C") {
            switch(me) {
                case "X":
                return 6
                break;
            case "Y":
                return 0;
                break;
            case "Z":
                return 3;
                break;
            }
        }
    }
    
    const convertMove = (move) => {
        if (move === "X") {
            return 1
        }
        if (move === "Y") {
            return 2
        }
        if (move === "Z") {
            return 3
        }
    }
        const gameScores = []
        const myMovePoints = []
        const totalPoints = []
        const allData = data.split('\n'); //split the data into games (pairs)
        //console.log(allData)
        for (pair of allData) {
            //const theirMove = convertMove(pair[0])
            const myMove = convertMove(pair[2])
            myMovePoints.push(myMove)
            gameScores.push(checkGame(pair[0], pair[2]))
        }
        //console.log(myMovePoints)
        //console.log(gameScores)
        for (let i = 0; i < gameScores.length; i++) {
            totalPoints.push(myMovePoints[i] + gameScores[i])
        }
        //console.log(totalPoints)
        const totalScore = totalPoints.reduce((sum, next) => sum += next)
        console.log(`The total score after all games is ${totalScore}`)
     } else {
            console.error(err);
        }

})
