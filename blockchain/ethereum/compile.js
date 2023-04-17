const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
console.log('Deleting build folder...');
fs.removeSync(buildPath);

console.log('Getting contract by path...')
const campaignPath = path.resolve(__dirname,'contracts', 'Record.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

console.log('Compiling contract...');
const input = {
    language: 'Solidity',
    sources: {
        'Record.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};
const output = JSON.parse(solc.compile(JSON.stringify(input)));

fs.ensureDirSync(buildPath); //recreate build folder

for (let contractFileName in output.contracts['Record.sol']) {
    const contractName = contractFileName.replace('.sol', '');
    fs.outputJsonSync(
        path.resolve(buildPath, contractName + '.json'),
        output.contracts['Record.sol'][contractFileName]
    );
}
