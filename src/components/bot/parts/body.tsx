import React from "react";
import { RoundedBox } from "@react-three/drei";
import { COLORS } from "@/src/lib/colors";

export const Body = () => {
  return (
    <group position={[0, 1.2, 0]}>
      {/* Main Torso Shell */}
      <RoundedBox args={[0.74, 0.56, 0.42]} radius={0.05} smoothness={4}>
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.18}
          metalness={0.45}
        />
      </RoundedBox>

      {/* Front Armor */}
      <mesh position={[0, 0.02, 0.22]}>
        <boxGeometry args={[0.5, 0.32, 0.03]} />
        <meshStandardMaterial
          color="{COLORS.panel}"
          roughness={0.08}
          metalness={0.2}
        />
      </mesh>

      {/* Chest Ring */}
      <mesh position={[0, -0.03, 0.235]}>
        <torusGeometry args={[0.068, 0.011, 16, 64]} />
        <meshStandardMaterial
          color={COLORS.joint}
          roughness={0.15}
          metalness={0.7}
        />
      </mesh>

      {/* Energy Core */}
      <mesh position={[0, -0.03, 0.24]}>
        <sphereGeometry args={[0.044, 32, 32]} />
        <meshBasicMaterial 
          color={COLORS.glow}
          toneMapped={false}
        />
      </mesh>

      {/* Left Chest Light */}
      <mesh position={[-0.15, 0.1, 0.235]}>
        <boxGeometry args={[0.075, 0.022, 0.01]} />
        <meshBasicMaterial 
          color={COLORS.accent}
          toneMapped={false}
        />
      </mesh>

      {/* Right Chest Light */}
      <mesh position={[0.15, 0.1, 0.235]}>
        <boxGeometry args={[0.075, 0.022, 0.01]} />
        <meshBasicMaterial 
          color={COLORS.accent}
          toneMapped={false}
        />
      </mesh>

      {/* Left Shoulder */}
      <mesh position={[-0.43, 0.11, 0]}>
        <sphereGeometry args={[0.09, 32, 32]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.18}
          metalness={0.5}
        />
      </mesh>

      {/* Right Shoulder */}
      <mesh position={[0.43, 0.11, 0]}>
        <sphereGeometry args={[0.09, 32, 32]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.18}
          metalness={0.5}
        />
      </mesh>

      {/* Left Hip */}
      <mesh position={[-0.185, -0.31, 0]}>
        <sphereGeometry args={[0.07, 32, 32]} />
        <meshStandardMaterial
          color={COLORS.joint}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      {/* Right Hip */}
      <mesh position={[0.185, -0.31, 0]}>
        <sphereGeometry args={[0.07, 32, 32]} />
        <meshStandardMaterial
          color={COLORS.joint}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
};
