<template>
    <div>
        <h4>Send ether between wallets</h4>
        <label>From</label>
        <input v-model="from" type="text">
        <label>To</label>
        <input v-model="to" type="text">
        <label for="">Value</label>
        <input type="text" v-model="etherValue">
        <button v-on:click="sendEther">Send</button>
    </div>
</template>

<script>
    export default {
        name: 'TransactionComponent',
        methods: {
            sendEther() {
                web3.eth.sendTransaction({
                    from: this.from,
                    to: this.to,
                    value: web3.toWei(this.etherValue, "ether")
                }, function(err, transactionHash) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(transactionHash);
                    }
                })
            }
    
        },
    
        data: function() {
            return {
                from: '0xa672ab6ec0bae186d9dc1ad027e10c38f0b9695b',
                to: '0x156b795830c0c6eeb432453ae06d9729b2e669db',
                etherValue: 0
            }
        }
    }
</script>
