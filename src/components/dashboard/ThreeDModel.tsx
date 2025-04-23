import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text, Stars, Trail, Bounds, CameraShake } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Mesh, Color, MathUtils, Vector3, BufferGeometry, LineBasicMaterial } from "three";
import { motion } from "framer-motion";
import { trackEvent } from "@/utils/analytics";
import { useIsMobile } from "@/hooks/use-mobile";

interface NodeProps {
  position: [number, number, number];
  color: string;
  name: string;
  size?: number;
  speed?: number;
}

const Node = ({ position, color, name, size = 1, speed = 0.01 }: NodeProps) => {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * speed * 1.5;
      
      // Add slight floating effect
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  const handleClick = () => {
    setClicked(!clicked);
    trackEvent('modelInteraction', { node: name, action: clicked ? 'deselect' : 'select' });
  };

  return (
    <>
      <mesh
        position={position}
        ref={meshRef}
        scale={hovered ? 1.1 : 1}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Use more geometric shape for brutalist aesthetic */}
        {name === "HelixHub" ? (
          <octahedronGeometry args={[size, 0]} />
        ) : (
          <boxGeometry args={[size, size, size]} />
        )}
        <meshStandardMaterial 
          color={hovered ? "#8B5CF6" : color} 
          metalness={0.7} 
          roughness={0.2}
          emissive={clicked ? "#5E2CA5" : "#000000"}
          emissiveIntensity={clicked ? 0.5 : 0}
          flatShading={true}
        />
      </mesh>
      <Text
        position={[position[0], position[1] + size + 0.3, position[2]]}
        fontSize={0.3}
        color={clicked ? "#8B5CF6" : "white"}
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
        letterSpacing={0.05}
      >
        {name}
      </Text>
      {clicked && (
        <Trail
          width={1.5}
          color={new Color(color)}
          length={5}
          decay={1}
          local={false}
          stride={0}
          interval={1}
          attenuation={(width) => width}
        >
          <mesh position={position}>
            <sphereGeometry args={[size * 1.1, 16, 16]} />
            <meshBasicMaterial color={color} transparent opacity={0.2} />
          </mesh>
        </Trail>
      )}
      
      {/* Connection lines between nodes when main hub is clicked */}
      {clicked && name === "HelixHub" && (
        <>
          <Line start={position} end={[-2.5, 1.5, 0]} color="#9b87f5" />
          <Line start={position} end={[2.5, 1.5, 0]} color="#7E69AB" />
          <Line start={position} end={[0, -2.5, 0]} color="#D6BCFA" />
        </>
      )}
    </>
  );
};

// Fixed Line component to properly handle points using Vector3
const Line = ({ start, end, color }: { start: number[], end: number[], color: string }) => {
  // Convert arrays to Vector3 objects
  const startVector = new Vector3(start[0], start[1], start[2]);
  const endVector = new Vector3(end[0], end[1], end[2]);
  
  // Create and return a line with proper geometry
  return (
    <line>
      <bufferGeometry attach="geometry">
        <float32BufferAttribute attach="attributes-position" args={[
          [startVector.x, startVector.y, startVector.z, 
           endVector.x, endVector.y, endVector.z], 
          3
        ]} />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color={color} linewidth={1} />
    </line>
  );
};

const ThreeDModel = () => {
  const [rotating, setRotating] = useState(true);
  const [intensity, setIntensity] = useState(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Gradually increase intensity for smoother loading
    const timer = setTimeout(() => {
      setIntensity(1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const mainNodePosition: [number, number, number] = [0, 0, 0];
  const academiaPosition: [number, number, number] = [-2.5, 1.5, 0];
  const industryPosition: [number, number, number] = [2.5, 1.5, 0];
  const governmentPosition: [number, number, number] = [0, -2.5, 0];
  
  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-sm overflow-hidden brutal-border">
      <Canvas camera={{ position: [0, 0, 8], fov: isMobile ? 60 : 50 }} dpr={[1, 2]}>
        <color attach="background" args={["#121212"]} />
        <ambientLight intensity={0.5 * intensity} />
        <pointLight position={[10, 10, 10]} intensity={1 * intensity} />
        <pointLight position={[-10, -10, -10]} intensity={0.5 * intensity} color="#5E2CA5" />
        
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        
        {/* Main HelixHub node */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
          <Node position={mainNodePosition} color="#5E2CA5" name="HelixHub" size={1.2} />
        </Float>
        
        {/* Triple Helix nodes */}
        <Node position={academiaPosition} color="#9b87f5" name="Academia" />
        <Node position={industryPosition} color="#7E69AB" name="Industry" />
        <Node position={governmentPosition} color="#D6BCFA" name="Government" />

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
