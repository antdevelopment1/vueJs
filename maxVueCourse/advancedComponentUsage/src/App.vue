<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <quote>
                   <h2 slot="title">{{quoteTitle}}</h2>
                   <p slot="content">{{quoteBody}}</p>
               </quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    export default {
        data() {
            return {
                quoteTitle: "The Final Quote",
                quoteBody: "Given a sign, what direction would you go?"
            }
        },
        components: {
            Quote
        }   
    }
</script>

<style>
    p {
        color: lightblue;
    }
</style>
