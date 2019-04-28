<template>
    <div class="border">
        <div>
            <div>
                <user></user>
            </div>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue';
    export default {
        components: {
            User
        }
    }
</script>

<style scoped>
    .border  {
        border: 1px solid black;
        box-shadow: 5px 5px 5px rgba(0,0,0,.7);
    }
    
</style>
