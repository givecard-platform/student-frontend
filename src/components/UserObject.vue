<script>
    import TableLite from "vue3-table-lite"
    export default {
        components: {
            TableLite,
            // UserObject
        },
        // emits: ['send_name'],
        // created() {
        //     this.$emit('send_name', this.name),
        // },
        data() {
            return {
                name: "Heather",
                surname: "Lee",
                card_digits: '2543',
                exp_date: '10/26/2029',
                balance: 83.21,
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
