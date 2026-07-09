import React from "react";
import { RoundedBox } from "@react-three/drei";
import { COLORS } from "@/src/lib/colors";

export const LegLeft = () => {
  return (
    <group position={[-0.19, 0.78, 0]}>
      {/* Hip Joint */}
      <mesh>
        <sphereGeometry args={[0.072, 32, 32]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.2}
          metalness={0.45}
        />
      </mesh>

      {/* Upper Leg */}
      <mesh position={[0, -0.16, 0]}>
        <capsuleGeometry args={[0.072, 0.22, 8, 16]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.25}
          metalness={0.35}
        />
      </mesh>

      {/* Knee */}
      <mesh position={[0, -0.34, 0]}>
        <sphereGeometry args={[0.052, 32, 32]} />
        <meshStandardMaterial
          color={COLORS.joint}
          roughness={0.15}
          metalness={0.6}
        />
      </mesh>

      {/* Lower Leg */}
      <mesh position={[0, -0.5, 0]}>
        <capsuleGeometry args={[0.062, 0.22, 8, 16]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.25}
          metalness={0.35}
        />
      </mesh>

      {/* Foot */}
      <RoundedBox
        args={[0.155, 0.075, 0.25]}
        radius={0.02}
        smoothness={4}
        position={[0, -0.72, 0.06]}
      >
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.2}
          metalness={0.35}
        />
      </RoundedBox>
    </group>
  );
};
