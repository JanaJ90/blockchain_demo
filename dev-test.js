
// Import
const Block = require("./block");

/***  Test der Block-Funktionalität  */
// const block = new Block("aktuelle zeit","hash1","hash2","Blockdaten");
// console.log(block.toString()); // Ausgabe des Blocks als String

// console.log(Block.genesis().toString()); // Ausgabe des Genesis-Blocks als String

const testBlock = Block.mineBlock(Block.genesis(),"testDaten");
console.log(testBlock.toString());


