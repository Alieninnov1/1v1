
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface NodeProps {
  position: [number, number, number];
  color: string;
  label: string;
}

const Node: React.FC<NodeProps> = ({ position, color, label }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#8B5CF6" : color}
          metalness={0.5}
          roughness={0.2}
          emissive={hovered ? "#5E2CA5" : "#000000"}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
        <Text
          position={[0, 0.8, 0]}
          fontSize={0.3}
          color={hovered ? "#8B5CF6" : "white"}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </mesh>
    </Float>
  );
};

const HelixModelDemo = () => {
  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-helix-purple900/50 to-transparent z-10"
      />
      
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        className="bg-gradient-to-b from-gray-900 to-helix-purple900"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />
        
        <Node position={[0, 2, 0]} color="#9b87f5" label="Academia" />
        <Node position={[-2, -1, 0]} color="#7E69AB" label="Industry" />
        <Node position={[2, -1, 0]} color="#6E59A5" label="Government" />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={4}
          maxDistance={12}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <p className="text-sm text-white/70 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  );
};

export default HelixModelDemo;
