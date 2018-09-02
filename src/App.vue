<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
import Web3 from 'web3'
import { mapGetters } from 'vuex'
import store from './store/store';

export default {
  store: store,
  name: 'app',
    data () {
      return {
        accountInterval: null
      }
    },
    computed: {
      ...mapGetters([])
    },
    mounted () {
      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 === 'undefined') {
        alert('Please, install MetaMask');
        return
      }
      if (web3) {
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider)
        let isMetaMask = web3.currentProvider.isMetaMask === true;
        if(!isMetaMask){
          alert('Please, install MetaMask');
        }
        // keep account updated if user decides to switch
        this.$store.dispatch('setAccount', web3.eth.accounts[0])
        console.log('the account is :' + web3.eth.accounts[0])
        this.accountInterval = setInterval(() => {
          const account = web3.eth.accounts[0]
          if (account !== this.account) {
            this.$store.dispatch('setAccount', account)
          }
        }, 1000)
      }
    },
    beforeDestroy () {
      clearInterval(this.accountInterval)
    }
}
</script>


<style>
</style>
