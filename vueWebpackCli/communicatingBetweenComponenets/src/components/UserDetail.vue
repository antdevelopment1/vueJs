<template>
    <div class="component">
        <h3>You may view the User Details here.</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
    </div>
</template>

<script>
    export default {
        name: "user-detail",
        props: {
            name: {
                type: String,
                default: 'Jamie'
            }
        },
        methods: {
            switchName() {
                return this.name.split('').reverse().join('');
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: teal;
        box-shadow: 5px 5px 5px rgba(0,0,0,.7);
    }
</style>