const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const firstByte = publicKey.slice(0, 1);
    const hash = keccak256(publicKey.slice(1));
    return hash.slice(-20);
}

module.exports = getAddress;