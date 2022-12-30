const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");

fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
  if (!err) {
    const allData = data.split("\n");
    const badges = [];
    const groups = [];

    const sliceGroups = (allElves) => {
      for (let i = 0; i < allElves.length; i += 3) {
        const group = allElves.slice(i, i + 3);
        groups.push(group);
      }
      return groups;
    };
    //test makeGroups
    //console.log(makeGroups(allData));
    //console.log(sliceGroups(allData));

    const getIntersection = (group) => {
      const firstArray = group[0].split("");
      const secondArray = group[1].split("");
      const thirdArray = group[2].split("");
      const inter = firstArray.filter(
        (item) => secondArray.includes(item) && thirdArray.includes(item)
      );
      //only need the first match
      return inter[0];
    };
    //test getIntersection
    //console.log(getIntersection(["aabaz", "fjzrog", "zsjwlb"]));

    const getItemValue = (item) => {
      if (item === item.toUpperCase()) {
        return item.charCodeAt(0) - 38;
      }
      if (item === item.toLowerCase()) {
        return item.charCodeAt(0) - 96;
      }
    };

    for (group of sliceGroups(allData)) {
      const badge = getIntersection(group);
      badges.push(badge);
    }

    //console.log(badges);
    const badgeValues = badges.map((badge) => getItemValue(badge));
    //console.log(badgeValues);

    //result
    console.log(badgeValues.reduce((sum, next) => (sum += next)));
  } else {
    console.error(err);
  }
});
