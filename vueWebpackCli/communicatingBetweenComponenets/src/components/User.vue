<template>
     <div class="component">
        <h1>The User Component</h1>
        <p>I am an awesome User!</p>
        <button @click="changeName">Change My Name</button>
        <hr>
        <div class="row">
            <div class="">
                <user-detail></user-detail>
            </div>
            <div class="">
                <UserEdit></UserEdit>   
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    export default {
        name: "user",
        components:  {
            UserDetail,
            UserEdit
        },
        data: function() {
            return {
                name: 'April'
            }
        },
        methods: {
            changeName() {
                this.name = 'Anna';
            }
        }
    }
</script>

<style>
</style>