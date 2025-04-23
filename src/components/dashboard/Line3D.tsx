
import { Vector3 } from "three";

const Line3D = ({ start, end, color }: { start: number[], end: number[], color: string }) => {
  const startVector = new Vector3(start[0], start[1], start[2]);
  const endVector = new Vector3(end[0], end[1], end[2]);

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

export default Line3D;
