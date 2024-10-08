import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoder from '../Loader';

const Computers = ({isMobile}) => {
const computer=useGLTF(isMobile?'./head/scene.gltf':'./desktop_pc/scene.gltf')
  return (
   <mesh position={isMobile?[-0.8,0,0.8]:[0,0,0]} >
    <hemisphereLight intensity={3} groundColor='black'/>
    <pointLight intensity={isMobile?2:2} position={[6,-1,2]}/>
    <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
    <primitive 
    object={computer.scene} 
    scale={isMobile?10:0.8}
    position={isMobile?[1.5, -3,0]:[0, -3.25, -1.5]}
    rotation={isMobile?[0,0.6,0]:[0, 0.35,-0.1]}
    onBeforeRender={(scene, camera, geometry, material) => {
      if (material) {
        material.metalness = 1;  // Maximum metalness for metallic effect
        material.roughness = 0.1;  // Low roughness for shiny surface
        material.envMapIntensity = 1;  // Enhance environment reflection
      }
    }}/>
   </mesh>
  )
}

const ComputersCanvas= () =>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Use the correct media query with 'px'
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Add event listener to handle media query changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas frameloop='demand'
    shadows
    camera={{position:isMobile?[30,3,5]:[20,3,5], fov:30}}
    gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoder/>}>
<OrbitControls 
enableZoom={false}
maxPolarAngle={Math.PI/2}
minPolarAngle={Math.PI/2}
/>
<Computers isMobile={isMobile}/>
      </Suspense>
<Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas