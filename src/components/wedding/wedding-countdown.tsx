"use client";

import { useEffect, useState } from "react";

type Props = {
  targetIso: string;
};

type RemainingTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  elapsed: boolean;
};

function calculateRemaining(targetIso: string): RemainingTime {
  const difference = Math.max(0, new Date(targetIso).getTime() - Date.now());

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    elapsed: difference === 0,
  };
}

export function WeddingCountdown({ targetIso }: Props) {
  const [remaining, setRemaining] = useState<RemainingTime | null>(null);

  useEffect(() => {
    const update = () => setRemaining(calculateRemaining(targetIso));
    update();
    const interval = window.setInterval(update, 1_000);
    return () => window.clearInterval(interval);
  }, [targetIso]);

  if (remaining?.elapsed) {
    return (
      <p className="wedding-serif text-center text-2xl font-semibold">
        Hari bahagia telah tiba
      </p>
    );
  }

  const values = [
    ["Hari", remaining?.days],
    ["Jam", remaining?.hours],
    ["Menit", remaining?.minutes],
    ["Detik", remaining?.seconds],
  ] as const;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Hitung mundur acara">
      {values.map(([label, value]) => (
        <div
          key={label}
          className="wedding-panel rounded-2xl px-4 py-5 text-center"
        >
          <strong className="wedding-serif block text-3xl">
            {value ?? "--"}
          </strong>
          <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
