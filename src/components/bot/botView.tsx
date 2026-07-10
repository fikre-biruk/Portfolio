"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { Head } from "@/src/components/bot/parts/head";
import { Body } from "@/src/components/bot/parts/body";
import { ArmLeft } from "@/src/components/bot/parts/armLeft";
import { ArmRight } from "@/src/components/bot/parts/armRight";
import { LegLeft } from "@/src/components/bot/parts/legLeft";
import { LegRight } from "@/src/components/bot/parts/legRight";

export const BotView = () => {
  const characterRoot = useRef<THREE.Group>(null);
  const leftEye = useRef<THREE.Mesh>(null);
  const rightEye = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!characterRoot.current) return;

    const elapsed = clock.getElapsedTime();

    /* Idle Breathing */

    characterRoot.current.position.y =
      0.9 + Math.sin(elapsed * 2) * 0.015;

    characterRoot.current.scale.y =
      1 + Math.sin(elapsed * 2) * 0.006;

    /* Idle Blinking */
    const blinkCycle = 4.8;
    const blinkDuration = 0.12;

    const timeInCycle = elapsed % blinkCycle;

    let eyeScaleY = 1;

    if (timeInCycle < blinkDuration) {
      eyeScaleY = Math.max(
        0.05,
        Math.abs(Math.cos((timeInCycle / blinkDuration) * Math.PI))
      );
    }

    if (leftEye.current) {
      leftEye.current.scale.y = eyeScaleY;
    }

    if (rightEye.current) {
      rightEye.current.scale.y = eyeScaleY;
    }
  });

  return (
    <group>
      {/* CharacterRoot
          Single parent transform for future animation control.
      */}
      <group
        ref={characterRoot}
        name="CharacterRoot"
        position={[0, 0.9, 0]}
        rotation={[0, 0, 0]}
      >
        {/* Head */}
        <group
          position={[0, 0.02, 0]}
          rotation={[0, -0.03, 0]}
        >
          <Head
            leftEyeRef={leftEye}
            rightEyeRef={rightEye}
          />
        </group>

        {/* Body */}
        <group>
          <Body />
        </group>

        {/* Arms */}
        <group
          position={[0, -0.01, 0]}
          rotation={[0, 0, 0]}
        >
          <ArmLeft />
          <ArmRight />
        </group>

        {/* Legs */}
        <group rotation={[0, 0, 0]}>
          <LegLeft />
          <LegRight />
        </group>
      </group>
    </group>
  );
};