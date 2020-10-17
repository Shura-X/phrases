<template>
    <main @keydown.enter="on_add">
        
        <section class="add">
            <button id="reset" @click="on_reset">reset</button>
            <input type="text" v-model="input" placeholder="add a phrase">
            <button id="add" @click="on_add">add</button>
        </section>

        <section class="list">
            <ul>
                <li v-for="phrase in phrases" :id="phrase.id">
                    <p>{{ phrase.text }}</p>
                    <div class="cont">
                        <p>{{ phrase.count }}</p>
                        <button @click="on_increase(phrase)" id="plus">
                            <svg height="469.33333pt" viewBox="0 0 469.33333 469.33333" width="469.33333pt" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"/></svg>
                        </button>
                    </div>
                </li>
                
            </ul>
        </section>

    </main>
</template>

<script>
export default {
    name: 'App',

    data() {
        return {
            input: '',
            phrases: [],
        }
    },

    methods: {
        on_add() {
            if ( this.input.trim() === '' ) {
                return;
            }

            this.phrases.push({
                id: Date.now(),
                text: this.input,
                count: 0
            });

            this.input = '';
        },

        on_reset() {
            this.phrases = [];
            this.input = ''
        },

        on_delete(id) {
            const index = this.phrases.findIndex(elem => elem.id === id);
            this.phrases.splice(index, 1);
        },

        on_change() {

        },

        on_increase(phrase) {
            phrase.count++
        }
    }
}
</script>


<style lang="sass">
    @import './style.sass';
</style>
