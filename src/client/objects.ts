import { scene, camera, renderer } from './initialisation';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Assurez-vous d'avoir le chemin correct


export const objects: any = [];
var loader = new THREE.TextureLoader();
const gltfLoader = new GLTFLoader();
export const clickableObjects: THREE.Object3D[] = [];
let isLoadScreenActive = true;  // L'écran de chargement est initialement actif


// Charger un objet GLTF
gltfLoader.load('assets/twitter/scene.gltf', (gltf) => {
  gltf.scene.position.set(0, 1, -55);
  gltf.scene.scale.set(0.01, 0.01, 0.01);
  scene.add(gltf.scene);
  clickableObjects.push(gltf.scene);
  objectURLMap.set(gltf.scene, 'https://twitter.com/FaresKouki_');
}, undefined, function (error) {
  console.error(error);
});

gltfLoader.load('assets/linkedin/scene.gltf', (gltf) => {
  gltf.scene.position.set(-5, 1, -55); // Ajustez ces valeurs en fonction de votre scène
  gltf.scene.scale.set(1, 1, 1);
  scene.add(gltf.scene);
  clickableObjects.push(gltf.scene);
  objectURLMap.set(gltf.scene, 'https://www.linkedin.com/in/fares-kouki');
}, undefined, function (error) {
  console.error(error);
});

// Charger le deuxième objet GLTF supplémentaire
gltfLoader.load('assets/github/scene.gltf', (gltf) => {
  gltf.scene.position.set(5, 1, -55); // Ajustez ces valeurs en fonction de votre scène
  gltf.scene.scale.set(0.1, 0.1, 0.1);
  scene.add(gltf.scene);
  clickableObjects.push(gltf.scene);
  objectURLMap.set(gltf.scene, 'https://github.com/Faressj');
}, undefined, function (error) {
  console.error(error);
});

// Babylon image
var material1 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/Babylon.png')
});
var geometry1 = new THREE.PlaneGeometry(5, 5);
var babylon = new THREE.Mesh(geometry1, material1);
babylon.rotation.set(0, Math.PI / 2, 0);
babylon.position.set(-6.9, 2, -15)
scene.add(babylon);

// Babylon Text
var material2 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/BabylonText.png'),
  transparent: true,  // Activez la transparence
  alphaTest: 0.5
});
var geometry2 = new THREE.PlaneGeometry(3, 3);
var textbabylon = new THREE.Mesh(geometry2, material2);
textbabylon.rotation.set(0, Math.PI / 2, 0);
textbabylon.position.set(-6.9, 2, -19)
scene.add(textbabylon);

// HeroArchives image
var material3 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/heroarchives.png')
});
var geometry3 = new THREE.PlaneGeometry(5, 5);
var heroarchives = new THREE.Mesh(geometry3, material3);
heroarchives.rotation.set(0, Math.PI / 2, 0);
heroarchives.position.set(-6.9, 2, -25)
scene.add(heroarchives);

// HeroArchives Text
var material4 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/heroarchivestext.png'),
  transparent: true,  // Activez la transparence
  alphaTest: 0.5
});
var geometry4 = new THREE.PlaneGeometry(3, 3);
var textheroarchives = new THREE.Mesh(geometry4, material4);
textheroarchives.rotation.set(0, Math.PI / 2, 0);
textheroarchives.position.set(-6.9, 2, -29)
scene.add(textheroarchives);

// MangasCollection image
var material5 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/mangascollection.png')
});
var geometry5 = new THREE.PlaneGeometry(5, 5);
var mangascollection = new THREE.Mesh(geometry5, material5);
mangascollection.rotation.set(0, -Math.PI / 2, 0);
mangascollection.position.set(6.9, 2, -25)
scene.add(mangascollection);

// MangasCollection Text
var material6 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/mangascollectiontext.png'),
  transparent: true,  // Activez la transparence
  alphaTest: 0.5
});
var geometry6 = new THREE.PlaneGeometry(3, 3);
var textmangascollection = new THREE.Mesh(geometry6, material6);
textmangascollection.rotation.set(0, -Math.PI / 2, 0);
textmangascollection.position.set(6.9, 2, -21)
scene.add(textmangascollection);

// labase image
var material7 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/labase.png')
});
var geometry7 = new THREE.PlaneGeometry(5, 5);
var labase = new THREE.Mesh(geometry7, material7);
labase.rotation.set(0, Math.PI / 2, 0);
labase.position.set(-6.9, 2, -35)
scene.add(labase);

// labase Text
var material8 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/labasetext.png'),
  transparent: true,  // Activez la transparence
  alphaTest: 0.5
});
var geometry8 = new THREE.PlaneGeometry(3, 3);
var textlabase = new THREE.Mesh(geometry8, material8);
textlabase.rotation.set(0, Math.PI / 2, 0);
textlabase.position.set(-6.9, 2, -39)
scene.add(textlabase);

// telelibre image
var material9 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/telelibre.png')
});
var geometry9 = new THREE.PlaneGeometry(5, 5);
var telelibre = new THREE.Mesh(geometry9, material9);
telelibre.rotation.set(0, -Math.PI / 2, 0);
telelibre.position.set(6.9, 2, -35)
scene.add(telelibre);

// telelibre Text
var material10 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/telelibretext.png'),
  transparent: true,  // Activez la transparence
  alphaTest: 0.5
});
var geometry10 = new THREE.PlaneGeometry(3, 3);
var texttelelibre = new THREE.Mesh(geometry10, material10);
texttelelibre.rotation.set(0, -Math.PI / 2, 0);
texttelelibre.position.set(6.9, 2, -31)
scene.add(texttelelibre);

// sardines image
var material11 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/sardines.png')
});
var geometry11 = new THREE.PlaneGeometry(5, 5);
var sardines = new THREE.Mesh(geometry11, material11);
sardines.rotation.set(0, Math.PI / 2, 0);
sardines.position.set(-6.9, 2, -45)
scene.add(sardines);

// sardines Text
var material12 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/sardinestext.png'),
  transparent: true,  // Activez la transparence
  alphaTest: 0.5
});
var geometry12 = new THREE.PlaneGeometry(3, 3);
var textsardines = new THREE.Mesh(geometry12, material12);
textsardines.rotation.set(0, Math.PI / 2, 0);
textsardines.position.set(-6.9, 2, -49)
scene.add(textsardines);

// yggdrasil image
var material13 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/yggdrasil.png')
});
var geometry13 = new THREE.PlaneGeometry(5, 5);
var yggdrasil = new THREE.Mesh(geometry13, material13);
yggdrasil.rotation.set(0, -Math.PI / 2, 0);
yggdrasil.position.set(6.9, 2, -45)
scene.add(yggdrasil);

// Yggdrasil Text
var material14 = new THREE.MeshLambertMaterial({
  map: loader.load('assets/yggdrasiltext.png'),
  transparent: true,  // Activez la transparence
  alphaTest: 0.5
});
var geometry14 = new THREE.PlaneGeometry(3, 3);
var textyggdrasil = new THREE.Mesh(geometry14, material14);
textyggdrasil.rotation.set(0, -Math.PI / 2, 0);
textyggdrasil.position.set(6.9, 2, -41)
scene.add(textyggdrasil);

//ClICK
var clickmaterial = new THREE.MeshLambertMaterial({
  map: loader.load('assets/click.png'),
  transparent: true,  // Activez la transparence
  alphaTest: 0.5
});
var geometryclick = new THREE.PlaneGeometry(1, 1);

//ARROW
var arrowmaterial = new THREE.MeshLambertMaterial({
  map: loader.load('assets/arrow.png'),
  transparent: true,  // Activez la transparence
  alphaTest: 0.5
});
var geometryarrow = new THREE.PlaneGeometry(0.5, 0.5);


var click1 = new THREE.Mesh(geometryclick, clickmaterial);
click1.rotation.set(0, Math.PI / 2, 0);
click1.position.set(-6.9, -1.5, -15)
scene.add(click1);

var arrow1 = new THREE.Mesh(geometryarrow, arrowmaterial);
arrow1.rotation.set(0, Math.PI / 2, 0);
arrow1.position.set(-6.9, -0.8, -15)
scene.add(arrow1);

var click2 = new THREE.Mesh(geometryclick, clickmaterial);
click2.rotation.set(0, Math.PI / 2, 0);
click2.position.set(-6.9, -1.5, -25)
scene.add(click2);

var arrow2 = new THREE.Mesh(geometryarrow, arrowmaterial);
arrow2.rotation.set(0, Math.PI / 2, 0);
arrow2.position.set(-6.9, -0.8, -25)
scene.add(arrow2);

var click3 = new THREE.Mesh(geometryclick, clickmaterial);
click3.rotation.set(0, -Math.PI / 2, 0);
click3.position.set(6.9, -1.5, -25)
scene.add(click3);

var arrow3 = new THREE.Mesh(geometryarrow, arrowmaterial);
arrow3.rotation.set(0, -Math.PI / 2, 0);
arrow3.position.set(6.9, -0.8, -25)
scene.add(arrow3);

var click4 = new THREE.Mesh(geometryclick, clickmaterial);
click4.rotation.set(0, -Math.PI / 2, 0);
click4.position.set(6.9, -1.5, -35)
scene.add(click4);

var arrow4 = new THREE.Mesh(geometryarrow, arrowmaterial);
arrow4.rotation.set(0, -Math.PI / 2, 0);
arrow4.position.set(6.9, -0.8, -35)
scene.add(arrow4);

var click5 = new THREE.Mesh(geometryclick, clickmaterial);
click5.rotation.set(0, Math.PI / 2, 0);
click5.position.set(-6.9, -1.5, -35)
scene.add(click5);

var arrow5 = new THREE.Mesh(geometryarrow, arrowmaterial);
arrow5.rotation.set(0, Math.PI / 2, 0);
arrow5.position.set(-6.9, -0.8, -35)
scene.add(arrow5);

var click6 = new THREE.Mesh(geometryclick, clickmaterial);
click6.rotation.set(0, Math.PI / 2, 0);
click6.position.set(-6.9, -1.5, -45)
scene.add(click6);

var arrow6 = new THREE.Mesh(geometryarrow, arrowmaterial);
arrow6.rotation.set(0, Math.PI / 2, 0);
arrow6.position.set(-6.9, -0.8, -45)
scene.add(arrow6);


const torche = new THREE.BoxGeometry(1, 1, 1);
const materialtorche = new THREE.MeshStandardMaterial({ roughness: 0 });
// Torche 1
export const meshtorche1 = new THREE.Mesh(torche, materialtorche);
meshtorche1.position.set(-5, 0, -10)
scene.add(meshtorche1);

// Torche 2
export const meshtorche2 = new THREE.Mesh(torche, materialtorche);
meshtorche2.position.set(-5, 0, -20)
scene.add(meshtorche2);

// Torche 3
export const meshtorche3 = new THREE.Mesh(torche, materialtorche);
meshtorche3.position.set(-5, 0, -30)
scene.add(meshtorche3);

// Torche 4
export const meshtorche4 = new THREE.Mesh(torche, materialtorche);
meshtorche4.position.set(-5, 0, -40)
scene.add(meshtorche4);

// Torche 5
export const meshtorche5 = new THREE.Mesh(torche, materialtorche);
meshtorche5.position.set(-5, 0, -50)
scene.add(meshtorche5);

// Torche 6
export const meshtorche6 = new THREE.Mesh(torche, materialtorche);
meshtorche6.position.set(-5, 0, -60)
scene.add(meshtorche6);

// Torche 7
export const meshtorche7 = new THREE.Mesh(torche, materialtorche);
meshtorche7.position.set(5, 0, -10)
scene.add(meshtorche7);

// Torche 8
export const meshtorche8 = new THREE.Mesh(torche, materialtorche);
meshtorche8.position.set(5, 0, -20)
scene.add(meshtorche8);

// Torche 9
export const meshtorche9 = new THREE.Mesh(torche, materialtorche);
meshtorche9.position.set(5, 0, -30)
scene.add(meshtorche9);

// Torche 10
export const meshtorche10 = new THREE.Mesh(torche, materialtorche);
meshtorche10.position.set(5, 0, -40)
scene.add(meshtorche10);

// Torche 11
export const meshtorche11 = new THREE.Mesh(torche, materialtorche);
meshtorche11.position.set(5, 0, -50)
scene.add(meshtorche11);

// Torche 12
export const meshtorche12 = new THREE.Mesh(torche, materialtorche);
meshtorche12.position.set(5, 0, -60)
scene.add(meshtorche12);



const wallTexture = new THREE.TextureLoader().load('assets/walltexture1.png', function (texture) {
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(100, 1);
});

const floorTexture = new THREE.TextureLoader().load('assets/wallTexture.jpeg', function (texture) {
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(10, 1);
});

const ceilTexture = new THREE.TextureLoader().load('assets/ceil2.jpg', function (texture) {
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(100, 1);
});

const wallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture });
const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTexture });
const ceilMaterial = new THREE.MeshStandardMaterial({ map: ceilTexture });

// MUR GAUCHE
const wall1Geometry = new THREE.PlaneGeometry(1000, 8);
const wall1 = new THREE.Mesh(wall1Geometry, wallMaterial);
wall1.position.set(-7, 2, 0);
wall1.rotation.y = Math.PI / 2;
scene.add(wall1);

//MUR DROITE
const wall2Geometry = new THREE.PlaneGeometry(1000, 8);
const wall2 = new THREE.Mesh(wall2Geometry, wallMaterial);
wall2.position.set(7, 2, 0);
wall2.rotation.y = -Math.PI / 2;
scene.add(wall2);

//SOL
const solgeometry = new THREE.PlaneGeometry(100, 1);
const sol = new THREE.Mesh(solgeometry, floorMaterial);
sol.position.set(0, -1, 0);
sol.rotation.x = -Math.PI / 2;
sol.rotation.z = -Math.PI / 2;
scene.add(sol);

//PLAFOND
const ceilgeometry = new THREE.PlaneGeometry(1000, 30);
const ceil = new THREE.Mesh(ceilgeometry, ceilMaterial);
ceil.position.set(0, 8, 0);
ceil.rotation.x = Math.PI / 2;
ceil.rotation.z = -Math.PI / 2;
scene.add(ceil);


// HYPERLIEN
const objectURLMap = new Map();
objectURLMap.set(babylon, 'https://fahrat-kouki.com');
objectURLMap.set(heroarchives, 'https://heroarchives.com');
objectURLMap.set(mangascollection, 'https://mangascollection.com');
objectURLMap.set(labase, 'https://base.eelv.fr');
objectURLMap.set(telelibre, 'https://latelelibre-cards.enprojet.xyz');
objectURLMap.set(sardines, 'https://sardines.enprojet.xyz');
objectURLMap.set(yggdrasil, 'https://apasonf.fr');

const raycaster = new THREE.Raycaster();// Raycaster pour détecter les clics
const mouse = new THREE.Vector2();
clickableObjects.push(babylon, heroarchives, mangascollection, labase, telelibre, sardines, yggdrasil);

document.addEventListener('loadingCompleted', () => {
  isLoadScreenActive = false;
});
function onMouseClick(event: any) { //HREF ON OBJECT
  if (isLoadScreenActive) {
    return; // Ignorer les clics si l'écran de chargement est actif
  }
  // Convertir la position de la souris en coordonnées normalisées (-1 à +1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);  // Mettre à jour le raycaster avec la position de la souris

  const intersects = raycaster.intersectObjects(scene.children);  // Calculer les objets qui intersectent le rayon lancé

  for (let i = 0; i < intersects.length; i++) {
    let intersectedObject: THREE.Object3D<THREE.Object3DEventMap> | null = intersects[i].object;

    // Remonter jusqu'au parent si nécessaire
    while (intersectedObject && !objectURLMap.has(intersectedObject)) {
      intersectedObject = intersectedObject.parent;
    }

    if (intersectedObject && objectURLMap.has(intersectedObject)) {
      const url = objectURLMap.get(intersectedObject);
      window.open(url, '_blank');
      break;
    }

  }
}
function onMouseMove(event: any) { //SOURIS POINTER ON OBJECT
  if (isLoadScreenActive) {
    document.body.style.cursor = 'default';  // Assurez-vous que le curseur ne devient pas 'pointer'
    return; // Ignorer les mouvements de souris si l'écran de chargement est actif
  }
  // Convertir la position de la souris en coordonnées normalisées (-1 à +1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);  // Mettre à jour le raycaster avec la position de la souris

  const intersects = raycaster.intersectObjects(clickableObjects);  // Calculer les objets qui intersectent le rayon lancé

  if (intersects.length > 0) {
    document.body.style.cursor = 'pointer';
  } else {
    document.body.style.cursor = 'default';
  }
}

// Ajout d'une lumière omnidirectionnelle
export const torchLight1 = new THREE.PointLight(0xffaa55, 50, 15);
torchLight1.position.set(meshtorche1.position.x, meshtorche1.position.y, meshtorche1.position.z);
scene.add(torchLight1);
export const torchLight2 = new THREE.PointLight(0xffaa55, 50, 15);
torchLight2.position.set(meshtorche2.position.x, meshtorche2.position.y, meshtorche2.position.z);
scene.add(torchLight2);
export const torchLight3 = new THREE.PointLight(0xffaa55, 50, 15);
torchLight3.position.set(meshtorche3.position.x, meshtorche3.position.y, meshtorche3.position.z);
scene.add(torchLight3);
export const torchLight4 = new THREE.PointLight(0xffaa55, 50, 15);
torchLight4.position.set(meshtorche4.position.x, meshtorche4.position.y, meshtorche4.position.z);
scene.add(torchLight4);
export const torchLight5 = new THREE.PointLight(0xffaa55, 50, 15);
torchLight5.position.set(meshtorche5.position.x, meshtorche5.position.y, meshtorche5.position.z);
scene.add(torchLight5);
export const torchLight6 = new THREE.PointLight(0xffaa55, 50, 15);
torchLight6.position.set(meshtorche6.position.x, meshtorche6.position.y, meshtorche6.position.z);
scene.add(torchLight6);
export const torchLight7 = new THREE.PointLight(0xffaa55, 50, 15);
torchLight7.position.set(meshtorche7.position.x, meshtorche7.position.y, meshtorche7.position.z);
scene.add(torchLight7);
export const torchLight8 = new THREE.PointLight(0xffaa55, 50, 15);
torchLight8.position.set(meshtorche8.position.x, meshtorche8.position.y, meshtorche8.position.z);
scene.add(torchLight8);
export const torchLight9 = new THREE.PointLight(0xffaa55, 50, 15);
torchLight9.position.set(meshtorche9.position.x, meshtorche9.position.y, meshtorche9.position.z);
scene.add(torchLight9);
export const torchLight10 = new THREE.PointLight(0xffaa55, 50, 15);
torchLight10.position.set(meshtorche10.position.x, meshtorche10.position.y, meshtorche10.position.z);
scene.add(torchLight10);
export const torchLight11 = new THREE.PointLight(0xffaa55, 50, 15);
torchLight11.position.set(meshtorche11.position.x, meshtorche11.position.y, meshtorche11.position.z);
scene.add(torchLight11);
export const torchLight12 = new THREE.PointLight(0xffaa55, 50, 15);
torchLight12.position.set(meshtorche12.position.x, meshtorche12.position.y, meshtorche12.position.z);
scene.add(torchLight12);

// État initial de la lumière
torchLight1.visible = true;
torchLight2.visible = true;
torchLight3.visible = true;
torchLight4.visible = true;
torchLight5.visible = true;
torchLight6.visible = true;
torchLight7.visible = true;
torchLight8.visible = true;
torchLight9.visible = true;
torchLight10.visible = true;
torchLight11.visible = true;
torchLight12.visible = true;


document.addEventListener('DOMContentLoaded', function () {
  const toggleCheckbox = document.getElementById('checkbox');
  if (toggleCheckbox !== null) {
    toggleCheckbox.addEventListener('change', function () {
      torchLight1.visible = !torchLight1.visible;
      torchLight2.visible = !torchLight2.visible;
      torchLight3.visible = !torchLight3.visible;
      torchLight4.visible = !torchLight4.visible;
      torchLight5.visible = !torchLight5.visible;
      torchLight6.visible = !torchLight6.visible;
      torchLight7.visible = !torchLight7.visible;
      torchLight8.visible = !torchLight8.visible;
      torchLight9.visible = !torchLight9.visible;
      torchLight10.visible = !torchLight10.visible;
      torchLight11.visible = !torchLight11.visible;
      torchLight12.visible = !torchLight12.visible;
    });
  }
});


window.addEventListener('click', onMouseClick);
window.addEventListener('mousemove', onMouseMove);

function animate() {
  requestAnimationFrame(animate);

  const baseTime = performance.now() * 0.001;
  const delay = 0.5;

  for (let i = 1; i <= 6; i++) {
    const time = baseTime + delay * i;
    const cubeGroup1 = eval('meshtorche' + i); // Cube du groupe 1 (1-6)
    const cubeGroup2 = eval('meshtorche' + (i + 6)); // Cube correspondant du groupe 2 (7-12)

    // Animer les cubes du groupe 1
    cubeGroup1.position.y = Math.sin(time) * 2 + 4;
    cubeGroup1.rotation.x = time * 0.2;
    cubeGroup1.rotation.z = time * 0.2;

    // Animer les cubes du groupe 2 de la même manière
    cubeGroup2.position.y = Math.sin(time) * 2 + 4;
    cubeGroup2.rotation.x = time * 0.2;
    cubeGroup2.rotation.z = time * 0.2;

    const lightGroup1 = eval('torchLight' + i); // Lumière du groupe 1
    const lightGroup2 = eval('torchLight' + (i + 6)); // Lumière correspondante du groupe 2

    lightGroup1.position.copy(cubeGroup1.position);
    lightGroup2.position.copy(cubeGroup2.position);
  }



}
animate()