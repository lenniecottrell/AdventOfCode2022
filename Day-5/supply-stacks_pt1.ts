const filesys = require("fs");
const path_ = require("path");

const file_path = path_.join(__dirname, "example.txt");

filesys.readFile(file_path, { encoding: "utf-8" }, (err: any, data: string) => {
  if (!err) {
    const firstLine = data.split("\n", 1)[0].split("\r", 1);
    //represent the supply stacks somehow
    //separate the stacks from the instructions
    //parse the stacks
    //represent the instructions
    //parse the intstuctions
    //write a "parseInstructions" function
    //move [number of crates] from [column] to [column]
    //apply instructions to stacks

    /*
    WHAT KIND OF DATA STRUCTURE
    -it needs to be resizable
    -it needs to have things put on and taken off the same end
    - need to be able to index the stacks
    - in javascript I think I can use an array, but that isn't a good option for other languages because it's not resizable
    -3d array!
    */

    const getStacks = (firstRow: string) => {
      //outer array to hold the stacks
      let stacks = [];
      let stack = Math.round(firstRow.length / 4);
      //put each individual stack inside
      for (let i = 0; i < stack; i++) {
        stacks.push([]);
      }
      return stacks;
    };

    const stacks = getStacks(firstLine[0]);
    console.log(stacks);
  } else {
    console.error(err);
  }
});
