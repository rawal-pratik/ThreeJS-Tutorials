import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas




const cursor = {
    x : null,
    y : null
}
const canvas = document.querySelector('canvas.webgl')

window.addEventListener('mousemove', (event)=>{
    cursor.x = event.clientX/sizes.width - 0.5;
    cursor.y = -(event.clientY/sizes.height - 0.5);
    console.log(cursor.x, cursor.y);
})

// Sizes
const sizes = {
    width: 800,
    height: 600
}

const aspectRatio = sizes.width / sizes.height;

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.target.y = 1
// controls.update();

// const camera = new THREE.OrthographicCamera(-1*aspectRatio, 1*aspectRatio, 1, -1, 0.1, 100);
// camera.position.set(2, 2, 2);
// camera.lookAt(mesh.position);
// scene.add(camera);


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    // const elapsedTime = clock.getElapsedTime()

    // // Update objects
    // mesh.rotation.y = elapsedTime;

    // camera.position.x = Math.sin(cursor.x * 5) * 3;
    // camera.position.z = Math.cos(cursor.x * 5) * 3;
    // camera.position.y = cursor.y * 5;
    // camera.lookAt(mesh.position);


    controls.update();


    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()