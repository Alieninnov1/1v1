
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text, Stars, Trail, Bounds, CameraShake } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Mesh, Color, MathUtils, Vector3 } from "three";
import { motion } from "framer-motion";
import { trackEvent } from "@/utils/analytics";
import { useIsMobile } from "@/hooks/use-mobile";
import Node3D from "./Node3D";

const ThreeDModel = () => {
  const [rotating, setRotating] = useState(true);
  const [intensity, setIntensity] = useState(0);
  const [hasError, setHasError] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Gradually increase intensity for smoother loading
    const timer = setTimeout(() => {
      setIntensity(1);
    }, 1000);

    // Add event listener for WebGL context loss
    const handleContextLoss = () => {
      console.error("THREE.WebGLRenderer: Context Lost.");
      setHasError(true);
    };

    window.addEventListener('webglcontextlost', handleContextLoss);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('webglcontextlost', handleContextLoss);
    };
  }, []);

  const mainNodePosition: [number, number, number] = [0, 0, 0];
  const academiaPosition: [number, number, number] = [-2.5, 1.5, 0];
  const industryPosition: [number, number, number] = [2.5, 1.5, 0];
  const governmentPosition: [number, number, number] = [0, -2.5, 0];
  
  if (hasError) {
    return (
      <div className="w-full h-[500px] md:h-[600px] rounded-sm overflow-hidden brutal-border flex items-center justify-center bg-gray-800/70">
        <div className="text-center p-8">
          <h3 className="text-xl font-bold text-red-400 mb-2">WebGL Context Lost</h3>
          <p className="text-gray-300">
            Your browser encountered a graphics issue. Try refreshing the page or using a different browser.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-sm overflow-hidden brutal-border">
      <Canvas
        camera={{ position: [0, 0, 8], fov: isMobile ? 60 : 50 }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          // Enable context preservation
          gl.preserveDrawingBuffer = true;
        }}
      >
        <color attach="background" args={["#121212"]} />
        <ambientLight intensity={0.5 * intensity} />
        <pointLight position={[10, 10, 10]} intensity={1 * intensity} />
        <pointLight position={[-10, -10, -10]} intensity={0.5 * intensity} color="#5E2CA5" />
        
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        
        {/* Main HelixHub node */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
          <Node3D position={mainNodePosition} color="#5E2CA5" name="HelixHub" size={1.2} />
        </Float>
        
        {/* Triple Helix nodes */}
        <Node3D position={academiaPosition} color="#9b87f5" name="Academia" />
        <Node3D position={industryPosition} color="#7E69AB" name="Industry" />
        <Node3D position={governmentPosition} color="#D6BCFA" name="Government" />

        {/* Camera shake for dynamic effect */}
        <CameraShake 
          maxYaw={0.01} 
          maxPitch={0.01} 
          maxRoll={0.01} 
          yawFrequency={0.5} 
          pitchFrequency={0.5} 
          rollFrequency={0.4} 
          intensity={0.1} 
        />
        
        <Bounds fit clip observe margin={1.2}>
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            minDistance={4}
            maxDistance={12}
            autoRotate={rotating}
            autoRotateSpeed={0.5}
            onChange={() => {
              if (rotating) {
                setRotating(false);
                trackEvent('modelInteraction', { action: 'manualControl' });
              }
            }}
          />
        </Bounds>
      </Canvas>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button 
          onClick={() => {
            setRotating(!rotating);
            trackEvent('modelInteraction', { action: rotating ? 'stopRotation' : 'startRotation' });
          }}
          className="helix-button text-sm flex items-center justify-center gap-2"
        >
          <span>{rotating ? "STOP ROTATION" : "AUTO ROTATE"}</span>
        </button>
      </motion.div>
    </div>
  );
};

export default ThreeDModel;
