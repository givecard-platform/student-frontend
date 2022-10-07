<script>
    // import UserObject from '../components/UserObject.vue'    
    export default {
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
                num_transactions: 0,
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
    <h1 text-align="center">reporting page</h1>
    <body>
        <ul>
            <li>
                <span>{{this.name}}</span>
            </li>
            <li>
                <span>{{this.surname}}</span>
            </li>
            <li>
                <span>{{this.card_digits}}</span>
            </li>
            <li>
                <span>{{this.balance}}</span>
            </li>
            <li>
                <div>
                    <b-table :items="this.transactions"></b-table>
                </div>
                <ul v-for="t in this.transactions">
                    <li>{{t.vendor}}</li>
                </ul>
            </li>
        </ul> 
    </body>
</template>