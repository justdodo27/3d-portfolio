<template>
    <div class="lang">
        <span class="material-icons">flag</span>
        <button v-for="locale in locales" :class="{'jp': locale === 'ja', 'eng': locale === 'en'}" :key="locale" @click="switchLocale(locale)" class="flag">
            {{ locale }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'LocaleSwitcher',
    data() {
        return {
            locales: ['en', 'ja']
        }
    },
    methods: {
        switchLocale(locale){
            if (this.$i18n.locale !== locale){
                this.$i18n.locale = locale
                this.$router.push({ path: '/' + locale })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .lang{
        display: flex;
        align-items: center;
        align-content: center;
        gap: 10px;
        filter: drop-shadow(3px 3px 3px black);
    }

    .flag{
        border: none;
        background-position: center center;
        background-size: contain;
        background-clip: border-box;
        text-transform: uppercase;
        font-weight: bold;
        color: whitesmoke;
        text-shadow: 1px 1px 3px black;
        width: 40px;
        padding: 5px 0px;
        overflow: hidden;
        position: relative;
        clip-path: path('M 0 2 Q 10 -2 20 2 Q 30 6 40 2 L 40 27 Q 31 31 20 27 Q 10 23 0 27 L 0 0');
        transition: 0.5s ease;
    }

    .flag:hover{
        cursor: pointer;
        clip-path: path('M 0 2 Q 10 -2 20 2 Q 30 6 40 2 L 40 27 Q 31 31 20 27 Q 10 23 0 27 L 0 0');
        transition: 0.5s ease;
        animation: wavy 0.5s cubic-bezier(0.57, 0.67, 0.83, 0.67) infinite alternate;
    }

    .jp{
        background-image: url('~@/assets/jp.svg');
    }

    .eng{
        background-image: url('~@/assets/eng.svg');
    }

    @keyframes wavy {
        from {
            clip-path: path('M 0 2 Q 10 -2 20 2 Q 30 6 40 2 L 40 27 Q 31 31 20 27 Q 10 23 0 27 L 0 0');
        }
        to {
            clip-path: path('M 0 2 Q 11 6 20 2 Q 30 -2 40 2 L 40 27 Q 31 23 20 27 Q 10 31 0 27 L 0 0');
        }
    }
</style>