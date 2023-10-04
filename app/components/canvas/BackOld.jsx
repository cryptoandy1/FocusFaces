'use client'
import { useRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'

const Background = ({ isDark, img }) => {
  const sceneRef = useRef(null)
  let animationFrameId = null

  useEffect(() => {
    // Create a scene, camera, and renderer
    const [width, height] = [window.innerWidth, window.innerHeight]

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(20, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)

    // Append the renderer to the DOM
    sceneRef.current.appendChild(renderer.domElement)

    // Create a cube and add it to the scene
    const geometry = new THREE.PlaneGeometry(40, 30, 20, 20)
    const loader = new THREE.TextureLoader()
    let material
    if (isDark) {
      material = new THREE.MeshBasicMaterial({
        color: 0x444444,
        map: loader.load(img),
      })
    } else {
      material = new THREE.MeshBasicMaterial({
        map: loader.load(img),
      })
    }
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // Position the camera
    camera.position.z = 90
    const count = geometry.attributes.position.count
    const clock = new THREE.Clock()

    // Animation loop
    const animate = () => {
      const [width, height] = [window.innerWidth, window.innerHeight]
      const time = clock.getElapsedTime()
      animationFrameId = requestAnimationFrame(animate)

      for (let i = 0; i < count; i++) {
        const x = geometry.attributes.position.getX(i)
        const y = geometry.attributes.position.getY(i)
        const anim1 = 0.5 * Math.sin(x * time * 0.2)
        const anim2 = 0.1 * Math.sin(x * time * 0.4)
        const anim3 = 0.3 * Math.sin(y * time * 0.7)

        geometry.attributes.position.setZ(i, anim1 + anim2 + anim3)
        geometry.computeVertexNormals()
        geometry.attributes.position.needsUpdate = true
      }

      // Adjusting camera and renderer
      let heightMult = 1
      camera.position.z = 90
      if (width >= 640) {
        camera.position.z = 75
      }
      if (width >= 768) {
        camera.position.z = 50
      }

      if (width >= 1024) {
        camera.position.z = 35
      }
      if (height < 380) {
        heightMult = 0.5
      }
      // console.log(camera.position.z, width)
      camera.aspect = (width / height) * heightMult
      sceneRef.current.style.top = `${window.scrollY - 500}px`
      camera.updateProjectionMatrix()
      // to not to have black areas when scrolling
      renderer.setSize(width, height + 1100)
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      sceneRef.current.removeChild(sceneRef.current.firstElementChild)
      // if (rendererRef.current) {
      //   sceneRef.current.removeChild(rendererRef.current.domElement)
      // }
    }
  }, [isDark])

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full z-0`}
      ref={sceneRef}
    ></div>
  )
}

export default Background
