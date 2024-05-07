import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Cone } from '@react-three/drei'

export default function RotatingCone({ position }) {
  
const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.00;
      meshRef.current.rotation.z += 0.005;
      meshRef.current.rotation.y -= 0.005;
    }
  });

  return (
    <Cone 
    ref={meshRef} 
    args={[1, 2, 64]}
    scale={0.4}
    position={position}
    >
      <meshStandardMaterial 
      color={'orange'} 
      roughness={0.3}
      metalness={1.0}
      />
    </Cone>
  );
}