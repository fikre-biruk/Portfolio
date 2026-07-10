"use client";

import { Canvas } from "@react-three/fiber";
import { Bot } from "@/src/components/bot/bot";

export const HeroScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 1.4, 7],
          fov: 65,
        }}
      >
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[3, 5, 5]}
          intensity={2}
        />

        {/* Environment */}

        {/* Rope */}

        {/* Bot Stage */}
        <group position={[0, -6, 0]}>
          <Bot />
        </group>
      </Canvas>
    </div>
  );
};