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

import { BOT_CONSTANTS } from "@/src/components/bot/core/constants";
// import { SpineRefs } from "@/src/components/bot/core/types";

export const Spine = () => {
  const characterRoot = useRef<THREE.Group>(null);

  const headPivot = useRef<THREE.Group>(null);
  const bodyPivot = useRef<THREE.Group>(null);

  const leftShoulderPivot = useRef<THREE.Group>(null);
  const rightShoulderPivot = useRef<THREE.Group>(null);

  const leftHipPivot = useRef<THREE.Group>(null);
  const rightHipPivot = useRef<THREE.Group>(null);

  const leftEye = useRef<THREE.Mesh>(null);
  const rightEye = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    /* Idle Breathing       */
    if (characterRoot.current) {
      characterRoot.current.position.y =
        BOT_CONSTANTS.character.position[1] +
        Math.sin(elapsed * BOT_CONSTANTS.idle.breathing.speed) *
          BOT_CONSTANTS.idle.breathing.amplitude;

      characterRoot.current.scale.y =
        1 +
        Math.sin(elapsed * BOT_CONSTANTS.idle.breathing.speed) *
          BOT_CONSTANTS.idle.breathing.scale;
    }


    /* Idle Head Movement   */
    if (headPivot.current) {
      headPivot.current.rotation.y =
        BOT_CONSTANTS.idle.head.baseYaw +
        Math.sin(elapsed * BOT_CONSTANTS.idle.head.yawSpeed) *
          BOT_CONSTANTS.idle.head.yawAmplitude;

      headPivot.current.rotation.z =
        Math.sin(elapsed * BOT_CONSTANTS.idle.head.rollSpeed) *
        BOT_CONSTANTS.idle.head.rollAmplitude;

      headPivot.current.position.y =
        BOT_CONSTANTS.pivots.head[1] +
        Math.sin(elapsed * BOT_CONSTANTS.idle.breathing.speed) *
          BOT_CONSTANTS.idle.head.bobAmplitude;
    }

    
    /* Idle Blinking        */
    const blinkCycle = BOT_CONSTANTS.idle.blink.cycle;
    const blinkDuration = BOT_CONSTANTS.idle.blink.duration;

    const timeInCycle = elapsed % blinkCycle;

    let eyeScaleY = 1;

    if (timeInCycle < blinkDuration) {
      eyeScaleY = Math.max(
        BOT_CONSTANTS.idle.blink.minimumScale,
        Math.abs(
          Math.cos((timeInCycle / blinkDuration) * Math.PI)
        )
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
      <group
        ref={characterRoot}
        name="CharacterRoot"
        position={BOT_CONSTANTS.character.position}
        rotation={BOT_CONSTANTS.character.rotation}
      >
        {/* Head */}
        <group
          ref={headPivot}
          name="HeadPivot"
          position={BOT_CONSTANTS.pivots.head}
          rotation={[0, BOT_CONSTANTS.idle.head.baseYaw, 0]}
        >
          <group position={[0, -1.9, 0]}>
            <Head
              leftEyeRef={leftEye}
              rightEyeRef={rightEye}
            />
          </group>
        </group>

        {/* Body */}
        <group
          ref={bodyPivot}
          name="BodyPivot"
          position={BOT_CONSTANTS.pivots.body}
        >
          <group position={[0, -1.2, 0]}>
            <Body />
          </group>
        </group>

        {/* Left Arm */}
        <group
          ref={leftShoulderPivot}
          name="LeftShoulderPivot"
          position={BOT_CONSTANTS.pivots.leftShoulder}
        >
          <group position={[0.43, -1.31, 0]}>
            <ArmLeft />
          </group>
        </group>

        {/* Right Arm */}
        <group
          ref={rightShoulderPivot}
          name="RightShoulderPivot"
          position={BOT_CONSTANTS.pivots.rightShoulder}
        >
          <group position={[-0.43, -1.31, 0]}>
            <ArmRight />
          </group>
        </group>

        {/* Left Leg */}
        <group
          ref={leftHipPivot}
          name="LeftHipPivot"
          position={BOT_CONSTANTS.pivots.leftHip}
        >
          <group position={[0.19, -0.78, 0]}>
            <LegLeft />
          </group>
        </group>

        {/* Right Leg */}
        <group
          ref={rightHipPivot}
          name="RightHipPivot"
          position={BOT_CONSTANTS.pivots.rightHip}
        >
          <group position={[-0.19, -0.78, 0]}>
            <LegRight />
          </group>
        </group>
      </group>
    </group>
  );
};