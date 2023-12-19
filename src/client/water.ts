import * as THREE from 'three';

import Stats from 'three/examples/jsm/libs/stats.module.js';

import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { scene, camera, renderer, light } from './initialisation';
let stats: any;

let controls, water: any, sun: any;

init();
animate();

function init() {

    sun = new THREE.Vector3();

    // Water

    const waterGeometry = new THREE.PlaneGeometry(30, 1000);

    water = new Water(
        waterGeometry,
        {
            textureWidth: 100,
            textureHeight: 512,
            waterNormals: new THREE.TextureLoader().load('assets/waterdudv.jpeg', function (texture) {

                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

            }),
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 1, //3.7
            fog: scene.fog !== undefined
        }
    );

    water.rotation.x = - Math.PI / 2;
    water.position.y = -2

    scene.add(water);

    // Skybox

    const sky = new Sky();
    sky.scale.setScalar(100);
    scene.add(sky);

    const skyUniforms = sky.material.uniforms;

    skyUniforms['turbidity'].value = 10;
    skyUniforms['rayleigh'].value = 2;
    skyUniforms['mieCoefficient'].value = 0.005;
    skyUniforms['mieDirectionalG'].value = 0.5;

    const parameters = {
        elevation: 0,
        azimuth: 180
    };

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const sceneEnv = new THREE.Scene();

    let renderTarget: any;

    function updateSun() {

        const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
        const theta = THREE.MathUtils.degToRad(parameters.azimuth);

        sun.setFromSphericalCoords(1, phi, theta);

        sky.material.uniforms['sunPosition'].value.copy(sun);
        water.material.uniforms['sunDirection'].value.copy(sun).normalize();

        if (renderTarget !== undefined) renderTarget.dispose();

        sceneEnv.add(sky);
        renderTarget = pmremGenerator.fromScene(sceneEnv);
        scene.add(sky);

        scene.environment = renderTarget.texture;

    }

    updateSun();

    // CONTROLS
    // controls = new OrbitControls(camera, renderer.domElement);
    // // controls.maxPolarAngle = Math.PI * 0.495;
    // camera.lookAt(0,0,-20)
    // // controls.target.set(0,0, 0);
    // controls.enableRotate = false;
    // controls.enablePan = false;
    // controls.enableZoom = false;
    // controls.update();

    // stats = new Stats();

    // GUI
    // const gui = new GUI();

    // const folderSky = gui.addFolder('Sky');
    // folderSky.add(parameters, 'elevation', 0, 90, 0.1).onChange(updateSun);
    // folderSky.add(parameters, 'azimuth', - 180, 180, 0.1).onChange(updateSun);
    // folderSky.open();

    const waterUniforms = water.material.uniforms;
    waterUniforms.size['value'] = 10;

    // const folderWater = gui.addFolder('Water');
    // folderWater.add(waterUniforms.distortionScale, 'value', 0, 8, 0.1).name('distortionScale');
    // folderWater.add(waterUniforms.size, 'value', 0.1, 10, 0.1).name('size');
    // folderWater.open();
    //BOUTON
    document.addEventListener('DOMContentLoaded', function() {
        const toggleCheckbox = document.getElementById('checkbox');
        if(toggleCheckbox !== null){
            toggleCheckbox.addEventListener('change', function() {
                // Modifier l'élévation
                parameters.elevation = (parameters.elevation === 0 ? 90 : 0);
                updateSun();
        
                // Modifier l'intensité de l'ambient light
                light.intensity = (light.intensity === 0 ? 1 : 0);
            });
        }
    });
}


function animate() {
    requestAnimationFrame(animate);
    render();
    // stats.update();
}

function render() {

    water.material.uniforms['time'].value += 1.0 / 60.0;
}