<template>
    <nav>
        <router-link :to="'/' + $route.params.language">Home</router-link> |
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