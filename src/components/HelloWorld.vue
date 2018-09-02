<template>
  <div>
    <p>account:{{account}}</p>
    <EthereumBalance></EthereumBalance>
    <SmartContractComponent></SmartContractComponent>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  import EthereumBalance from './balance/EthereumBalance';
  import SmartContractComponent from './contract/SmartContractComponent';
  export default {
    name: 'HelloWorld',
    /*props: {
      account: this.$store.account
    },*/
    components: {
      EthereumBalance,
      SmartContractComponent
    },
    computed: mapState({
      account: 'account'
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
