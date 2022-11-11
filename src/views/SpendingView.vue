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
                transactions_data: [{}],
                transactions: [{
                    merchant: "merchant",
                    amount: "amount",
                    transactionTime: "transTime"
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
                    label: "Amount ($)",
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
        // computed: {
        //     transaction_row: function ( {
        //         type: string,
        //         amount: a,
        //         currency: c,
        //         merchant: {
        //             category: ca,
        //             categoryCode: cc,
        //             countryCodeAlpha3: cca,
        //             description: d,
        //             name: n
        //         },
        //         cardExternalId: ce,
        //         transactionTime: tt
        //     }
        //     ) {
        //         return {
        //             merchant: n,
        //             amount: a,
        //             transactionTime: tt
        //         }
        //     },
        // },
        methods: {
            transaction_row: function (row): { merchant: string; amount: string; transactionTime: string } {
                return {
                    merchant: row.merchant.n,
                    amount: row.amount,
                    transactionTime: row.transactionTime,
                }
            },
            new_transaction_table: function (old_transactions): {merchant: string, amount: string, transactionTime: string}[] 
            {
                var new_transactions = [{merchant: "random", amount: "", transactionTime: "doozy"}]
                for (let i = 0; i<old_transactions.length; i++) {
                    console.log(old_transactions[i].amount)
                    new_transactions[i] = {
                        merchant: old_transactions[i].merchant.name,
                        amount: old_transactions[i].amount,
                        transactionTime: old_transactions[i].transactionTime
                    }
                }
                return new_transactions
            }
        },
        // mounted: {
        //     this.translate_table()
        // },
    }
</script>

<template>
    
    <main>
        <h1 text-align="center">Budget</h1>
        <!-- getting user data  -->
        <UserObject @send_name="(n: string) => name = n" 
            @send_surname="(s: string) => surname = s" 
            @send_digits="(d: string) => card_digits = d"
            @send_date="(d: string) => exp_date = d"
            @send_balance="(b: number) => balance = b"
            @send_trans_data="(t: {}[]) => transactions_data = t"
            @send_num_trans="(n: number) => num_transactions = n"/>

        <div class="box">
            <p>{{name}}</p>
            <button @click="transactions = new_transaction_table(transactions_data)">Show table</button>

            <p>Original data: {{transactions_data}}</p>
            <p>Reformatted data: {{transactions}}</p>

            <!-- unformatted data -->
            <table-lite style="color:green;" :columns="colNames" :rows="transactions_data" :total="num_transactions"></table-lite>
            <!-- trying to get below to work -->
            <table-lite style="color:green;" :columns="colNames" :rows="transactions" :total="num_transactions"></table-lite>

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

<style>

</style>