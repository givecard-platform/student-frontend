<script lang="ts">
    import UserObject from '../components/UserObject.vue'
    import TableLite from "vue3-table-lite/ts"
    import { Pie } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'
    import { reactive } from 'vue'
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
    export default {
        components: {
            TableLite,
            UserObject,
            Pie
        },
        data() {
            return {
               //userdata params
                name: "",
                surname: "",
                card_digits: '',
                exp_date: '',
                balance: 0,
                transactions_data: [{
                    type: "Clearing",
                    amount: "210.14",
                    currency: "USD",
                    merchant: {
                        category: "DEPARTMENT_STORES",
                        categoryCode: "5311",
                        countryCodeAlpha3: "USA",
                        description: "LUREIN HAS STUFF",
                        name: "PEPPERMINT MAX"
                    },
                    cardExternalId: "ORDELVJ48L",
                    transactionTime: "2022-10-18T22:16:13.195Z"
                }],
                colNames: [
                    {
                    label: "Vendor",
                    field: "merchant",
                    width: "10%",
                    headerStyles: {"background": "black", "color": "white"},
                    columnStyles: {"background": "gray", "color": "white"},
                    sortable: true,
                    isKey: true,
                    },
                    {
                    label: "Amount in dollars",
                    field: "amount",
                    width: "10%",
                    headerStyles: {"background": "black", "color": "white"},
                    columnStyles: {"background": "gray", "color": "white"},
                    sortable: true,
                    isKey: true,
                    },
                    {
                    label: "Date",
                    field: "transactionTime",
                    width: "10%",
                    headerStyles: {"background": "black", "color": "white"},
                    columnStyles: {"background": "gray", "color": "white"},
                    sortable: true,
                    isKey: true,
                    }
                ],
                num_transactions: 0,
                //end of userdata params
                pieParams: {
                    chartLoaded: true,
                    chartId: 'pie-chart',
                    chartOptions: {responsive: true},
                    datasetIdKey: 'label',
                    width: 40,
                    height: 40
                },
                pieData: {
                    labels: [ 'Food', 'Utilities', 'Other'],
                    datasets: [{
                        data: [40, 20, 12] ,
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF']
                        }]
                },
            }
        },
        computed: {
            new_transaction_table() 
            {
                var new_transactions = [{merchant: "random", amount: "", transactionTime: "doozy"}] 
                for (let i = 0; i<this.transactions_data.length; i++) {
                    console.log(this.transactions_data[i].amount)
                    new_transactions[i] = {
                        merchant: this.transactions_data[i].merchant.name,
                        amount: this.transactions_data[i].amount,
                        transactionTime: this.transactions_data[i].transactionTime
                    }
                }
                return new_transactions
            }
        },
    }
</script>

<template>
    
    <main>
        <h1 text-align="center">Transactions</h1>
        <!-- getting user data  -->
        <UserObject @send_name="(n: string) => name = n" 
            @send_surname="(s: string) => surname = s" 
            @send_digits="(d: string) => card_digits = d"
            @send_date="(d: string) => exp_date = d"
            @send_balance="(b: number) => balance = b"
            @send_trans_data="t => transactions_data = t"
            @send_num_trans="(n: number) => num_transactions = n"/>

        <div class="box">
            <h5>{{name}}</h5>

            <table-lite style="color:green;" :columns="colNames" :rows="new_transaction_table" :total="num_transactions"></table-lite>

        </div>
        <Pie
        :chart-options="pieParams.chartOptions"
        :chart-data="pieData"
        :chart-id="pieParams.chartId"
        :dataset-id-key="pieParams.datasetIdKey"
        :width="pieParams.width"
        :height="pieParams.height"
        />
    </main>
    
</template>

<style scoped>
@import '../assets/main_site.css'
</style>