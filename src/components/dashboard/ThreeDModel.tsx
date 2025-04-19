
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text, Stars, Trail } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Mesh, Color } from "three";
import { trackEvent } from "@/utils/analytics";
import { useIsMobile } from "@/hooks/use-mobile";

interface NodeProps {
  position: [number, number, number];
  color: string;
  name: string;
  size?: number;
  speed?: number;
  onClick?: () => void;
}

const Node = ({ position, color, name, size = 1, speed = 0.01, onClick }: NodeProps) => {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Add a more dynamic motion to make it brutalist
      meshRef.current.rotation.x += delta * (speed + Math.sin(state.clock.elapsedTime * 0.5) * 0.005);
      meshRef.current.rotation.y += delta * (speed * 1.5 + Math.cos(state.clock.elapsedTime * 0.3) * 0.005);
    }
  });

  const handleClick = () => {
    setClicked(!clicked);
    trackEvent('modelInteraction', { node: name, action: clicked ? 'deselect' : 'select' });
    if (onClick) onClick();
  };

  // Brutalist faceted look for the objects
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
        {/* Use a more geometric, brutalist shape */}
        <dodecahedronGeometry args={[size, 0]} />
        <meshStandardMaterial 
          color={hovered ? "#8B5CF6" : color} 
          metalness={0.8} 
          roughness={0.2}
          emissive={clicked ? "#5E2CA5" : "#000000"}
          emissiveIntensity={clicked ? 0.8 : 0}
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
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {name}
      </Text>
      {clicked && (
        <Trail
          width={2}
          color={new Color(color)}
          length={8}
          decay={1}
          local={false}
          stride={0}
          interval={1}
        >
          <mesh position={position}>
            <dodecahedronGeometry args={[size * 1.05, 0]} />
            <meshBasicMaterial color={color} transparent opacity={0.2} />
          </mesh>
        </Trail>
      )}
    </>
  );
};

const ConnectionLine = ({ start, end, color }: { start: [number, number, number], end: [number, number, number], color: string }) => {
  const lineRef = useRef<any>();
  
  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.material.dashOffset = clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <line ref={lineRef}>
      <bufferGeometry attach="geometry">
        <float32BufferAttribute 
          attach="attributes-position" 
          array={new Float32Array([...start, ...end])} 
          count={2} 
          itemSize={3} 
        />
      </bufferGeometry>
      <lineDashedMaterial
        attach="material"
        color={color}
        dashSize={0.2}
        gapSize={0.1}
        linewidth={1}
        scale={1}
        onBeforeCompile={(shader) => {
          shader.fragmentShader = shader.fragmentShader.replace(
            'void main() {',
            `
            void main() {
            `
          );
        }}
      />
    </line>
  );
};

const ThreeDModel = () => {
  const [rotating, setRotating] = useState(true);
  const isMobile = useIsMobile();
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  // Adjust positions for mobile
  const scale = isMobile ? 0.7 : 1;
  const mainNodePosition: [number, number, number] = [0, 0, 0];
  const academiaPosition: [number, number, number] = [-2.5 * scale, 1.5 * scale, 0];
  const industryPosition: [number, number, number] = [2.5 * scale, 1.5 * scale, 0];
  const governmentPosition: [number, number, number] = [0, -2.5 * scale, 0];
  
  useEffect(() => {
    // Track when the model becomes visible
    trackEvent('modelInteraction', { action: 'viewModel' });
    
    // Disable rotation on mobile devices for better performance
    if (isMobile) {
      setRotating(false);
    }
  }, [isMobile]);
  
  const handleNodeClick = (nodeName: string) => {
    setActiveNode(activeNode === nodeName ? null : nodeName);
    trackEvent('modelInteraction', { action: 'nodeClick', node: nodeName });
  };

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['#0C0D16']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5E2CA5" />
        
        <Stars radius={100} depth={50} count={isMobile ? 500 : 1000} factor={4} saturation={0} fade speed={1} />
        
        {/* Connection lines - brutalist geometric connections */}
        <ConnectionLine start={mainNodePosition} end={academiaPosition} color="#9b87f5" />
        <ConnectionLine start={mainNodePosition} end={industryPosition} color="#7E69AB" />
        <ConnectionLine start={mainNodePosition} end={governmentPosition} color="#D6BCFA" />
        
        {/* Main HelixHub node */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
          <Node 
            position={mainNodePosition} 
            color="#5E2CA5" 
            name="HelixHub" 
            size={1.2} 
            onClick={() => handleNodeClick("HelixHub")}
          />
        </Float>
        
        {/* Triple Helix nodes */}
        <Node 
          position={academiaPosition} 
          color="#9b87f5" 
          name="Academia" 
          onClick={() => handleNodeClick("Academia")}
        />
        <Node 
          position={industryPosition} 
          color="#7E69AB" 
          name="Industry"
          onClick={() => handleNodeClick("Industry")}
        />
        <Node 
          position={governmentPosition} 
          color="#D6BCFA" 
          name="Government"
          onClick={() => handleNodeClick("Government")}
        />
        
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
          className="bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-none border-2 border-helix-purple text-sm backdrop-blur-sm"
        >
          {rotating ? "Stop Rotation" : "Auto Rotate"}
        </button>
      </div>
      
      {activeNode && (
        <div className="absolute top-4 left-4 right-4 bg-black/70 p-4 backdrop-blur-md border-l-4 border-helix-purple">
          <h3 className="text-lg font-bold mb-1">{activeNode}</h3>
          <p className="text-sm text-gray-300">
            {activeNode === "HelixHub" && "The central nexus connecting all sectors of the Triple Helix model."}
            {activeNode === "Academia" && "Educational institutions adapting curriculum based on real-time feedback."}
            {activeNode === "Industry" && "Business and market entities providing skill demand signals."}
            {activeNode === "Government" && "Policy makers optimizing resource allocation based on data."}
          </p>
        </div>
      )}
    </div>
  );
};

export default ThreeDModel;
