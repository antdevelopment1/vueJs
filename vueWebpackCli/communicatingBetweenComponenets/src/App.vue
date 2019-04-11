<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <appUser></appUser>
            </div>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue';
    export default {
        components: {
            appUser: User
        }
    }
</script>

<style>
    div.component  {
        border: 1px solid black;
        box-shadow: 3px 3px 3px rgba(0,0,0,.7);
        padding: 30px;
    }
</style>
