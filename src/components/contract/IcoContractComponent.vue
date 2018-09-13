<template>
    <div>
        <h4>ICO Contact component:</h4>
        <span>result:{{resultValue}}</span>
        <button v-on:click="getWinningProposal()">Get winning proposal</button>
        <input type="text" v-model="contractValue">
        <button v-on:click="setDelegate()">delegate</button>
        <button v-on:click="setGiveRightToVote()">giveRightToVote</button>
        <button v-on:click="setVote()">vote</button>
    </div>
</template>

<script>
import {mapState} from 'vuex';

const  CONTRACT_ADDRESS = '0xecc04e09a36fc5cd4bb4684a99ed3be420079974';
const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			}
		],
		"name": "delegate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "winningProposal",
		"outputs": [
			{
				"name": "_winningProposal",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "toVoter",
				"type": "address"
			}
		],
		"name": "giveRightToVote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "toProposal",
				"type": "uint8"
			}
		],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_numProposals",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

export default {
    name:'IcoContractComponent',
    data: function () {
        return {
            resultValue: 0,
            contractValue: ''
        }
    },
    computed:mapState({
      account: 'account'
    }),
    methods: {
          getWinningProposal(){
			let self = this;
            let myAbi = web3.eth.contract(ABI);
            let myfunction = myAbi.at(CONTRACT_ADDRESS);
            //call the get function of our SimpleStorage contract
            myfunction.winningProposal.call(function (err, xname) {
                if (err) { console.log(err) }
                if (xname) {
                    //display value on the webpage
                    self.resultValue = xname;
                }
            });
        },
        setDelegate(){
            let val = this.contractValue;
            let self = this;
            var myAbi = web3.eth.contract(ABI);
            var myfunction = myAbi.at(CONTRACT_ADDRESS);
            //call the get function of our SimpleStorage contract
            myfunction.delegate.sendTransaction(val, { from: this.account, gas: 4000000 }, function (error, result) {
            if (!error) {
                console.log(result);
            } else {
                console.log(error);
            }
			});
        },
        setGiveRightToVote(){
            let val = this.contractValue;
            let self = this;
            var myAbi = web3.eth.contract(ABI);
            var myfunction = myAbi.at(CONTRACT_ADDRESS);
            //call the get function of our SimpleStorage contract
            myfunction.giveRightToVote.sendTransaction(val, { from: this.account, gas: 4000000 }, function (error, result) {
            if (!error) {
                console.log(result);
            } else {
                console.log(error);
            }
			});
        },
        setVote(){
            let val = this.contractValue;
            let self = this;
            var myAbi = web3.eth.contract(ABI);
            var myfunction = myAbi.at(CONTRACT_ADDRESS);
            //call the get function of our SimpleStorage contract
            myfunction.vote.sendTransaction(val, { from: this.account, gas: 4000000 }, function (error, result) {
            if (!error) {
                console.log(result);
            } else {
                console.log(error);
            }
			});
        }
    }
}
</script>
