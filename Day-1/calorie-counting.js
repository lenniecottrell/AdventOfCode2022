const { Console } = require('console');
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'example.txt');

fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
    if (!err) {
        const allData = data.split('\n');
        let sum = 0
        let maxValue = 0;
        for (let i = 0; i < allData.length; i++) {
            if (allData[i] === "") {
                console.log("Elf Total: " + sum);
                console.log("Max Calories: " + maxValue)
                sum = 0;
            } else {
                let num = parseInt(allData[i])
                sum += num
                if (sum > maxValue) {
                    maxValue = sum
                }
                console.log(num)
            }
        }
        console.log("Elf Total: " + sum)
        if (sum > maxValue) {
            maxValue = sum
        }
        console.log(`The Elf with the most calories has ${maxValue} calories`)
     } else {
            console.error(err);
        }

})
