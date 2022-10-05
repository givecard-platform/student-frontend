<script>
    function Date(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    function Transaction(vendor, amount, after_balance) {
        this.vendor = vendor;
        this.amount = amount;
        this.after_balance = after_balance;
    }

    function User(name, surname, card_digits, exp_date, balance) {
        this.name = name;
        this.surname = surname;
        this.card_digits = card_digits;
        this.exp_date = exp_date;
        this.balance = balance;
        this.transactions = [];
        this.num_transactions = 0;

        add_transaction = function(transaction) {
            this.transactions = this.transactions.push(transaction);
            this.num_transactions++;
        }

    }
</script>

<template>
    <h1 text-align="center">reporting page</h1>
<!--
    <ul>
        <li>
            <span>{this.name}</span>
            <span>{this.surname}</span>
            <span>{this.card_digits}</span>
            <span>{this.balance}</span>
        </li>
        <li v-for="t in transactions" :key="t.vendor">
            <span>{t.after_balance}</span>
            </li>
    </ul>
-->
</template>