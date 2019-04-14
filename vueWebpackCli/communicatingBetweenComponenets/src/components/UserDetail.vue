<template>
    <div class="component">
        <h3>You may view the User Details here.</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    import {eventBus} from './../main.js';
    export default {
        name: "user-detail",
        props: {
            name: {
                type: String,
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.name.split('').reverse().join('');
            },
            resetName() {
                this.name = 'April';
                this.$emit('nameWasReset', this.name);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: teal;
        box-shadow: 5px 5px 5px rgba(0,0,0,.7);
    }
</style>