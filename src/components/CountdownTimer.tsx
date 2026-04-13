import { useEffect, useState } from "react";

const TARGET = new Date("2026-04-25T17:30:00+02:00").getTime();

const pad = (n: number) => String(n).padStart(2, "0");

const CountdownTimer = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const units = [
    { label: "DNI", value: pad(days) },
    { label: "GODZ", value: pad(hours) },
    { label: "MIN", value: pad(minutes) },
    { label: "SEK", value: pad(seconds) },
  ];

  return (
    <div className="flex gap-[clamp(1rem,3vw,3rem)]">
      {units.map((u, i) => (
        <div key={u.label} className="flex flex-col items-center">
          <span
            className="font-['Space_Mono'] text-[clamp(2rem,6vw,5rem)] leading-none text-[#e4e2dd] tabular-nums tracking-tight"
            style={{ transform: i % 2 === 1 ? "translateY(2px)" : undefined }}
          >
            {u.value}
          </span>
          <span className="font-['Space_Mono'] text-[10px] tracking-[0.3em] text-[#e4e2dd]/30 mt-2">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
