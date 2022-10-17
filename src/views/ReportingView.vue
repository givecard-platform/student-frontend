<script lang="ts">
    import UserObject from '../components/UserObject.vue'   
    import TableLite from "vue3-table-lite/ts"
    import { Pie } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

    export default {
        components: {
            TableLite,
            UserObject,
            Pie
        },
        data() {
            return {
                name: "Hannah",
                surname: "Kim",
                card_digits: '4020',
                exp_date: '01/26/2032',
                balance: 233.21,
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
        // methods : {
        //     add_transaction({vendor: v, amount: a, date: d,}) {
        //         this.transactions = this.transactions.push({vendor: v, amount: a, date: d,});
        //         this.num_transactions++;
        //     }
        // }
    }
</script>

<template>
    
    <main>
        <h1 text-align="center">Reporting Page</h1>
        <UserObject />
    </main>
    <Pie
        :chart-options="pieParams.chartOptions"
        :chart-data="pieData"
        :chart-id="pieParams.chartId"
        :dataset-id-key="pieParams.datasetIdKey"
        :width="pieParams.width"
        :height="pieParams.height"
    />
    
</template>