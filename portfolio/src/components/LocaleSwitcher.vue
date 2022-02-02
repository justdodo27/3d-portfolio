<template>
    <div class="lang">
        <span class="material-icons">flag</span>
        <button v-for="locale in locales" :key="locale" @click="switchLocale(locale)" class="flag">
            {{ locale }}
        </button>
        <svg width="0" height="0">
            <defs>
                <clipPath id="flagClip">
                    <path d="M 0 2 Q 10 -2 20 2 Q 30 6 40 2 L 40 27 Q 31 31 20 27 Q 10 23 0 27 L 0 0" fill="transparent">
                        <animate attributeType="XML" attributeName="d"
                        values="M 0 2 Q 10 -2 20 2 Q 30 6 40 2 L 40 27 Q 31 31 20 27 Q 10 23 0 27 L 0 0;M 0 2 Q 11 6 20 2 Q 30 -2 40 2 L 40 27 Q 31 23 20 27 Q 10 31 0 27 L 0 0;M 0 2 Q 10 -2 20 2 Q 30 6 40 2 L 40 27 Q 31 31 20 27 Q 10 23 0 27 L 0 0"
                        dur="2s" repeatCount="indefinite" />
                    </path>
                </clipPath>
            </defs>
        </svg>
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
    }

    .flag{
        border: none;
        background-color: aqua;
        text-transform: uppercase;
        width: 40px;
        padding: 5px 0px;
        overflow: hidden;
        position: relative;
        clip-path: url("#flagClip");
    }

    .flag:hover{
        background-color: red;
    }
</style>