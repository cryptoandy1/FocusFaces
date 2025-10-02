import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { easing } from "maath";
import images from "@/app/images/images";

const [bgDarkImg, bgLightImg] = [
  images.fnf_bg_dark.src,
  images.fnf_bg_light.src,
];

const Mesh = ({ isDark }) => {
  let img;
  if (isDark) {
    img = bgDarkImg;
  } else {
    img = bgLightImg;
  }
  // This reference -direct access to the mesh
  const meshRef = useRef();
  const colorMap = useLoader(TextureLoader, img);
  const count = 441;
  //rotate the mesh every frame
  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const x = state.scene.children[0].geometry.attributes.position.getX(i);
      const y = state.scene.children[0].geometry.attributes.position.getY(i);
      const anim1 = 0.1 * Math.sin(x * time * 0.1);
      const anim2 = 0.15 * Math.sin(x * time * 0.1);
      const anim3 = 0.15 * Math.sin(y * time * 0.3);
      meshRef.current.geometry.attributes.position.setZ(
        i,
        anim1 + anim2 + anim3
      );
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
    if (isDark) {
      meshRef.current.material.color.set(0x444444);
    } else {
      meshRef.current.material.color.set(0xffffff);
    }

    meshRef.current.rotation.z = Math.sin(time * 0.15) * 0.01;
    easing.dampE(
      meshRef.current.rotation,
      [state.mouse.y / 5, state.mouse.x / 5, 0],
      1.2,
      delta
    );
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 7, 20, 20]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  );
};

export default Mesh;
