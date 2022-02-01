<template>
    <div>
        <button v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
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

<style>

</style>