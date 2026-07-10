import { HeroScene } from "@/src/components/hero/scene/heroScene";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroScene />

      {/* Stage Layer */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Text Stage */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-[220%]
            "
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-5xl font-bold text-textPrimary">
                Your Name
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};