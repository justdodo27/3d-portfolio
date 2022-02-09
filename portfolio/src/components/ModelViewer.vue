<template>
    <div>
        <div class="view">

        </div>
    </div>    
</template>

<script>
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2 )
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    45,
    (window.innerWidth/2) / (window.innerHeight/2),
    0.1,
    1000
)

renderer.setClearColor(0xA3A3A3)
const grid = new THREE.GridHelper(30,30)
scene.add(grid)

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;

new RGBELoader()
    .setPath( '/textures/' )
    .load( 'venice_sunset_1k.hdr', function ( texture ) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
} )

const orbit = new OrbitControls(camera, renderer.domElement)
orbit.update()

camera.position.z = 5;
const loader = new GLTFLoader().setPath( '/models/' )

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

renderer.setAnimationLoop(animate)

export default {
    data(){
        return {
            model: null
        }
    },
    props: {
        src: String
    },
    methods: {
        loadModel(){
            const srcToModel = this.src + ".glb"
            console.log(srcToModel)
            loader.load(srcToModel, function (gltf) {
                scene.add(gltf.scene)
            }, function ( xhr ) {
		        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	        }, function(error) {
                console.error(error)
            })
        }
    },
    created(){
        
    },
    mounted(){
        document.querySelector(".view").appendChild( renderer.domElement )
        this.loadModel()
        animate();
    }
}
</script>

<style lang="scss" scoped>
    .view{
        display: flex;
        justify-content: center;
    }
</style>