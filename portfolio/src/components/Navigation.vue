<template>
    <nav>
        <router-link :to="'/' + $route.params.language">Home</router-link>
        <router-link :to="'/' + $route.params.language + '/about'">About</router-link>
        <LocaleSwitcher></LocaleSwitcher>
    </nav>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
    name: 'Navigation',
    components: { LocaleSwitcher }
}
</script>

<style lang="scss" scoped>
    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
    }
</style>