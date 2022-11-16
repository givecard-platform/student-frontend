<script>
    import json_data from './transactions.json'
    export default {
        data() {
            return {
                name: "Heather",
                surname: "Lee",
                card_digits: '2543',
                exp_date: '10/26/2029',
                balance: 83.21,
                transactions_data: json_data.transactions,
                num_transactions: 3
            }
        },
        emits: ['send_name', 'send_surname', 'send_digits', 'send_date', 'send_balance', 'send_trans_data', 'send_num_trans'],
        created() {
            this.$emit('send_name', this.name),
            this.$emit('send_surname', this.surname),
            this.$emit('send_digits', this.card_digits),
            this.$emit('send_date', this.exp_date),
            this.$emit('send_balance', this.balance),
            this.$emit('send_trans_data', this.transactions_data),
            this.$emit('send_num_t', this.num_transactions)
        },
    }
</script>

<template>
</template>
