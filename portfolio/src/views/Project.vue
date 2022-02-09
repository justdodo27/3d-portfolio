<template>
    <div class="project">
        <h1>Single project {{ $route.params.src }}</h1>
        <Viewer :src="$route.params.src"></Viewer>
    </div>
</template>

<script>
import Viewer from "@/components/ModelViewer.vue"

export default {
    name: "Projects",
    components: {
        Viewer
    },
    data() {
        return {
            
        }
    },
}
</script>