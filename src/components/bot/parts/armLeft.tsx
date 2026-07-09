import React from "react";
import { COLORS } from "@/src/lib/colors";

export const ArmLeft = () => {
  return (
    <group position={[-0.45, 1.32, 0]}>
      {/* Shoulder Joint */}
      <mesh>
        <sphereGeometry args={[0.09, 32, 32]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.2}
          metalness={0.45}
        />
      </mesh>

      {/* Upper Arm */}
      <mesh position={[0, -0.19, 0]}>
        <capsuleGeometry args={[0.07, 0.22, 8, 16]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.25}
          metalness={0.35}
        />
      </mesh>

      {/* Elbow Joint */}
      <mesh position={[0, -0.36, 0]}>
        <sphereGeometry args={[0.054, 32, 32]} />
        <meshStandardMaterial
          color="#B9C8DA"
          roughness={0.15}
          metalness={0.6}
        />
      </mesh>

      {/* Forearm */}
      <mesh position={[0, -0.52, 0]}>
        <capsuleGeometry args={[0.06, 0.18, 8, 16]} />
        <meshStandardMaterial
          color={COLORS.bot}
          roughness={0.25}
          metalness={0.35}
        />
      </mesh>
    </group>
  );
};
