<template>
    <div class="container">
       <appHeader></appHeader>
        <hr>
        <div class="row">
            <Servers></Servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import Servers from './components/Servers.vue';
    import ServerDetails from './components/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
            'app-footer': Footer,
            Servers,
            'app-server-details': ServerDetails
        }
    }
</script>

<style>

</style>
