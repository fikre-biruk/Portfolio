import React from "react";
import { COLORS } from "@/src/lib/colors";

export const LegRight = () => {
  return (
    <group position={[0.19, 0.78, 0]}>
      {/* Hip Joint */}
      <mesh>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.2}
          metalness={0.45}
        />
      </mesh>

      {/* Upper Leg */}
      <mesh position={[0, -0.16, 0]}>
        <capsuleGeometry args={[0.08, 0.22, 8, 16]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.25}
          metalness={0.35}
        />
      </mesh>

      {/* Knee */}
      <mesh position={[0, -0.34, 0]}>
        <sphereGeometry args={[0.058, 32, 32]} />
        <meshStandardMaterial
          color="#B9C8DA"
          roughness={0.15}
          metalness={0.6}
        />
      </mesh>

      {/* Lower Leg */}
      <mesh position={[0, -0.5, 0]}>
        <capsuleGeometry args={[0.07, 0.22, 8, 16]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.25}
          metalness={0.35}
        />
      </mesh>

      {/* Foot */}
      <mesh position={[0, -0.72, 0.06]}>
        <boxGeometry args={[0.17, 0.085, 0.27]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.2}
          metalness={0.35}
        />
      </mesh>
    </group>
  );
};
