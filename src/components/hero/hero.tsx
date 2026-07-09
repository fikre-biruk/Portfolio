import { HeroScene } from "@/src/components/hero/scene/heroScene";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-16">
      
      {/* Left side */}
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Your Name</h1>
        <p className="text-lg text-zinc-400">Creative Developer</p>

        <button className="mt-4 px-6 py-3 rounded-xl bg-white text-black w-fit">
          Explore
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center">
        <HeroScene />
      </div>

    </section>
  );
}