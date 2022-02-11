<template>
    <div>
        <div class="view">
            <canvas id="viewport"></canvas>
            <div class="controls">
                <button @click="centerCamera()"><span class="material-icons">filter_center_focus</span></button>
                <select @change="changeResolution($event)">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </div>
    </div>    
</template>

<script>
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'


const res = 500
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    45,
    res / res,
    0.1,
    1000
)

const grid = new THREE.GridHelper(5,20)
scene.add(grid)

new RGBELoader()
    .setPath( '/textures/' )
    .load( 'venice_sunset_1k.hdr', function ( texture ) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
} )

camera.position.z = 1;
const loader = new GLTFLoader().setPath( '/models/' )

export default {
    data(){
        return {
            model: null,
            controls: null,
            render: null
        }
    },
    props: {
        src: String
    },
    methods: {
        loadModel(){
            const srcToModel = this.src + '/OilCan.glb'
            console.log(srcToModel)
            loader.load(srcToModel, function (gltf) {
                scene.add(gltf.scene)
            }, function ( xhr ) {
		        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	        }, function(error) {
                console.error(error)
            })
        },
        centerCamera(){
            this.controls.orbit.reset()
        },
        changeResolution(event){
            let res = 1
            switch (event.target.value) {
                case "low":
                    res = 3
                    break;
                case "medium":
                    res = 2
                    break;
                case "high":
                    res = 1
                    break;
                default:
                    break;
            }
            this.render.renderer.setPixelRatio(window.devicePixelRatio / res)
        }
    },
    created(){
        
    },
    mounted(){
        const canvas = document.querySelector("#viewport")

        this.render = {renderer: new THREE.WebGLRenderer({canvas})}

        const renderer = this.render.renderer

        renderer.setPixelRatio(window.devicePixelRatio / 2)
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputEncoding = THREE.sRGBEncoding;

        this.controls = {orbit: new OrbitControls(camera, renderer.domElement)}

        function animate() {
            // requestAnimationFrame( animate )
            renderer.render( scene, camera )
        }

        renderer.setAnimationLoop(animate)

        window.addEventListener('resize', () => {
            camera.updateProjectionMatrix()
        })
        renderer.setSize(res, res)
        camera.aspect = res / res
        this.loadModel()
        animate();
    }
}
</script>

<style lang="scss" scoped>
    .view{
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: 100%;
        place-items: center;
        padding: 0 20px;
    }

    #viewport{
        height: 500px;
        width: 500px;
    }

    .controls{
        width: 500px;
        display: flex;
        justify-content: flex-start;
    }
</style>