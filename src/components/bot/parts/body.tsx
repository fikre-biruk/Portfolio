import React from "react";
import { COLORS } from "@/src/lib/colors";

export const Body = () => {
  return (
    <group position={[0, 1.2, 0]}>
      {/* Main Torso */}
      <mesh>
        <boxGeometry args={[0.78, 0.58, 0.44]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.18}
          metalness={0.45}
        />
      </mesh>

      {/* Front Armor */}
      <mesh position={[0, 0.02, 0.235]}>
        <boxGeometry args={[0.54, 0.34, 0.03]} />
        <meshStandardMaterial
          color="#F2F6FC"
          roughness={0.08}
          metalness={0.2}
        />
      </mesh>

      {/* Chest Ring */}
      <mesh position={[0, -0.03, 0.255]}>
        <torusGeometry args={[0.08, 0.012, 16, 64]} />
        <meshStandardMaterial
          color="#AFC8E8"
          roughness={0.15}
          metalness={0.7}
        />
      </mesh>

      {/* Energy Core */}
      <mesh position={[0, -0.03, 0.26]}>
        <sphereGeometry args={[0.048, 32, 32]} />
        <meshStandardMaterial
          color="#66F5FF"
          emissive="#66F5FF"
          emissiveIntensity={6}
        />
      </mesh>

      {/* Left Chest Light */}
      <mesh position={[-0.17, 0.11, 0.255]}>
        <boxGeometry args={[0.086, 0.025, 0.01]} />
        <meshStandardMaterial
          color={COLORS.accent}
          emissive={COLORS.accent}
          emissiveIntensity={3}
        />
      </mesh>

      {/* Right Chest Light */}
      <mesh position={[0.17, 0.11, 0.255]}>
        <boxGeometry args={[0.086, 0.025, 0.01]} />
        <meshStandardMaterial
          color={COLORS.accent}
          emissive={COLORS.accent}
          emissiveIntensity={3}
        />
      </mesh>

      {/* Left Shoulder */}
      <mesh position={[-0.45, 0.12, 0]}>
        <sphereGeometry args={[0.095, 32, 32]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.18}
          metalness={0.5}
        />
      </mesh>

      {/* Right Shoulder */}
      <mesh position={[0.45, 0.12, 0]}>
        <sphereGeometry args={[0.095, 32, 32]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.18}
          metalness={0.5}
        />
      </mesh>

      {/* Left Hip */}
      <mesh position={[-0.19, -0.32, 0]}>
        <sphereGeometry args={[0.072, 32, 32]} />
        <meshStandardMaterial
          color="#C5D4E5"
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      {/* Right Hip */}
      <mesh position={[0.19, -0.32, 0]}>
        <sphereGeometry args={[0.072, 32, 32]} />
        <meshStandardMaterial
          color="#C5D4E5"
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
};
