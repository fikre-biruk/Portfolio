import React from "react";
import { RoundedBox } from "@react-three/drei";
import { COLORS } from "@/src/lib/colors";
import * as THREE from "three";

type HeadProps = {
  leftEyeRef?: React.RefObject<THREE.Mesh | null>;
  rightEyeRef?: React.RefObject<THREE.Mesh | null>;
};

export const Head = ({
  leftEyeRef,
  rightEyeRef,
}: HeadProps) => {
  return (
    <group position={[0, 1.92, 0]}>
      {/* Main Head Shell */}
      <RoundedBox args={[0.6, 0.52, 0.48]} radius={0.05} smoothness={4}>
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.12}
          metalness={0.35}
        />
      </RoundedBox>

      {/* Front Shell */}
      <RoundedBox
        args={[0.52, 0.43, 0.42]}
        radius={0.045}
        smoothness={4}
        position={[0, 0.01, 0.05]}
      >
        <meshStandardMaterial
          color={COLORS.panel}
          roughness={0.08}
          metalness={0.12}
        />
      </RoundedBox>

      {/* Face Display */}
      <RoundedBox
        args={[0.38, 0.15, 0.025]}
        radius={0.04}
        smoothness={4}
        position={[0, 0.022, 0.255]}
      >
        <meshStandardMaterial
          color={COLORS.bgDeep}
          roughness={0.05}
          metalness={0.8}
        />
      </RoundedBox>

      {/* Left Eye */}
      <mesh 
        ref={leftEyeRef}
        position={[-0.088, 0.022, 0.26]}
      >
        <sphereGeometry args={[0.036, 32, 32]} />
        <meshBasicMaterial 
          color={COLORS.glow}
          toneMapped={false}
        />
      </mesh>

      {/* Right Eye */}
      <mesh 
        ref={rightEyeRef}
        position={[0.088, 0.022, 0.26]}
      >
        <sphereGeometry args={[0.036, 32, 32]} />
        <meshBasicMaterial 
          color={COLORS.glow}
          toneMapped={false}
        />
      </mesh>

      {/* Left Side Panel */}
      <RoundedBox
        args={[0.045, 0.205, 0.26]}
        radius={0.015}
        smoothness={4}
        position={[-0.305, 0, 0]}
      >
        <meshStandardMaterial
          color={COLORS.joint}
          roughness={0.12}
          metalness={0.35}
        />
      </RoundedBox>

      {/* Right Side Panel */}
      <RoundedBox
        args={[0.045, 0.205, 0.26]}
        radius={0.015}
        smoothness={4}
        position={[0.305, 0, 0]}
      >
        <meshStandardMaterial
          color={COLORS.joint}
          roughness={0.12}
          metalness={0.35}
        />
      </RoundedBox>

      {/* Neck */}
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 0.15, 24]} />
        <meshStandardMaterial
          color={COLORS.joint}
          roughness={0.15}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
};
