import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
// import GlobeImage from "../../assets/images/globeImage.svg";
import GlobeImage from "../../assets/images/new_trans_2.svg";

const Globe = () => {
  const [globeImage] = useLoader(TextureLoader, [GlobeImage]);

  const earthRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    earthRef.current.rotation.x = elapsedTime / 6;
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.9, 72, 72]} />
        <meshStandardMaterial map={globeImage} />
        <OrbitControls />
      </mesh>
    </>
  );
};

export default Globe;
