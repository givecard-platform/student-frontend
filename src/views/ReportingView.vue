<script lang="ts">
    // import UserObject from '../components/UserObject.vue'   
    import TableLite from "vue3-table-lite/ts"
    export default {
        components: {
            TableLite
        },
        data() {
            return {
                name: "Hannah",
                surname: "Kim",
                card_digits: '4020',
                exp_date: '01/26/2032',
                balance: 233.21,
                transactions: [
                    {vendor: "Walgreens", amount: 4.99, date: '01/10/2022',},
                    {vendor: "CVS", amount: 1.25, date: '01/15/2022'}
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
                num_transactions: 2
            }
        },
        // methods : {
        //     add_transaction({vendor: v, amount: a, date: d,}) {
        //         this.transactions = this.transactions.push({vendor: v, amount: a, date: d,});
        //         this.num_transactions++;
        //     }
        // }
    }
</script>

<template>
    <div>
    <h1 text-align="center">reporting page</h1>
    <p>Name: {{name}} {{surname}}</p>
    <p>Last 4 digits: {{card_digits}}</p>
    <p>Balance: {{balance}}</p>
    <table-lite style="color:green;" :columns="colNames" :rows="transactions" :total="num_transactions"></table-lite>
    </div>
</template>