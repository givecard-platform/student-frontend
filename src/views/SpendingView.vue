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
               //copied data here, since the UserObject was not working
                name: "Hannah",
                surname: "Kim",
                card_digits: '4020',
                exp_date: '01/27/2032',
                balance: 233.21,
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
                    headerStyles: {"background": "purple", "color": "white"},
                    columnStyles: {"background": "gray", "color": "white"},
                    sortable: true,
                    isKey: true,
                    },
                    {
                    label: "Amount",
                    field: "amount",
                    width: "10%",
                    headerStyles: {"background": "purple", "color": "white"},
                    columnStyles: {"background": "gray", "color": "white"},
                    sortable: true,
                    isKey: true,
                    },
                    {
                    label: "Date",
                    field: "date",
                    width: "10%",
                    headerStyles: {"background": "purple", "color": "white"},
                    columnStyles: {"background": "gray", "color": "white"},
                    sortable: true,
                    isKey: true,
                    }
                ],
                num_transactions: 3,
                //end of copy
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
    }
</script>

<template>
    
    <main>
        <h1 text-align="center">Budget</h1>
        <!-- <UserObject @send_name="(n) => name = n" @send_surname="(s) => surname = s" /> -->
            <UserObject/>
        <div>
            <p>{{name}}</p>
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
