import React from "react";
import { COLORS } from "@/src/lib/colors";

export const Head = () => {
  return (
    <group position={[0, 1.97, 0]}>
      {/* Main Head */}
      <mesh>
        <boxGeometry args={[0.68, 0.6, 0.56]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.12}
          metalness={0.35}
        />
      </mesh>

      {/* Front Shell */}
      <mesh position={[0, 0.01, 0.05]}>
        <boxGeometry args={[0.6, 0.5, 0.48]} />
        <meshStandardMaterial
          color="#F4F8FD"
          roughness={0.08}
          metalness={0.12}
        />
      </mesh>

      {/* Visor */}
      <mesh position={[0, 0.05, 0.285]}>
        <boxGeometry args={[0.42, 0.2, 0.02]} />
        <meshStandardMaterial
          color="#101827"
          roughness={0}
          metalness={1}
        />
      </mesh>

      {/* Left Eye */}
      <mesh position={[-0.1, 0.05, 0.3]}>
        <sphereGeometry args={[0.04, 32, 32]} />
        <meshStandardMaterial
          color="#72F7FF"
          emissive="#72F7FF"
          emissiveIntensity={10}
        />
      </mesh>

      {/* Right Eye */}
      <mesh position={[0.1, 0.05, 0.3]}>
        <sphereGeometry args={[0.04, 32, 32]} />
        <meshStandardMaterial
          color="#72F7FF"
          emissive="#72F7FF"
          emissiveIntensity={10}
        />
      </mesh>

      {/* Mouth Display */}
      <mesh position={[0, -0.08, 0.3]}>
        <boxGeometry args={[0.18, 0.03, 0.012]} />
        <meshStandardMaterial
          color="#72F7FF"
          emissive="#72F7FF"
          emissiveIntensity={4}
        />
      </mesh>

      {/* Left Mouth Corner */}
      <mesh position={[-0.11, -0.08, 0.301]} rotation={[0, 0, -0.45]}>
        <boxGeometry args={[0.03, 0.01, 0.012]} />
        <meshStandardMaterial
          color="#72F7FF"
          emissive="#72F7FF"
          emissiveIntensity={4}
        />
      </mesh>

      {/* Right Mouth Corner */}
      <mesh position={[0.11, -0.08, 0.301]} rotation={[0, 0, 0.45]}>
        <boxGeometry args={[0.03, 0.01, 0.012]} />
        <meshStandardMaterial
          color="#72F7FF"
          emissive="#72F7FF"
          emissiveIntensity={4}
        />
      </mesh>

      {/* Left Side Panel */}
      <mesh position={[-0.36, 0, 0]}>
        <boxGeometry args={[0.05, 0.24, 0.3]} />
        <meshStandardMaterial
          color="#D7E2EE"
          roughness={0.12}
          metalness={0.35}
        />
      </mesh>

      {/* Right Side Panel */}
      <mesh position={[0.36, 0, 0]}>
        <boxGeometry args={[0.05, 0.24, 0.3]} />
        <meshStandardMaterial
          color="#D7E2EE"
          roughness={0.12}
          metalness={0.35}
        />
      </mesh>

      {/* Neck */}
      <mesh position={[0, -0.38, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.14, 24]} />
        <meshStandardMaterial
          color="#BFCBDB"
          roughness={0.15}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
};