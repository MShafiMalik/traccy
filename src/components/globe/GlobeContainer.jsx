import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Globe from "./Globe";

const GlobeContainer = () => {
  return (
    <div className="ms-auto pb-3" style={{ width: "80%", height: "550px" }}>
      <Canvas>
        <Suspense fallback={null}>
          <pointLight position={[10, 10, 10]} />
          <Globe />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GlobeContainer;
