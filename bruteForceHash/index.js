const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    for (color in COLORS) {
        colorBytes = utf8ToBytes(COLORS[color])
        colorHash = sha256(colorBytes)
        if (toHex(colorHash) === toHex(hash)) {
            return COLORS[color]
        }
    }  
}

module.exports = findColor;