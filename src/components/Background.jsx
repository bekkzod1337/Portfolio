import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Rays = ({ targetPosition }) => {
  const mesh = useRef();

  // Generate the rays' starting positions and directions
  const rays = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 200; i++) {
      const position = [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ];
      const direction = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize();
      temp.push({ position, direction });
    }
    return temp;
  }, []);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0015;
      mesh.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={mesh}>
      {rays.map((ray, i) => {
        // Calculate direction from current position to the target position
        const directionToTarget = new THREE.Vector3(
          targetPosition.x - ray.position[0],
          targetPosition.y - ray.position[1],
          targetPosition.z - ray.position[2]
        ).normalize();

        return (
          <line key={i} position={ray.position}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([ 
                  ...ray.position, 
                  ...new THREE.Vector3(
                    ray.position[0] + directionToTarget.x,
                    ray.position[1] + directionToTarget.y,
                    ray.position[2] + directionToTarget.z
                  ).toArray() 
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#3B82F6" linewidth={2} />
          </line>
        );
      })}
    </group>
  );
};

const ThreeBackground = () => {
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(0, 0, 0));

  const handleMouseMove = (event) => {
    // Calculate the mouse position in normalized device coordinates (-1 to +1)
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the target position with depth (z-axis)
    setTargetPosition(new THREE.Vector3(x * 10, y * 10, 0)); // z-axis is 0 for now
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10"
      onMouseMove={handleMouseMove}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <Rays targetPosition={targetPosition} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
