<template>
  <div>
    <p>account:{{account}}</p>
    <EthereumBalance></EthereumBalance>
    <SmartContractComponent></SmartContractComponent>
    <TransactionComponent></TransactionComponent>
    <IcoContractComponent></IcoContractComponent>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  import EthereumBalance from './balance/EthereumBalance';
  import SmartContractComponent from './contract/SmartContractComponent';
  import IcoContractComponent from './contract/IcoContractComponent';
  import TransactionComponent from './transaction/TransactionComponent';
  export default {
    name: 'HelloWorld',
    /*props: {
      account: this.$store.account
    },*/
    components: {
      EthereumBalance,
      SmartContractComponent,
      IcoContractComponent,
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
