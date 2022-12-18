const { Console } = require('console');
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
    if (!err) {
    const checkGame = (them, me) => {
        if (them === "A"){
            switch(me) {
                case "X":
                return 3
                break;
            case "Y":
                return 4;
                break;
            case "Z":
                return 8;
                break;
            }
        } else if (them === "B") {
            switch(me) {
                case "X":
                return 1
                break;
            case "Y":
                return 5;
                break;
            case "Z":
                return 9;
                break;
            }
        } else if (them === "C") {
            switch(me) {
                case "X":
                return 2
                break;
            case "Y":
                return 6;
                break;
            case "Z":
                return 7;
                break;
            }
        }
    }
        const gameScores = []
        const allData = data.split('\n'); //split the data into games (pairs)
        for (pair of allData) {
            gameScores.push(checkGame(pair[0], pair[2]))
        }
        const totalScore = gameScores.reduce(
            (sum, next) => sum += next
            )
        console.log(`The total score after all games is ${totalScore}`)
     } else {
            console.error(err);
        }

})
