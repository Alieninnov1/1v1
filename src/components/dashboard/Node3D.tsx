
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Color } from "three";
import { Trail, Text } from "@react-three/drei";
import { trackEvent } from "@/utils/analytics";
import Line3D from "./Line3D";

interface NodeProps {
  position: [number, number, number];
  color: string;
  name: string;
  size?: number;
  speed?: number;
}

const Node3D = ({
  position,
  color,
  name,
  size = 1,
  speed = 0.01
}: NodeProps) => {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * speed * 1.5;
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
      {clicked && name === "HelixHub" && (
        <>
          <Line3D start={position} end={[-2.5, 1.5, 0]} color="#9b87f5" />
          <Line3D start={position} end={[2.5, 1.5, 0]} color="#7E69AB" />
          <Line3D start={position} end={[0, -2.5, 0]} color="#D6BCFA" />
        </>
      )}
    </>
  );
};

export default Node3D;
