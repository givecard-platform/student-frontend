<script lang="ts">
    //import UserObject from '../components/UserObject.vue'   
    //import TableLite from "vue3-table-lite/ts"

    export default {
        components: {
      //      TableLite,
      //      UserObject
        },
        data() {
            return {
                goalList : ['Spend less this month than last month'], //will later fetch data
                completedGoals : ["Save $10 this month"],
                exampleGoals : ["Spend less this month than last month",
                "Spend less money on something that you don't need, and instead do a different activity you enjoy that doesn't cost money.",
                "Save $10 this month",
                "Pay off $10 of debt. This makes it so you have to pay less total money on the debt",
                "Talk to someone in your area who can give financial advice to personalize your goals more",
                "Spend one night this week not thinking about money",
                "Do one action that is good for your finances, but you've been avoiding",
                "Be proud of yourself for one thing you've done recently to help yourself financially"
                ],
                //anyGoal : document.getElementById("newTaskName"), //easy way to do it, not sure if the best way
                //someGoal : this.$refs.someGoal,
                //noGoal : document.getElementById("newTaskName"), //easy way to do it, not sure if the best way
                newGoal : ""
            }
        },
        computed: {
            randomGoal: function() {return this.exampleGoals[Math.floor(Math.random() * this.exampleGoals.length)]}
        },
        methods : {
            addGoal() {
                if (this.newGoal != "") {
                    this.goalList.push(this.newGoal)
                    this.newGoal = ""
                }
            },
            completeGoal(goal: string) {
                this.completedGoals.push(goal)
                this.goalList.splice(this.goalList.indexOf(goal), 1) //note this only removes the first instance, if there are duplicate goals
            },
            deleteGoal(goal: string, goalType: string) {
                if (goalType === "completed") {
                    this.completedGoals.splice(this.goalList.indexOf(goal), 1)
                } else if (goalType === "regular") {
                    this.goalList.splice(this.goalList.indexOf(goal), 1)
                }
            },
            async postList(someList: Array<string>, listName: string) { //may have performance impacts since it saves entire list
                return await fetch( //should return only after post completes
                    'GIVECARD_URL',
                    {
                        method: 'POST',
                        headers: {
                            //SOME_API_KEY
                        },
                        body: JSON.stringify({listName: someList}) //todo verify listName is one of the actual lists
                    }
                )
            },
            async fetchData() {
                const res = await fetch( 
                    "GIVECARD_URL"
                )
                var resJSON = await res.json()
                var fetchMap = JSON.parse(resJSON)
                if ("goalList" in fetchMap) {
                    this.goalList = fetchMap.goalList
                }
                if ("completedGoals" in fetchMap) {
                    this.completedGoals = fetchMap.completedGoals
                }
            }
        },
        watch : {
            goalList : {
                //automatically is called whenever list changes. may have some performance impacts, since will be saving entire list every time
                handler(updatedList) { 
                    //this.postList(updatedList, "goalList") //in testing, so not using a server
                    console.log(updatedList)
                },
                deep: true
            },
            completedGoals : {
                handler(updatedList) {
                    //this.postList(updatedList, "completedGoals") //in testing, so not using a server right now
                    console.log(updatedList)
                },
                deep: true
            }
        },
        mounted() {
            //this.fetchData() //in testing, so not using a server right now
        }
    }
</script>

<template>
    <main>
        <h1 text-align="center">Budget Page</h1>

        <div class="control"> <!-- This is needed to make sure the added goals don't resize the textarea, which was happening before -->
        <h2 text-align="center">Add a Goal</h2>
        <div class="field has-addons">
        <button class="button is-medium is-responsive is-rounded is-primary" v-on:click="addGoal()">Add Goal</button>
        <textarea class="textarea has-background-dark has-text-white" type="text" v-model="newGoal"></textarea>
        </div>

        <h2 text-align="center">Current Goals</h2>
        <div class="field has-addons" v-for="goal in goalList">
            <button class="button is-medium is-responsive is-rounded is-primary" v-on:click="completeGoal(goal)">Complete Goal</button>
            <div class="box has-background-dark has-text-white">{{goal}}</div>
            <button class="button is-medium is-responsive is-rounded is-danger" v-on:click="deleteGoal(goal, 'regular')">Delete</button>
        </div>

        <h2 text-align="center">Completed Goals</h2>
        <div class="field has-addons" v-for="goal in completedGoals">
            <div class="box has-background-dark has-text-white">{{goal}}</div>
            <button class="button is-medium is-responsive is-rounded is-danger" v-on:click="deleteGoal(goal, 'completed')">Delete</button>
        </div>

        <h2 text-align="center">Example Goals</h2>
        <div class="box has-background-dark has-text-white">{{randomGoal}}</div>
        </div>
    </main>
</template>

<style scoped>
@import '../assets/main_site.css'
</style>