
// Import
const Block = require("./block");
const Blockchain = require("./blockchain");


/***  Test der Block-Funktionalität  */
// const block = new Block("aktuelle zeit","hash1","hash2","Blockdaten");
// console.log(block.toString()); // Ausgabe des Blocks als String

// console.log(Block.genesis().toString()); // Ausgabe des Genesis-Blocks als String

// const testBlock = Block.mineBlock(Block.genesis(),"testDaten");
// console.log(testBlock.toString());

/***  Test der Blockchain-Funktionalität  */
const chain = new Blockchain();
console.log(chain);

chain.addBlock("1034,98€ von Sven");
console.log(chain);

chain.addBlock("2069,87��� von Thomas");
console.log(chain);

chain.addBlock("20,00€ von Saba, 75.00e an Soraya");
console.log(chain);

