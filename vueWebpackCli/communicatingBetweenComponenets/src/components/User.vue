<template>
     <div class="component">
        <h1>The User Component</h1>
        <p>I am an awesome User!</p>
        <button @click="changeName">Change My Name</button>
        <p>My Current Name is {{ name }}</p>
        <hr>
        <div class="row">
            <div class="">
                <user-detail :name="name" @nameWasReset="name = $event"></user-detail>
            </div>
            <div class="">
                <user-edit></user-edit>   
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