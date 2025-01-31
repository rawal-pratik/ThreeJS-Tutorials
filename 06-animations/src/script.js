import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// let time = Date.now();

// // Animations

// const tick1 = ()=>{
    
//     const currentTime = Date.now();
//     const deltaTime = currentTime - time;
//     time = currentTime;

//     // Update objects
//     mesh.rotation.y += 0.001 * deltaTime;

//     // Render
//     renderer.render(scene, camera)
//     window.requestAnimationFrame(tick1);
// }

// tick1();


// const clock = new THREE.Clock();

// const tick2 = ()=>{
//     const elapsedTime = clock.getElapsedTime();
//     console.log(elapsedTime);

//     mesh.position.y = Math.cos(elapsedTime);
//     mesh.position.x = Math.sin(elapsedTime);
    

//     // Render
//     renderer.render(scene, camera)
//     window.requestAnimationFrame(tick2);
// }

// tick2();


// const clock = new THREE.Clock();
// const tick3 = ()=>{
//     const elapsedTime = clock.getElapsedTime();
    
//     camera.fov += Math.sin(elapsedTime);
//     camera.updateProjectionMatrix();
//     window.requestAnimationFrame(tick3);
//     renderer.render(scene, camera)
// }

// tick3();

gsap.to(mesh.position, {duration: 1, delay: 1, x: 2});
gsap.to(mesh.position, {duration: 1, delay: 2, x: 0});

const tick4 = ()=>{
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick4);
}

tick4();


