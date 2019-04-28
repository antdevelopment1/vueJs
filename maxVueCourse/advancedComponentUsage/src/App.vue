<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'quote'">Quote</button>
                <button @click="selectedComponent = 'author'">Author</button>
                <button @click="selectedComponent = 'new'">New</button>
                <hr>
                <p>{{selectedComponent}}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
               <!-- <quote>
                   <h2 slot="title">{{quoteTitle}}</h2>
                   <p>{{quoteBody}}</p>  
               </quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';
    export default {
        data() {
            return {
                quoteTitle: "The Final Quote",
                quoteBody: "Given a sign, what direction would you go?",
                selectedComponent: 'quote'
            }
        },
        components: {
            Quote,
            Author,
            New
        }   
    }
</script>

<style>
    p {
        color: lightblue;
    }
</style>
