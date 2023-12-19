import { scene, camera, renderer } from './initialisation';
import * as THREE from 'three';

let actualsegment = 0;
const cameraPositions: THREE.Vector3[] = [
    new THREE.Vector3(0, 0, 0),
    // new THREE.Vector3(0, 0, -10),
    new THREE.Vector3(0, 0, -45)
];

let cameramaxtop = true
let cameramaxbot = false

camera.lookAt(0, 0, -20)
let currentIndex = 0;

window.addEventListener('wheel', (event) => {
    testdefilement(event);
    whatIsMyIndex(event)
});
function whereToMove(targetPosition: THREE.Vector3) {
    const moveAmount = 0.1;

    // Déplace la caméra sur l'axe X
    if (!areFloatsEqual(camera.position.x, targetPosition.x)) {
        if (Math.abs(camera.position.x - targetPosition.x) <= moveAmount) {
            camera.position.x = targetPosition.x;
        } else {
            camera.position.x += (targetPosition.x - camera.position.x > 0 ? moveAmount : -moveAmount);
        }
    }

    // Déplace la caméra sur l'axe Y
    if (!areFloatsEqual(camera.position.y, targetPosition.y)) {
        if (Math.abs(camera.position.y - targetPosition.y) <= moveAmount) {
            camera.position.y = targetPosition.y;
        } else {
            camera.position.y += (targetPosition.y - camera.position.y > 0 ? moveAmount : -moveAmount);
        }
    }

    // Déplace la caméra sur l'axe Z
    if (!areFloatsEqual(camera.position.z, targetPosition.z)) {
        if (Math.abs(camera.position.z - targetPosition.z) <= moveAmount) {
            camera.position.z = targetPosition.z;
        } else {
            camera.position.z += (targetPosition.z - camera.position.z > 0 ? moveAmount : -moveAmount);
        }
    }
}
function updateCurrentIndexAndSegment() {
    let closestIndex = 0;
    let closestDistance = camera.position.distanceTo(cameraPositions[0]);

    for (let i = 1; i < cameraPositions.length; i++) {
        let distance = camera.position.distanceTo(cameraPositions[i]);
        if (distance < closestDistance) {
            closestIndex = i;
            closestDistance = distance;
        }
    }

    currentIndex = closestIndex;
    actualsegment = currentIndex;
}

const EPSILON = 0.001; // petite valeur pour les comparaisons
function areFloatsEqual(a: number, b: number): boolean {
    return Math.abs(a - b) < EPSILON;
}
function whatIsMyIndex(event:any) {
    for (let i = 0; i < cameraPositions.length; i++) {
        if(event.deltaY > 0 && currentIndex == cameraPositions.length-1){
            break;
        }
        if(event.deltaY < 0 && currentIndex == 0){
            break;
        }
        if (areFloatsEqual(camera.position.x, cameraPositions[i].x) &&
            areFloatsEqual(camera.position.y, cameraPositions[i].y) &&
            areFloatsEqual(camera.position.z, cameraPositions[i].z)) {
                currentIndex = i;
                if(currentIndex < cameraPositions.length-1){
                    whichSegment(currentIndex, event)
                }
                break;
        }
    }
}
function testdefilement(event: any) {
    let nextIndex;
    if (currentIndex == 0) {
        nextIndex = currentIndex + (event.deltaY > 0 ? 1 : 0);
    } else if (currentIndex == cameraPositions.length - 1) {
        nextIndex = currentIndex + (event.deltaY > 0 ? 0 : -1);
    } else {
        nextIndex = actualsegment + (event.deltaY > 0 ? 1 : 0);
    }
    if (nextIndex >= 0 && nextIndex < cameraPositions.length) {

        const targetPosition = cameraPositions[nextIndex];
        if (cameramaxtop && event.deltaY > 0) {  // Défilement vers le bas
            whereToMove(targetPosition);
            cameramaxtop = false;
        } else if (cameramaxbot && event.deltaY < 0) {  // Défilement vers le haut
            whereToMove(targetPosition);
            cameramaxbot = false;
        } else if (!cameramaxtop && !cameramaxbot) { // Si ce n'est ni le haut ni le bas
            whereToMove(targetPosition);
        }
    }
    if (areFloatsEqual(camera.position.x, cameraPositions[0].x) &&
        areFloatsEqual(camera.position.y, cameraPositions[0].y) &&
        areFloatsEqual(camera.position.z, cameraPositions[0].z)) {
        cameramaxtop = true;
    } else if (areFloatsEqual(camera.position.x, cameraPositions[cameraPositions.length - 1].x) &&
        areFloatsEqual(camera.position.y, cameraPositions[cameraPositions.length - 1].y) &&
        areFloatsEqual(camera.position.z, cameraPositions[cameraPositions.length - 1].z)) {
        cameramaxbot = true;
    }
}
function whichSegment(currentIndex:any, event:any){
    if(event.deltaY < 0){
        actualsegment--
    }else{
        actualsegment++
    }    
}

window.addEventListener('mousemove', onMouseMove);

function onMouseMove(event:any) {
    const width = window.innerWidth;

    const mousePosition = event.clientX;

    const mousePercent = mousePosition / width;    // Convertir la position de la souris en pourcentage de la largeur de l'écran


    const maxAngle = -Math.PI / 2;
    const angle = (mousePercent - 0.5) * 2 * maxAngle;

    // Appliquer la rotation à la caméra
    camera.rotation.y = angle;
}
//CLICK sur navbar
document.getElementById('vuejs')?.addEventListener('click', () => {
    camera.position.z = -20;
    updateCurrentIndexAndSegment();
});

document.getElementById('wordpress')?.addEventListener('click', () => {
    camera.position.z = -30;
    updateCurrentIndexAndSegment();
});

document.getElementById('babylon')?.addEventListener('click', () => {
    camera.position.z = -5;
    updateCurrentIndexAndSegment();
});

document.getElementById('reseaux')?.addEventListener('click', () => {
    camera.position.z = -45;
    updateCurrentIndexAndSegment();
});


const animate = () => {
    
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
