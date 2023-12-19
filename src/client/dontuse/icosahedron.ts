import { scene, camera, renderer } from "../initialisation";
import * as THREE from 'three'

const geometry = new THREE.IcosahedronGeometry(1, 0);

const material = new THREE.MeshPhysicalMaterial({
    roughness: 0,
    transmission: 1,
    thickness: 0.1
});
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh);

const bgTexture = new THREE.TextureLoader().load("texturebg.jpg");
const bgGeometry = new THREE.PlaneGeometry(350, 350);
const bgMaterial = new THREE.MeshBasicMaterial({ map: bgTexture });
const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
bgMesh.position.set(0, 0, -10);
scene.add(bgMesh);

camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.001;
    renderer.render(scene, camera);
}

animate();
