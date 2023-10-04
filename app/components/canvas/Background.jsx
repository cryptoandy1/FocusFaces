import { Canvas } from '@react-three/fiber'
import Mesh from './Mesh'

const Background = ({ isDark }) => {
  let width
  let height
  if (typeof window !== 'undefined') {
    width = window.innerWidth
    height = window.innerHeight
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Canvas
        camera={{
          fov: 7.3,
          near: 0.1,
          far: 1000,
          position: [0, 0, 50],
          aspect: width / height,
        }}
      >
        <Mesh isDark={isDark} />
      </Canvas>
    </div>
  )
}

export default Background
