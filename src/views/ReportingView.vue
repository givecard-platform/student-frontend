<script>
    // import UserObject from '../components/UserObject.vue'    
    export default {
        data() {
            return {
                name: "Helen",
                surname: "Kim",
                card_digits: '4020',
                exp_date: '26/01/2002',
                balance: 233.21,
                transactions: [{vendor: "Starbucks", amount: 4.99, date: '31/10/2022',}],
                num_transactions: 0,
            }
        },
        methods : {
            add_transaction({vendor: v, amount: a, date: d,}) {
                this.transactions = this.transactions.push({vendor: v, amount: a, date: d,});
                this.num_transactions++;
            }
        }
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
                <span v-for="t in this.transactions">
                    {{t.vendor}}
                </span>
            </li>
        </ul> 
    </body>
</template>