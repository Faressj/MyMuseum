import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let scene = new THREE.Scene(); // Initialisation de la Scene

const axesHelper = new THREE.AxesHelper( 5 );  // Initialisation des Axes

const light = new THREE.AmbientLight(0xfff0dd, 0); // Initialisation de la Lumiere
light.position.set(0, 1, 10);

let camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Initialisation de la Camera

let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Initialisation du renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5;
document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);

scene.add( light, axesHelper );

window.addEventListener('resize', onWindowResize);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

export {scene, camera, renderer, light};