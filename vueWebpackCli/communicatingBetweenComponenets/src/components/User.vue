<template>
     <div class="component">
        <h1>The User Component</h1>
        <p>I am an awesome User!</p>
        <button @click="changeName">Change My Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <appUserDetail :name="name"></appUserDetail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <appUserEdit></appUserEdit>   
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    export default {
        components:  {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
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