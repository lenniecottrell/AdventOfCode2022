const { Console } = require('console');
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
    if (!err) {
        const allData = data.split('\n');
        let sum = 0
        let maxValue = 0;
        let allSnacks = []
        for (let i = 0; i < allData.length; i++) {
            if (allData[i] === "") {
                allSnacks.push(sum);
                sum = 0;
            } else {
                let num = parseInt(allData[i])
                sum += num
                if (sum > maxValue) {
                    maxValue = sum
                }
            }
        }
        console.log("Elf Total: " + sum)
        if (sum > maxValue) {
            maxValue = sum
        }
        const topSnacks = allSnacks.sort((a,b) => a-b).splice(-3)
        const totalTop3 = topSnacks.reduce((sum, next) => sum += next)
        console.log(`The Elf with the most calories has ${maxValue} calories`)
        console.log(`The top 3 snack carriers are carrying ${totalTop3} total calories combined`)
     } else {
            console.error(err);
        }

})
