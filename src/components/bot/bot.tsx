import { BotView } from "@/src/components/bot/botView";

export const Bot = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-30 h-30 rounded-2xl bg-zinc-900 flex items-center justify-center text-4xl">
        <BotView />
      </div>
    </div>
  );
}