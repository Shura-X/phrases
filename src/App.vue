<template>
    <div class="container">
        <custom-header :lang="lang" @switch="switch_lang"></custom-header>
        <custom-main :lang="lang" :vocab="vocab"></custom-main>
    </div>
</template>

<script>
import customHeader from './components/header.vue';
import customMain from './components/main.vue';

const english = {
    reset: 'reset',
    placeholder: 'add a phrase',
    add: 'add',
    complete: 'You must complete editing another phrase',
    empty: "You can't have an empty value",
    description: "Tired of the lecture and want to count professor's phrases? This small app will help to spare your time 🙃"
};

const russian = {
    reset: 'сбросить',
    placeholder: 'добавьте фразу',
    add: 'добавить',
    complete: 'Вы должны закончить предыдущее редактирование',
    empty: 'Вы не можете ввести пустое значение',
    //f643
    description: `Устал сидеть на лекции и считаешь фразы препода? Это небольшое приложение поможет скоротать твоё время 🙃`
};

export default {
    name: 'App',

    data() {
        return {
            lang: 'rus',
        }
    },

    computed: {
        vocab: function() {
            if (this.lang === 'eng') {
                return english;
            } else if (this.lang === 'rus') {
                return russian;
            }
        }
    },

    methods: {
        switch_lang(event, lang) {
            if (event.pointerType === 'mouse' && event.which !== 1) {
                return;
            }

            this.lang = lang
        }
    },

    components: { customHeader, customMain }
}
</script>


<style lang="sass">
    @import './style.sass';
</style>
