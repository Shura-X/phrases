<template>
    <main @keydown.enter="on_add($event)">

        <p id="description">{{ vocab.description }}</p>

        <section class="add">
            <button id="reset" @pointerdown="on_reset($event)">{{vocab.reset}}</button>
            <input type="text" v-model="input" 
                @input="on_input($event)" :placeholder="vocab.placeholder">
            <button id="add" @pointerdown="on_add($event)">{{vocab.add}}</button>
        </section>

        <p style="position: absolute; top: 100px; left: 100px">{{ input }}</p>

        <section class="list">
        <ul>

            <li v-for="phrase in phrases" :id="phrase.id">
                <div class="left">
                    <p v-if="phrase.state === 'static'">{{ phrase.text }}</p>

                    <input v-focus v-else type="text" v-model="phrase.text"
                        @keydown.enter="on_edit($event, phrase)">

                    <button id="" class="delete" @pointerdown="on_delete($event, phrase.id)">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <g>
                            <g>
                                <path fill="currentColor" d="M92.205,150l26.568,320.735C120.678,493.865,140.38,512,163.598,512h184.805c23.218,0,42.92-18.135,44.824-41.265
                                L419.795,150H92.205z M211,437c0,8.291-6.709,15-15,15s-15-6.709-15-15V195c0-8.291,6.709-15,15-15s15,6.709,15,15V437z M271,437
                                c0,8.291-6.709,15-15,15c-8.291,0-15-6.709-15-15V195c0-8.291,6.709-15,15-15s15,6.709,15,15V437z M331,437
                                c0,8.291-6.709,15-15,15c-8.291,0-15-6.709-15-15V195c0-8.291,6.709-15,15-15c8.291,0,15,6.709,15,15V437z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="currentColor" d="M406,60h-75V45c0-24.814-20.186-45-45-45h-60c-24.814,0-45,20.186-45,45v15h-75c-24.853,0-45,20.147-45,45
                                c0,8.284,6.716,15,15,15h360c8.284,0,15-6.716,15-15C451,80.147,430.853,60,406,60z M301,60h-90V45c0-8.276,6.724-15,15-15h60
                                c8.276,0,15,6.724,15,15V60z"/>
                            </g>
                        </g>
                        </svg>
                    </button>

                    <button id="" class="edit" @pointerdown="on_edit($event, phrase)">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 394.69 394.69" style="enable-background:new 0 0 394.69 394.69;" xml:space="preserve">
                        <g>
                            <g>
                                    
                                    <rect fill="currentColor" x="67.071" y="127.783" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -81.2718 197.5973)" width="261.629" height="138.239"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="currentColor" d="M388.801,78.658L316.609,5.442c-7.168-7.168-18.432-7.168-25.088-0.512c0,0,0,0-0.512,0.512l-31.744,31.744l97.792,98.304
                                    l31.744-31.744C395.969,96.578,395.969,85.314,388.801,78.658z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="currentColor" d="M42.177,261.954L1.729,370.498c-3.584,9.216,1.024,19.456,10.24,23.04c4.096,1.536,8.704,1.536,12.8,0l108.544-40.96
                                    L42.177,261.954z"/>
                            </g>
                        </g>
                        </svg>
                    </button>
                </div>

                <div class="right">
                        <p>{{ phrase.count }}</p>
                        <button @click="on_increase($event, phrase)" id="plus">
                            <svg height="469.33333pt" viewBox="0 0 469.33333 469.33333" width="469.33333pt" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"/></svg>
                        </button>
                </div>
            </li>
                
        </ul>
        </section>

    </main>
</template>

<script>
//import header from './components/header.vue';

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
    name: 'main',

    props: ['lang', 'vocab'],

    data() {
        return {
            input: '',
            phrases: [],
        }
    },

    directives: {
        focus: { 
            inserted: function(el) { 
                el.focus();
                console.log("it should've focused...");
                document.documentElement.querySelector('.add input').focus();
            } 
        }
    },

    methods: {
        on_input(event) {
            this.input = event.target.value;
            alert( this.input );
        },

        on_add(event) {
            //setTimeout(() => {
                if (event.pointerType === 'mouse' && event.which !== 1) {
                    return;
                }

                if ( this.input.trim() === '' ) {
                    return;
                }

                this.phrases.push({
                    id: Date.now(),
                    text: this.input,
                    count: 0,
                    state: 'static',
                });

                this.input = '';
            //}, 100)
        },

        on_reset(event) {
            if (event.pointerType === 'mouse' && event.which !== 1) {
                return;
            }

            this.phrases = [];
            this.input = ''
        },

        on_delete(event, id) {
            if (event.pointerType === 'mouse' && event.which !== 1) {
                return;
            }

            const index = this.phrases.findIndex(elem => elem.id === id);
            this.phrases.splice(index, 1);
        },

        on_edit(event, phrase) {
            if (event.pointerType === 'mouse' && event.which !== 1) {
                return;
            }

            if ( phrase.state === 'static' ) {
            
                if ( this.phrases.find(item => item.state === 'editing') ) {
                    alert(this.vocab.complete);
                    return;
                };

                phrase.state = 'editing'
            } else {
                
                if (phrase.text.trim() === '') {
                    alert(this.vocab.empty);
                    return
                }

                phrase.state = 'static'
            };

        },

        on_increase(event, phrase) {
            if (event.pointerType === 'mouse' && event.which !== 1) {
                return;
            }

            phrase.count++
        },

        switch_lang(event, lang, btn) {
            if (event.pointerType === 'mouse' && event.which !== 1) {
                return;
            }

            this.lang = lang;
        }
    },
}
</script>