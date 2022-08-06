require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note pulse color harvest inhale equal ghost'; 
let testAccounts = [
"0x8aaca6f6d2ca071f8096123df0d7f6685be2bc776407fe96fc6ba75198a170e9",
"0x43ac2ef86129440a5daf9b76d0f2cc1309c4f37bf92964ef8ea9e736101224eb",
"0x540779a6d3c69805e61af6de678244f1086981b44d4e07adbd760df4554501d6",
"0x8ef1bfdedae48454acd882cb9ac9d09dfb2abf6ceed602b4adbc1497c7a2f6a7",
"0x1c0842874f93cbea2b662c7eaa7a16d5560e90cb67e5c0a0ea3ca43533b392aa",
"0x67409b389075cbe4d873e1c311662497e599108018d3618eb9ab0d75cbc3edd5",
"0xb92cc299fb524bbd26f69d3d1346999e40f324505e66dc108deb201e233f3ccc",
"0x2af949f43a3f685c679d00a4660d6d5a0668b54fcb8639273c9819affdd091fa",
"0xd4f4f33d5a4f1d52112f28772760c4826e9ea86a50efc715c7d637ea89fb308d",
"0xe793cb66e02a953bb477dc788a42e91e3ea24147fb23722d41cb8d15bd0919f0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

