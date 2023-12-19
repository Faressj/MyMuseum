
import * as THREE from 'three';
import { Reflector } from 'three/examples/jsm/objects/Reflector'
import { scene } from '../initialisation'

scene.background = new THREE.Color("#010424"); // Couleur de la Scene si j'enleve le bg en dessous
const reflectorwater: Reflector = new Reflector( // Initialisation du Reflecteur
    new THREE.PlaneGeometry(200, 200),
    {
        color: new THREE.Color(0x7f7f7f),
        textureWidth: window.innerWidth * window.devicePixelRatio,
        textureHeight: window.innerHeight * window.devicePixelRatio
    }
)
reflectorwater.position.y = -5.5; // Position du Reflecteur
reflectorwater.position.z = 0; // Position du Reflecteur
reflectorwater.rotation.x = -Math.PI / 2;  // Orientation du Reflecteur
scene.add(reflectorwater)