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
                pieColors: ['#41B883', '#E46651', '#00D8FF', '#fbbc04', '#46BDC6', '#9900ff', '#ff00ff', '#4285F4', '#EA4335'],
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
        methods: {
            index_of: function(array: string[], target: string) {
                for (let i = 0; i<array.length; i++) {
                    if (array[i] == target) {
                        return i
                    }
                }
                return -1
            },
            random_color: function() {
                var color = '#';
                var letters = '0123456789ABCDEF';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color
            }
        },
        computed: {
            new_transaction_table() {
                var new_transactions = [{merchant: "random", amount: "", transactionTime: "doozy"}] 
                for (let i = 0; i<this.transactions_data.length; i++) {
                    console.log(this.transactions_data[i].amount)
                    new_transactions[i] = {
                        merchant: this.transactions_data[i].merchant.name,
                        amount: `-$${this.transactions_data[i].amount}`, //need to add handling deposits
                        transactionTime: this.transactions_data[i].transactionTime
                    }
                }
                this.num_transactions = this.transactions_data.length
                return new_transactions
            },
            new_pie_data()
            {
                var new_chart_labels = []
                var label_freq = []
                var num_labels = 0
                //labels & data
                for (let i = 0; i<this.transactions_data.length; i++) {
                    var label = this.transactions_data[i].merchant.category
                    var amount = this.transactions_data[i].amount
                    var index = this.index_of(new_chart_labels, label)
                    if (index == -1) {
                        new_chart_labels.push(label)
                        label_freq.push(amount)
                        num_labels = num_labels + 1
                    }
                    else {
                        label_freq[index] = label_freq[index] + amount
                    }
                }
                //colors
                var colors = []
                for (let i = 0; i<num_labels; i++) {
                    colors[i] = this.pieColors[i]
                }
                const data = {
                    labels: new_chart_labels,
                    datasets: [{
                        label: 'Transactions by categories',
                        data: label_freq,
                        backgroundColor: colors
                    }]
                }
                return data
            }
        },
    }
</script>

<template>
    
    <main>
        <!-- getting user data  -->
        <UserObject @send_name="(n: string) => name = n" 
            @send_surname="(s: string) => surname = s" 
            @send_digits="(d: string) => card_digits = d"
            @send_date="(d: string) => exp_date = d"
            @send_balance="(b: number) => balance = b"
            @send_trans_data="t => transactions_data = t"
            @send_num_trans="(n: number) => num_transactions = n"/>

        <!-- page contents -->
        <h1 text-align="center">Activity</h1>

        <!-- Figuring out how to put table and chart on same line -->
        <!-- so far tried <hr class = "list-inline-item">, 
            <div class="parent"> wrapping this whole section & with <div class='child inline-block-child'> for table & chart,
                <div1>-->
    
        <div1>
            <div class="box">
                <h5 class="heading mb-3">Transactions Table</h5>
                <table-lite style="color:green;" :columns="colNames" :rows="new_transaction_table" :total="num_transactions"></table-lite>
            </div>
        </div1>

        <div1>
            <div class="box">
                <h5 class="heading mb-3">Transactions by Categories</h5>
                <Pie
                    :chart-options="pieParams.chartOptions"
                    :chart-data="new_pie_data"
                    :chart-id="pieParams.chartId"
                    :dataset-id-key="pieParams.datasetIdKey"
                    :width="pieParams.width"
                    :height="pieParams.height"
                />  
            </div>   
        </div1> 
         
    </main>
    
</template>

<style scoped>
@import '../assets/main_site.css'
</style>