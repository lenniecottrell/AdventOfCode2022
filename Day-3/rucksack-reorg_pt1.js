const { Console } = require("console");
const fs = require("fs");
const { get } = require("http");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");

fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
  if (!err) {
    const pairs = [];
    const allData = data.split("\n");

    const getFirstHalf = (rucksack) => {
      const firsthalf = rucksack.substring(0, rucksack.length / 2);
      return firsthalf;
    };
    const getSecondHalf = (rucksack) => {
      const secondhalf = rucksack.substring(rucksack.length / 2);
      return secondhalf;
    };
    //test rucksack split
    const input1 = "abcdefgh";
    const input2 = "DEADBEEF";
    const input3 = "ONETWO";
    console.log("Test getFirstHalf and getSecondHalf");
    console.log(
      `\tabcdefgh => ${getFirstHalf(input1)} | ${getSecondHalf(input1)}`
    );
    console.log(
      `\tDEADBEEF => ${getFirstHalf(input2)} | ${getSecondHalf(input2)}`
    );
    console.log(
      `\tONETWO => ${getFirstHalf(input3)} | ${getSecondHalf(input3)}`
    );

    const getIntersection = (first, second) => {
      const firstArray = first.split("");
      const secondArray = second.split("");
      const inter = firstArray.filter((item) => secondArray.includes(item));
      //only need the first match
      return inter[0];
    };

    console.log("Test getIntersection");
    console.log(
      `\t${allData[0]} (p) => ${getIntersection(
        getFirstHalf(allData[0]),
        getSecondHalf(allData[0])
      )}`
    );
    console.log(
      `\t${allData[1]} (L) => ${getIntersection(
        getFirstHalf(allData[1]),
        getSecondHalf(allData[1])
      )}`
    );

    const getItemValue = (item) => {
      if (item === item.toUpperCase()) {
        return item.charCodeAt(0) - 38;
      }
      if (item === item.toLowerCase()) {
        return item.charCodeAt(0) - 96;
      }
    };
    console.log("Test getItemValue");
    console.log(`\t't' (20) => ${getItemValue("t")}`); //20
    console.log(`\t'P' (42) => ${getItemValue("P")}`); //42
    console.log(`\t'p' (16) => ${getItemValue("p")}`); //42

    for (rucksack of allData) {
      const item = getIntersection(
        getFirstHalf(rucksack),
        getSecondHalf(rucksack)
      );
      pairs.push(item);
    }
    //console.log(pairs);
    const values = pairs.map((item) => getItemValue(item));
    console.log(values.reduce((sum, next) => (sum += next)));
  } else {
    console.error(err);
  }
});
