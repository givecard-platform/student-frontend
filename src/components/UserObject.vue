<script>
    // let function Transaction(vendor, amount, date) {
    //     this.vendor = vendor,
    //     this.amount = amount,
    //     this.date = date,
    // }
    // let function Date(day, month, year) {
    //     this.day = day,
    //     this.month = month,
    //     this.year = year,
    // }

    // let function User(name, surname, card_digits, exp_date, balance) {
    //     this.name = name,
    //     this.surname = surname,
    //     this.card_digits = card_digits,
    //     this.exp_date = exp_date,
    //     this.balance = balance,
    //     this.transactions = [],
    //     this.num_transactions = 0,

        // add_transaction = function(transaction) {
        //     this.transactions = this.transactions.push(transaction);
        //     this.num_transactions++;
        // }
    // }
    export default {
        data() {
            // return User("Hannah", "Kim", '4030', Date(25, 1, 2002), 233.21)
        
            return {
                name: "Helen",
                surname: "Kim",
                card_digits: '4030',
                exp_date: '25/01/2002',
                balance: 233.21,
            }
        }
    }


</script>