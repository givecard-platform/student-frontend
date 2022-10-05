<script>
    function Transaction(vendor, amount, date) {
        this.vendor = vendor;
        this.amount = amount;
        this.date = date;
    }
    function Date(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    function User(name, surname, card_digits, exp_date, balance) = {
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
    export default {
        data() {
            return User("Hannah", "Kim", 4030, Date(25, 1, 2002), 233.21);
        }
    }
</script>

<template>
    <ul>
        <li>
            <span>{this.name}</span>
            <span>{this.surname}</span>
            <span>{this.card_digits}</span>
            <span>{this.balance}</span>
        </li>
    </ul>
</template>