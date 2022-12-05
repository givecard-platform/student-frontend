<script lang="ts">
    import UserObject from '../components/UserObject.vue'   
    import TableLite from "vue3-table-lite/ts"
    import { RouterLink, RouterView } from 'vue-router'

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

        <!-- getting user data  -->
        <UserObject @send_name="n => name = n" 
            @send_surname="s => surname = s" 
            @send_digits="d => card_digits = d"
            @send_date="d => exp_date = d"
            @send_balance="b => balance = b"
            @send_num_trans="n => num_transactions = n"/>

        <h1 text-align="center">Welcome, {{name}}</h1><br>

        <div class="box">
            <h3><RouterLink to="/spending" class="animsition-link">GiveCard Account - {{card_digits}}</RouterLink></h3><br>
            <h5 class="heading mb-3">Expires: {{exp_date}}</h5>
            <h5 class="heading mb-3">Balance: ${{balance}}</h5>
        </div>
        
    </main>
    
    
</template>

<style scoped>
@import '../assets/main_site.css'
</style>