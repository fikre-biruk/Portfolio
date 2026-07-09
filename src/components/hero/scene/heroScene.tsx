"use client";

import { Canvas } from "@react-three/fiber";
import { Bot } from "@/src/components/bot/bot";

export const HeroScene = () => {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{
          position: [0, 1.4, 7],
          fov: 65,
        }}
      >
        {/* Background color commented out */}
          <color /*attach="background"*/ args={["#0B1220"]} />

          <ambientLight intensity={1.2} />
          
          <directionalLight
            position={[3, 5, 5]}
            intensity={2}
          />

          {/* Environment */}

          {/* Rope */}

          <Bot />
      </Canvas>
    </div>
  );
};