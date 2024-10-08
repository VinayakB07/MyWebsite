import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
  const ref = useRef();
  
  // Generate random positions for points in a sphere
  let sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  // Helper function to filter out NaN values and ensure correct length
  const sanitizePositions = (positions) => {
    // Filter out NaN values and convert to Float32Array
    const validPositions = positions.filter(value => !isNaN(value));

    // Ensure the length is a multiple of 3
    const length = validPositions.length - (validPositions.length % 3);

    return validPositions.slice(0, length);
  };

  // Sanitize the sphere array
  sphere = sanitizePositions(sphere);

  // If there are no valid positions, return null to prevent rendering
  if (sphere.length === 0) {
    return null; // Prevent rendering if no valid positions
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial 
          transparent 
          color='#f272c8' 
          size={0.002} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
