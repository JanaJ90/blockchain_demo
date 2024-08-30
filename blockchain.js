// Import
const Block = require("./block");

class Blockchain {
    constructor(parameters) {
       this.chain = [Block.genesis()]; // Initialisiere mit Genesis-Block

    }
    addBlock(data) {
           // index = arr.length - 1
           const lastBlock = this.chain[this.chain.length - 1];
           const block = Block.mineBlock(lastBlock,data); 
           this.chain.push(block);
       }
   
}



module.exports = Blockchain; // Export als Modul
