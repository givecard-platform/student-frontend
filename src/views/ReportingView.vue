<script lang="ts">
    import UserObject from '../components/UserObject.vue'   
    import TableLite from "vue3-table-lite/ts"

    export default {
        components: {
            TableLite,
            UserObject
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
        }
    }
</script>

<template>
    <main>
        <h1 text-align="center">Reporting Page</h1>
        
        <!-- getting user data  -->
        <UserObject @send_name="n => name = n" 
            @send_surname="s => surname = s" 
            @send_digits="d => card_digits = d"
            @send_date="d => exp_date = d"
            @send_balance="b => balance = b"
            @send_trans="t => transactions = t"
            @send_colNames="c => colNames = c"
            @send_num_trans="n => num_transactions = n"/>

        <h5>Name: {{name}} {{surname}}</h5>
        <h5>Last 4 digits of card: {{card_digits}}</h5>
        <h5>Expire: {{exp_date}}</h5>
        <h5>Balance: ${{balance}}</h5>
        
    </main>
    
    
</template>

<style scoped>
@import '../assets/main_site.css'
</style>