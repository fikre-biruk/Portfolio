import React from "react";
import { COLORS } from "@/src/lib/colors";

export const ArmLeft = () => {
  return (
    <group position={[-0.43, 1.31, 0]}>
      {/* Shoulder Joint */}
      <mesh>
        <sphereGeometry args={[0.082, 32, 32]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.2}
          metalness={0.45}
        />
      </mesh>

      {/* Upper Arm */}
      <mesh position={[0, -0.18, 0]}>
        <capsuleGeometry args={[0.065, 0.2, 8, 16]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.25}
          metalness={0.35}
        />
      </mesh>

      {/* Elbow Joint */}
      <mesh position={[0, -0.32, 0]}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial
          color={COLORS.joint}
          roughness={0.15}
          metalness={0.6}
        />
      </mesh>

      {/* Forearm */}
      <mesh position={[0, -0.45, 0]}>
        <capsuleGeometry args={[0.055, 0.16, 8, 16]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.25}
          metalness={0.35}
        />
      </mesh>

      {/* Hand */}
      <mesh position={[0, -0.565, 0]} scale={[1, 0.8, 0.65]}>
        <sphereGeometry args={[0.065, 24, 24]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.35}
          metalness={0.15}
        />
      </mesh>
    </group>
  );
};
