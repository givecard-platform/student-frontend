<!--Javascript objects for Dates, Transactions, User, not sure how to integrate them-->

<script>
    function Date(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    function Transaction(vendor, amount, date) {
        this.vendor = vendor;
        this.amount = amount;
        this.date = date;
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
    <ul>
        <li>
            <span>{this.name}</span>
            <span>{this.surname}</span>
            <span>{this.card_digits}</span>
            <span>{this.balance}</span>
            </li>
        <li v-for="t in transactions" :key="t.vendor">
            <span>{t.vendor}</span>
            </li>
    </ul>
</template>