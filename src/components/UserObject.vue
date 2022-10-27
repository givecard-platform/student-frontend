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
                // transactions: json_data,
                transactions: [
                    {vendor: "Walgreens", amount: 4.99, date: '01/10/2022',},
                    {vendor: "CVS", amount: 1.25, date: '01/15/2022'},
                    {vendor: "BC Bookstore", amount: 14.30, date:'02/02/2022'}
                ],
                colNames: [
                    {
                    label: "Vendor",
                    field: "vendor",
                    width: "10%",
                    headerStyles: {"background": "black", "color": "white"},
                    columnStyles: {"background": "gray", "color": "white"},
                    sortable: true,
                    isKey: true,
                    },
                    {
                    label: "Amount",
                    field: "amount",
                    width: "10%",
                    headerStyles: {"background": "black", "color": "white"},
                    columnStyles: {"background": "gray", "color": "white"},
                    sortable: true,
                    isKey: true,
                    },
                    {
                    label: "Date",
                    field: "date",
                    width: "10%",
                    headerStyles: {"background": "black", "color": "white"},
                    columnStyles: {"background": "gray", "color": "white"},
                    sortable: true,
                    isKey: true,
                    }
                ],
                num_transactions: 3
            }
        },
        emits: ['send_name', 'send_surname', 'send_digits', 'send_date', 'send_balance', 'send_trans', 'send_colNames', 'send_num_trans'],
        created() {
            this.$emit('send_name', this.name),
            this.$emit('send_surname', this.surname),
            this.$emit('send_digits', this.card_digits),
            this.$emit('send_date', this.exp_date),
            this.$emit('send_balance', this.balance),
            this.$emit('send_trans', this.transactions),
            this.$emit('send_colNames', this.colNames),
            this.$emit('send_num_t', this.num_transactions)
        },
    }
</script>

<template>
    <div>
    <p>Name: {{this.name}} {{this.surname}}</p>
    <p>Last 4 digits of card: {{this.card_digits}}</p>
    <p>Expire: {{this.exp_date}}</p>
    <p>Balance: ${{this.balance}}</p>
    </div>
</template>
