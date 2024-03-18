const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const publicKey = hashMessage(message);
    return secp.recoverPublicKey(publicKey, signature, recoveryBit);
}

module.exports = recoverKey;