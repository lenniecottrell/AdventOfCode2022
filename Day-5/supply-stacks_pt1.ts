import { RecordWithTtl } from "dns";

const filesys = require("fs");
const path_ = require("path");

const file_path = path_.join(__dirname, "example.txt");

filesys.readFile(file_path, { encoding: "utf-8" }, (err: any, data: string) => {
  if (!err) {
    //represent the supply stacks
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
    const firstLine: string[] = data.split("\n", 1)[0].split("\r", 1);
    //this is just the containers, excluding column numbers;
    const containers: string[] = data
      .split("\n", 3)
      .map((row) => row.split("\r", 1)[0].concat(" "));

    //this is all the instructions
    const instructions: string[] = data
      .split("\n")
      .map((row) => row.split("\r", 1)[0])
      .filter((row) => row.includes("move"));
    //console.log(instructions);

    //create a 3d array representing the stacks
    //using the first line to figure out how many columns there are
    const getStacks = (firstRow: string) => {
      //outer array to hold the stacks
      let stacks: string[][] = [];
      let stack = Math.round(firstRow.length / 4);
      //put each individual stack inside
      for (let i = 0; i < stack; i++) {
        stacks.push([]);
      }
      return stacks;
    };

    //returns a 3d array with the right number of columns(stacks)
    let stacks = getStacks(firstLine[0]);

    //fill each inner array with the boxes
    //example row: '[Z] [M] [P] '
    const parseRow = (row: string, stack: string[][]) => {
      let counter = 0;
      for (let i = 0; i < row.length; i += 4) {
        stack[counter].unshift(row.slice(i, i + 4));
        counter++;
      }
      return stack;
    };
    for (let i = 0; i < containers.length; i++) {
      parseRow(containers[i], stacks);
    }
    //console.log(stacks);

    const parseInstruction = (row: string) => {
      const split = row.split(" ");
      const nums: number[] = split.map((item) => parseInt(item));
      const vals: number[] = [];
      for (let i = 1; i < nums.length; i += 2) {
        vals.push(nums[i]);
      }
      return vals;
    };

    let example = "move 2 from 2 to 1";
    //console.log(parseInstruction(example));

    const parseInstructions = (rows: string[]) => {
      const InstructionNums: number[][] = [];
      for (let i = 0; i < rows.length; i++) {
        InstructionNums.push(parseInstruction(rows[i]));
      }
      return InstructionNums;
    };

    console.log(parseInstructions(instructions));
  } else {
    console.error(err);
  }
});
