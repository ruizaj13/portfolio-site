import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);
// camera.position.setX(-3);

renderer.render( scene, camera );

//torus shape
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xff6347, wireframe: true } );
const torus = new THREE.Mesh( geometry, material );

scene.add(torus);

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}

animate()





// const loader = new THREE.FontLoader();

// loader.load( 'fonts/helvetiker_Regular.typeface.json', function ( font ) {
//   const geometry = new THREE.TextGeometry( 'Juan A. Ruiz', {
//     font: font,
//     size: 40,
//     height: 5,
//     curveSegments: 12,
//     bevelEnabled: true,
//     bevelThickness: 10,
//     bevelSize: 8,
//     bevelOffset: 0,
//     bevelSegments: 5
//   });
//   const material = new THREE.MeshBasicMaterial( { color: 0xff6347 } );
//   const myName = new THREE.Mesh( geometry, material );
//   scene.add(myName);
//   renderer.render( scene, camera )
// });