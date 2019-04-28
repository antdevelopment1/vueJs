<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }} </p>
        <button @click="resetName">Reset</button>
        <button @click="resetFunc">Reset With Callback</button>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
export default {
    props: {
        myName: {
            type: String,
            required: true
        },
        resetFunc: {
            type: Function
        },
        userAge: Number
    },
    methods: {
        switchName() {
            return this.myName;
        },
        resetName() {
            this.myName = "April";
            this.$emit('nameWasReset', this.myName);
        },

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
        background-color: lightcoral;
    }
</style>
