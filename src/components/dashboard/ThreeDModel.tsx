
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import { Mesh } from "three";

interface BoxProps {
  position: [number, number, number];
  color: string;
  size?: [number, number, number];
  speed?: number;
}

const Box = ({ position, color, size = [1, 1, 1], speed = 0.01 }: BoxProps) => {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * speed * 1.5;
    }
  });

  return (
    <mesh
      position={position}
      ref={meshRef}
      scale={hovered ? 1.1 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={hovered ? "#8B5CF6" : color} metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

interface PurpleSphereProps {
  position: [number, number, number];
  radius?: number;
}

const PurpleSphere = ({ position, radius = 1 }: PurpleSphereProps) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position} ref={meshRef}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial 
          color="#5E2CA5"
          metalness={0.8}
          roughness={0.2}
          emissive="#5E2CA5"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const ThreeDModel = () => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5E2CA5" />
        
        <PurpleSphere position={[0, 0, 0]} radius={0.8} />
        <Box position={[-1.5, 1.5, 0]} color="#9b87f5" size={[0.5, 0.5, 0.5]} speed={0.02} />
        <Box position={[1.5, 1.5, 0]} color="#7E69AB" size={[0.5, 0.5, 0.5]} speed={0.02} />
        <Box position={[0, -1.5, 0]} color="#D6BCFA" size={[0.5, 0.5, 0.5]} speed={0.02} />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
