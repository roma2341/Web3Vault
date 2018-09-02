<template>
   <div>
       Current balance:{{normalizedBalance}}
    <button v-on:click="updateBalance">Update balance</button>
   </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name:'EthereumBalance',
    mounted: function(){
        console.log('ethereum balance component mounted');
    },
    computed: 
        {
        normalizedBalance: function(){
            return web3.fromWei(this.balance, "ether") + 'ETH';
        },
        ...mapState({
        account:'account'
        })
        }
    ,
    data: function () {
        return {
            balance: 0
        }
    },
    methods:{
        updateBalance: function() {
            let self = this;
         web3.eth.getBalance(this.account, function (error, balance) {
            if (!error) {
              self.balance = balance;
            } else {
              console.error(error);
            }
          })
        }
    }
}
</script>

