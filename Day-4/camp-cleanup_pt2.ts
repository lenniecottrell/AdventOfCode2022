const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");

class SectionRange {
    lower: number;
    upper: number;
    
    constructor(lower, upper) {
        this.lower = lower;
        this.upper = upper;
    }
}

fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (!err) {
        const allData = data.split("\n");
        
        const ParseRanges = (range: string) => {
            let singleRange = range.split(",")
            let firstRangeSplit = singleRange[0].split("-")
            let secondRangeSplit = singleRange[1].split("-")          
            const rangePair: SectionRange[] = []
            const firstRange =  new SectionRange(Number(firstRangeSplit[0]), Number(firstRangeSplit[1]))
            const secondRange = new SectionRange(Number(secondRangeSplit[0]), Number(secondRangeSplit[1]))
            rangePair.push(firstRange, secondRange)
            //console.log(`First range: ${rangePair[0].lower}-${rangePair[0].upper}. Second range: ${rangePair[1].lower}-${rangePair[1].upper}`)
            return rangePair
        }
        
        const Contains = (range1: SectionRange, range2: SectionRange) => {
            return range1.lower <= range2.lower && range1.upper >= range2.upper || range1.lower >= range2.lower && range1.upper <= range2.upper
        }
        
        const Overlaps = (range1: SectionRange, range2: SectionRange) => {
            if (Contains(range1, range2)) {
                return true
            }
            if (range1.lower < range2.lower && range2.lower < range1.upper && range1.upper < range2.upper) {
                return true
            }
            if (range2.lower < range1.lower && range1.lower < range2.upper && range2.upper < range1.upper) {
                return true
            }
            if (range1.lower < range2.lower && range1.upper === range2.lower) {
                return true
            }
            if (range2.lower < range1.lower && range2.upper === range1.lower) {
                return true
            }
        }
       
        let counter: number = 0;                
        for (let i=0; i<allData.length; i++) {
            if (Overlaps(ParseRanges(allData[i])[0], ParseRanges(allData[i])[1])) {
                counter++
            }
        }
        console.log(counter)
    } else {
        console.error(err);
        //it's not 
      }
    
})