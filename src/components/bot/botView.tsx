"use client";

import { Head } from "@/src/components/bot/parts/head";
import { Body } from "@/src/components/bot/parts/body";
import { ArmLeft } from "@/src/components/bot/parts/armLeft";
import { ArmRight } from "@/src/components/bot/parts/armRight";
import { LegLeft } from "@/src/components/bot/parts/legLeft";
import { LegRight } from "@/src/components/bot/parts/legRight";

export const BotView = () => {
  return (
    <group position={[0,1,0]}>
      <Head />
      <Body />
      <ArmLeft />
      <ArmRight />
      <LegLeft />
      <LegRight />
    </group>
  );
};