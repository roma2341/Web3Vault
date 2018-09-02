<template>
  <div>
    <p>account:{{account}}</p>
    <EthereumBalance></EthereumBalance>
    <SmartContractComponent></SmartContractComponent>
    <TransactionComponent></TransactionComponent>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  import EthereumBalance from './balance/EthereumBalance';
  import SmartContractComponent from './contract/SmartContractComponent';
  import TransactionComponent from './transaction/TransactionComponent';
  export default {
    name: 'HelloWorld',
    /*props: {
      account: this.$store.account
    },*/
    components: {
      EthereumBalance,
      SmartContractComponent,
      TransactionComponent
    },
    computed: mapState({
      account: 'account'
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
