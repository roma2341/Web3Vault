
<template>
    <div>
		<h4>Smart contract invoking component...</h4>
        <input type="text" v-model="contractValue">
		<button v-on:click="setContractValue(contractValue)">Set</button>
		<button v-on:click="getContractValue()">Get</button>
		<span>contractValue:{{contractValue}}</span>
    </div>
</template>

<script>

import {mapState} from 'vuex';

const  CONTRACT_ADDRESS = '0x09b1ecb0de04984c55eb213fe0249dbc3dcbaaf9';
 // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
const ABI = [
	{
	    "constant": false,
	    "inputs": [
			{
			    "name": "x",
			    "type": "uint256"
			}
	    ],
	    "name": "set",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "get",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	}
        ];

export default {
    name:'SmartContractComponent',
    data: function () {
        return {
            contractValue: 0
        }
    },
    mounted: function() {

	},
	computed:mapState({
      account: 'account'
    }),
    methods:{
        getContractValue(){
			let self = this;
            let myAbi = web3.eth.contract(ABI);
            let myfunction = myAbi.at(CONTRACT_ADDRESS);
            //call the get function of our SimpleStorage contract
            myfunction.get.call(function (err, xname) {
                if (err) { console.log(err) }
                if (xname) {
                    //display value on the webpage
                    self.contractValue = xname;
                }
            });
		},
		setContractValue(val){
			var myAbi = web3.eth.contract(ABI);
            var myfunction = myAbi.at(CONTRACT_ADDRESS);
            //call the get function of our SimpleStorage contract
            myfunction.set.sendTransaction(val, { from: this.account, gas: 4000000 }, function (error, result) {
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
