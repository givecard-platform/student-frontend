<script>
    import UserObject from '/Users/joannelee/Code/Givecard_Code/student-frontend/src/components/UserObject.vue'
    import TableLite from "vue3-table-lite"
    export default {
        components: {
            TableLite,
            UserObject
        },
        data() {
            return {
                name: UserObject.name,
                transactions: UserObject.transactions,
                colNames: UserObject.colnames,
                num_transactions: UserObject.num_transactions
            }
        },
    }
</script>

<template>
    
    <main>
        <h1 text-align="center">Budget</h1>
        <UserObject />
        <div>
            <p>{{name}}</p>
            <table-lite style="color:green;" :columns="colNames" :rows="transactions" :total="num_transactions"></table-lite>
        </div>
    </main>
    
</template>