import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && window.web3 !== 'undefined') {
    //We are in the browser AND metamask is running
    async () => {await window.web3.currentProvider.enable();}
    web3 = new Web3(window.web3.currentProvider);
} else {
    //We are on the server OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://eth-goerli.g.alchemy.com/v2/oMNP4Ko8eer6-maz7HPMPhYI7tb5Sdqm'
    );
    web3 = new Web3(provider);
}

export default web3;