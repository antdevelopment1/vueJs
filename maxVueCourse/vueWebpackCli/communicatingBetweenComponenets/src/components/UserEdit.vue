<template>
    <div>
        <h3>You may edit the user here.</h3>
        <h1>Edit Me:</h1>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>


<script>
    import { eventBus } from './../main.js';
    export default {
        name: "user-edit",
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge = 30;
                //this.$emit('ageWasEdited', this.userAge);
                //eventBus.$emit('ageWasEdited', this.userAge);
                eventBus.changeAge(this.userAge);
            }
        },
        created() {
            
        }
    }
</script>

<style scoped>
    div {   
        background-color: rgba(0,255,250, .7);
        box-shadow: 5px 5px 5px rgba(0,0,0,.7);
    }
</style>