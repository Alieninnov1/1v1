
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float, Line } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

interface NodeProps {
  position: [number, number, number];
  color: string;
  label: string;
  description?: string;
  onClick?: () => void;
}

const Node: React.FC<NodeProps> = ({ position, color, label, description, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => {
          setActive(!active);
          if (onClick) onClick();
        }}
        scale={hovered || active ? 1.2 : 1}
      >
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#8B5CF6" : color}
          metalness={0.7}
          roughness={0.2}
          emissive={hovered || active ? "#5E2CA5" : "#000000"}
          emissiveIntensity={hovered || active ? 0.6 : 0}
        />
        <Text
          position={[0, 1.0, 0]}
          fontSize={0.35}
          color={hovered ? "#8B5CF6" : "white"}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {label}
        </Text>
        {active && description && (
          <Text
            position={[0, -0.8, 0]}
            fontSize={0.15}
            color="white"
            maxWidth={2}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.01}
            outlineColor="#000000"
          >
            {description}
          </Text>
        )}
      </mesh>
    </Float>
  );
};

const ConnectingLine: React.FC<{start: [number, number, number], end: [number, number, number], color: string}> = ({
  start, end, color
}) => {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  
  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      dashed
      dashSize={0.2}
      gapSize={0.1}
    />
  );
};

const XPWindowFrame: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="absolute top-4 right-4 z-20 max-w-xs bg-white border-2 border-blue-700 rounded-t-md shadow-lg overflow-hidden xp-window-appear">
      <div className="bg-gradient-to-r from-[#0155b7] to-[#036ffc] px-2 py-1 flex items-center justify-between">
        <span className="text-white text-xs font-bold">Triple Helix Explorer</span>
        <div className="flex space-x-1">
          <button className="w-4 h-4 rounded-sm bg-gray-300 border border-gray-400" />
          <button className="w-4 h-4 rounded-sm bg-gray-300 border border-gray-400" />
          <button className="w-4 h-4 rounded-sm bg-red-500 border border-red-700" />
        </div>
      </div>
      <div className="bg-[#ECE9D8] p-3 text-xs">
        {children}
      </div>
    </div>
  );
};

const HelixModelDemo = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [nodeInfo, setNodeInfo] = useState({
    title: 'Triple Helix Model',
    content: 'Click on a node to explore connections between Academia, Industry, and Government.'
  });
  
  const handleNodeClick = (nodeName: string) => {
    setActiveNode(nodeName);
    
    switch(nodeName) {
      case 'Academia':
        setNodeInfo({
          title: 'Academia Node',
          content: 'Universities and research institutions provide knowledge and innovation. Connected to 34 regional colleges.'
        });
        break;
      case 'Industry':
        setNodeInfo({
          title: 'Industry Node',
          content: 'Business sector applies innovations and creates economic value. 127 companies participating.'
        });
        break;
      case 'Government':
        setNodeInfo({
          title: 'Government Node',
          content: 'Public sector creates policies and funding structures. 8 agencies involved in initiatives.'
        });
        break;
      default:
        setNodeInfo({
          title: 'Triple Helix Model',
          content: 'Click on a node to explore connections.'
        });
    }
  };

  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden border-4 border-[#0055E5] shadow-xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-helix-purple900/50 to-transparent z-10"
      />
      
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        className="bg-gradient-to-b from-gray-900 to-helix-purple900"
        shadows
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <spotLight position={[0, 10, 0]} intensity={0.8} castShadow />
        <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade />
        
        {/* Academia Node */}
        <Node 
          position={[0, 2, 0]} 
          color="#9b87f5" 
          label="Academia"
          description="Knowledge Creation" 
          onClick={() => handleNodeClick('Academia')}
        />
        
        {/* Industry Node */}
        <Node 
          position={[-2, -1, 0]} 
          color="#7E69AB" 
          label="Industry"
          description="Application & Value" 
          onClick={() => handleNodeClick('Industry')}
        />
        
        {/* Government Node */}
        <Node 
          position={[2, -1, 0]} 
          color="#6E59A5" 
          label="Government"
          description="Policy & Regulation" 
          onClick={() => handleNodeClick('Government')}
        />
        
        {/* Connecting Lines */}
        <ConnectingLine start={[0, 2, 0]} end={[-2, -1, 0]} color="#9b87f5" />
        <ConnectingLine start={[0, 2, 0]} end={[2, -1, 0]} color="#7E69AB" />
        <ConnectingLine start={[-2, -1, 0]} end={[2, -1, 0]} color="#6E59A5" />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={4}
          maxDistance={12}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      <XPWindowFrame>
        <h4 className="font-bold mb-1">{nodeInfo.title}</h4>
        <p className="text-gray-800">{nodeInfo.content}</p>
        {activeNode && (
          <div className="mt-2 pt-2 border-t border-gray-400">
            <div className="flex justify-between items-center">
              <span>Signal Strength:</span>
              <div className="w-24 h-2 bg-gray-300">
                <div className="h-full bg-green-600" style={{width: '76%'}}></div>
              </div>
            </div>
          </div>
        )}
      </XPWindowFrame>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <p className="text-sm text-white/70 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  );
};

export default HelixModelDemo;
