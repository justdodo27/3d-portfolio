<template>
    <nav>
        <router-link active-class="active" class="nav-link" :to="'/' + $route.params.language">Home</router-link>
        <router-link active-class="active" class="nav-link" :to="'/' + $route.params.language + '/about'">About</router-link>
        <router-link active-class="active" class="nav-link" :to="'/' + $route.params.language + '/about'">Contact</router-link>
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
        // border-bottom: 1px solid white;
        padding: 10px 0px;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .nav-link{
        text-decoration: none;
        color: white;
        text-shadow: none;
        transition: color 0.5s linear;
        padding: 6px 8px;
        border-radius: 5px;
    }
    .nav-link:hover{
        color: #FFF945;
    }
    .active{
        box-shadow: 0px 0px 5px #FFF945;
        color: #FFF945;
    }
</style>