"use client";

import { useEffect, useState } from "react";

type MexicoCityClockProps = {
  compact?: boolean;
};

const mexicoCityTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Mexico_City",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

export function MexicoCityClock({ compact }: MexicoCityClockProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const formatted = mexicoCityTimeFormatter.format(now);

  return (
    <span
      className={`font-normal leading-[18px] tracking-[-0.6px] text-[#0f0f0f] tabular-nums ${
        compact ? "text-[15px]" : "text-[21px]"
      }`}
    >
      CDMX {formatted}
    </span>
  );
}
