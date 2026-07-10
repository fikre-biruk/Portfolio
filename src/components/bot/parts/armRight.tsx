import React from "react";
import { RoundedBox } from "@react-three/drei";
import { COLORS } from "@/src/lib/colors";

export const ArmRight = () => {
  return (
    <group position={[0.43, 1.31, 0]}>
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

      {/* Elbow */}
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

      {/* Wrist */}
      <mesh position={[0, -0.58, 0]}>
        <sphereGeometry args={[0.038, 24, 24]} />
        <meshStandardMaterial
          color="{COLORS.joint}"
          metalness={0.7}
          roughness={0.15}
        />
      </mesh>

      {/* Palm */}
      <RoundedBox
        args={[0.09, 0.06, 0.08]}
        radius={0.02}
        smoothness={4}
        position={[0, -0.65, 0]}
      >
        <meshStandardMaterial
          color="{COLORS.panel}"
          roughness={0.18}
          metalness={0.3}
        />
      </RoundedBox>

      {/* Thumb */}
      <RoundedBox
        args={[0.025, 0.06, 0.025]}
        radius={0.01}
        smoothness={4}
        position={[0.045, -0.64, 0.015]}
        rotation={[0, 0, 0.55]}
      >
        <meshStandardMaterial color={COLORS.bot} />
      </RoundedBox>

      {/* Left Finger */}
      <RoundedBox
        args={[0.02, 0.075, 0.02]}
        radius={0.01}
        smoothness={4}
        position={[-0.018, -0.72, 0]}
      >
        <meshStandardMaterial color={COLORS.bot} />
      </RoundedBox>

      {/* Right Finger */}
      <RoundedBox
        args={[0.02, 0.075, 0.02]}
        radius={0.01}
        smoothness={4}
        position={[0.018, -0.72, 0]}
      >
        <meshStandardMaterial color={COLORS.bot} />
      </RoundedBox>
    </group>
  );
};