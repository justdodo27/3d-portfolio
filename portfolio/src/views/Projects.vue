<template>
    <div class="projects">
        <h1>{{ $t("projects") }}</h1>
        <router-link :to="'/' + $route.params.language + '/project/' + model.src" v-for="model in models" :key="model.name">{{ model.name }}</router-link>
    </div>
</template>

<script>
export default {
    name: "Projects",
    components: {
        
    },
    data() {
        return {
            models: [
                {name: "OilCan", src: "OilCan.glb"}
            ]
        }
    },
}
</script>