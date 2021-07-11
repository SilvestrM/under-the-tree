/* eslint-disable */
import * as THREE from "three"
//import * as dat from "dat.gui"

// Debug

//import * as dat from "dat.gui"

function runThree(el) {
  // Canvas
  const canvas = el
  //const gui = new dat.GUI()
  const textureLoader = new THREE.TextureLoader()
  const woodNMap = textureLoader.load(require("@/assets/images/WoodNMap.png"))

  console.log(woodNMap)

  // Scene
  const scene = new THREE.Scene()

  // Objects
  const geometry = new THREE.SphereBufferGeometry(0.5, 56, 56)

  // Materials

  const material = new THREE.MeshStandardMaterial()
  material.color = new THREE.Color(0xeeffaa)
  material.roughness = 12
  material.normalMap = woodNMap

  // Mesh
  const sphere = new THREE.Mesh(geometry, material)
  sphere.position.set(0, 0, 2)
  scene.add(sphere)

  // Lights

  const pointLight = new THREE.PointLight(0xffffff, 1, 6, 2)
  pointLight.position.set(-2, 1, 1)
  scene.add(pointLight)

  const pointLight2 = new THREE.HemisphereLight(0xffffff, 0x333333, 0.1)
  pointLight2.position.set(-2, 1, 6)
  scene.add(pointLight2)
  //gui.add(pointLight2.position, "y")

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    90,
    sizes.width / sizes.height,
    0.1,
    100
  )

  let mouseX = 0
  let mouseY = 0

  let targetX = 0
  let targetY = 0
  el.addEventListener("mousemove", (e) => {
    mouseX = e.clientX - sizes.width / 2
    mouseY = e.clientY - sizes.height / 2
  })
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 2
  scene.add(camera)

  // Controls
  // const controls = new OrbitControls(camera, canvas)
  // controls.enableDamping = true

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 5))
  /**
   * Animate
   */

  const clock = new THREE.Clock()
  sphere.translateZ(-2)
  const tick = () => {
    let dt = clock.getDelta()

    targetX = mouseX * 0.001
    targetY = mouseY * 0.001
    // Update objects
    console.log(camera.position)
    sphere.rotation.y += 0.5 * dt

    sphere.rotation.y += dt * (targetX - sphere.rotation.y)
    sphere.rotation.x += dt * (targetY - sphere.rotation.x)
    sphere.rotation.z += -1 * dt * (targetY - sphere.rotation.x)
    //sphere.position.x = sphere.position.x < 1 * elapsedTime

    pointLight.position.y += dt * (-targetY - pointLight.position.y)
    pointLight.position.x += dt * (targetX - pointLight.position.x)
    //pointLight.position.z += -1 * dt * (targetY - pointLight.position.x)
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }

  tick()
}
export { runThree }
