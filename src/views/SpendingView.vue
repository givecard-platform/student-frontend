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
        setup() {
            const MCCtable = reactive({
            rows: [
                { category: 'Automated Cash Disburse', amount: 840.00, date: '01/10/2022'},
                { category: 'Automated Fuel Dispensers', amount: 45.95, date: '01/10/2022' },
                { category: 'Discount Stores', amount: 50.00, date: '01/10/2022' },
                { category: 'Eating Places/Restaurants', amount: 45.95, date: '01/10/2022' },
                { category: 'Econo Travel/Motor Hotel', amount: 30.00, date: '01/10/2022' },
                { category: 'Fast Food Restaurants', amount: 5.95, date: '01/10/2022' },
                { category: 'Grocery Stores/Supermarkets', amount: 100, date: '01/10/2022' },
                { category: 'Music Stores/Music Instruments/Pianos and Sheet Music ', amount: 45.95, date: '01/10/2022' },
                { category: 'Service Stations', amount: 440.00, date: '01/10/2022' },
                { category: 'Variety Stores', amount: 45.95, date: '01/10/2022' },
                ],
            columns: [
                {
                label: "Category",
                field: "category",
                width: "30%",
                headerStyles: {"background": "black", "color": "white"},
                columnStyles: {"background": "gray", "color": "white"},
                sortable: true,
                },
                {
                label: "Amount",
                field: "amount",
                width: "30%",
                headerStyles: {"background": "black", "color": "white"},
                columnStyles: {"background": "gray", "color": "white"},
                sortable: true,
                },
                {
                label: "Date",
                field: "date",
                width: "30%",
                headerStyles: {"background": "black", "color": "white"},
                columnStyles: {"background": "gray", "color": "white"},
                sortable: true,
                },
            ],
            totalRows: 10,
            sortable: {
                    order: 'date',
                    sort: 'desc'
                }
            });
            const MCCsort = (offset: number, limit: number, order: string, sort: string) => {
                //todo do something with offset and limit
                if (sort == "asc") {
                    MCCtable.sortable.sort = 'asc'
                    MCCtable.rows.sort((a: Record<string, any>, b: Record<string, any>) => a[order] - b[order]); //sorts in-place
                } else {
                    MCCtable.sortable.sort = 'desc'
                    MCCtable.rows.sort((a: Record<string, any>, b: Record<string, any>) => b[order] - a[order]);
                }
            }
            return { MCCtable, MCCsort }
        }
    }
</script>

<template>
    
    <main>
        <h1 text-align="center">Budget</h1>
        <!-- getting user data  -->
        <UserObject @send_name="n => name = n" 
            @send_surname="s => surname = s" 
            @send_digits="d => card_digits = d"
            @send_date="d => exp_date = d"
            @send_balance="b => balance = b"
            @send_trans="t => transactions = t"
            @send_colNames="c => colNames = c"
            @send_num_trans="n => num_transactions = n"/>

        <div class="box">
            <p>{{name}}</p>
            <!--<table-lite style="color:green;" :columns="colNames" :rows="transactions" :total="num_transactions"></table-lite> -->
            <table-lite style="color:green;" :columns="MCCtable.columns" :rows="MCCtable.rows"
            :total="MCCtable.totalRows" :sortable="MCCtable.sortable" @do-search="MCCsort"></table-lite>
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