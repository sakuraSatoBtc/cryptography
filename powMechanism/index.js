const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    const block = {id: blocks.length };
    block.transactions = [];
    let shift;
    for (let i = 0; i < MAX_TRANSACTIONS; i++) {
            shift = mempool.shift();
            block.transactions.push(shift);
            if (mempool.length == 0) {
                break;
            }
        
    }
    block.nonce = 0;
    while (true) {
        const hashedBlock = SHA256(JSON.stringify(block));
        const int = BigInt(`0x${hashedBlock}`)
        block.hash = hashedBlock;
        block.nonce ++;
        if (int < TARGET_DIFFICULTY) {  
            break;
        }
    }
    blocks.push(block);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};