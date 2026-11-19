"use client";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const subscribe = (cb: () => void) => {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-tema"],
  });
  return () => obs.disconnect();
};

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const tema = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.tema || "terang",
    () => "terang"
  );

  const ganti = () => {
    const baru = tema === "gelap" ? "terang" : "gelap";
    document.documentElement.dataset.tema = baru;
    localStorage.setItem("tema", baru);
  };

  return (
    <button
      type="button"
      onClick={ganti}
      aria-label={tema === "gelap" ? "Mode terang" : "Mode gelap"}
      className={`flex items-center justify-center rounded-full border border-line text-ink-2
        hover:text-accent-deep hover:border-accent-line transition-colors ${
          compact ? "w-9 h-9" : "w-10 h-10"
        }`}
    >
      {tema === "gelap" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
