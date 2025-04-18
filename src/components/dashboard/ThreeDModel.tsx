
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text, Stars, Trail, useTexture } from "@react-three/drei";
import { useRef, useState, Suspense } from "react";
import { Mesh, Color } from "three";
import { trackEvent } from "@/utils/analytics";

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
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#8B5CF6" : color} 
          metalness={0.5} 
          roughness={0.2}
          emissive={clicked ? "#5E2CA5" : "#000000"}
          emissiveIntensity={clicked ? 0.5 : 0}
        />
      </mesh>
      <Text
        position={[position[0], position[1] + size + 0.3, position[2]]}
        fontSize={0.3}
        color={clicked ? "#8B5CF6" : "white"}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
      {clicked && (
        <Trail
          width={1}
          color={new Color(color)}
          length={5}
          decay={1}
          local={false}
          stride={0}
          interval={1}
        >
          <mesh position={position}>
            <sphereGeometry args={[size * 1.05, 16, 16]} />
            <meshBasicMaterial color={color} transparent opacity={0.2} />
          </mesh>
        </Trail>
      )}
    </>
  );
};

interface ConnectorProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
}

const Connector = ({ start, end, color = "#5E2CA5" }: ConnectorProps) => {
  const meshRef = useRef<Mesh>(null!);
  
  // Calculate the midpoint
  const midX = (start[0] + end[0]) / 2;
  const midY = (start[1] + end[1]) / 2;
  const midZ = (start[2] + end[2]) / 2;
  
  // Calculate distance
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const dz = end[2] - start[2];
  const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
  
  // Calculate rotation
  const rotX = Math.atan2(Math.sqrt(dx * dx + dz * dz), dy);
  const rotZ = Math.atan2(dz, dx);
  
  return (
    <mesh 
      ref={meshRef} 
      position={[midX, midY, midZ]}
      rotation={[rotX, 0, rotZ]}
    >
      <cylinderGeometry args={[0.05, 0.05, distance, 8]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
};

const ThreeDModel = () => {
  const [rotating, setRotating] = useState(true);
  const mainNodePosition: [number, number, number] = [0, 0, 0];
  const academiaPosition: [number, number, number] = [-2.5, 1.5, 0];
  const industryPosition: [number, number, number] = [2.5, 1.5, 0];
  const governmentPosition: [number, number, number] = [0, -2.5, 0];
  
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5E2CA5" />
        
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
          
          {/* Main HelixHub node */}
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <Node position={mainNodePosition} color="#5E2CA5" name="HelixHub" size={1.2} />
          </Float>
          
          {/* Triple Helix nodes */}
          <Node position={academiaPosition} color="#9b87f5" name="Academia" />
          <Node position={industryPosition} color="#7E69AB" name="Industry" />
          <Node position={governmentPosition} color="#D6BCFA" name="Government" />
          
          {/* Connectors */}
          <Connector start={mainNodePosition} end={academiaPosition} />
          <Connector start={mainNodePosition} end={industryPosition} />
          <Connector start={mainNodePosition} end={governmentPosition} />
          <Connector start={academiaPosition} end={industryPosition} color="#4B5563" />
          <Connector start={industryPosition} end={governmentPosition} color="#4B5563" />
          <Connector start={governmentPosition} end={academiaPosition} color="#4B5563" />
        </Suspense>
        
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
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={() => {
            setRotating(!rotating);
            trackEvent('modelInteraction', { action: rotating ? 'stopRotation' : 'startRotation' });
          }}
          className="bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-purple-500/30"
        >
          {rotating ? "Stop Rotation" : "Auto Rotate"}
        </button>
      </div>
    </div>
  );
};

export default ThreeDModel;
