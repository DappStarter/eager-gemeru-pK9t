require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stool razor remain purity inside light army gaze'; 
let testAccounts = [
"0xbde5e0c2f03bbec72b252df004f5f594a8a2ee5fdb8bc90e08821b12a363d217",
"0xebd2cb036a3903a2bde5c816a66dc197248072a26fa7d2994baafbb2033d5009",
"0x1d3fd76717558e8d8d90003b8575affdb1167f706fed9b881b73ced7c72ddced",
"0xaff69ecd5a37d92156adb066d758d6c34b4c16902536a5f649e93caae78eaf70",
"0x1da6d7eb926e104ace7a840107cdecc8b126b928d731b46121cfc612f73e228c",
"0x685de43bb4af88fd4541b64a12f189a01c6f7aba239b4de589fbfd9c07f71234",
"0x58e17ba81f170f1401507aee54cf8d11be57706161afc54940beaafc99e763e7",
"0xe39230aadf264f07329f2a63aaa7e39d28f42bb505ae46240a7f280e44b13828",
"0x51d728dc3c31a82efaa7316747754ef02efd75014da9fe2742ab55ecd27f07df",
"0x3086b57b45c54d00c2dae019137ab0aa73e7acc62d981522ea775a8a852f98c9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


