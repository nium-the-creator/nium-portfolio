"use client";

import { useEffect, useState } from "react";

export function MexicoCityClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const formatted = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Mexico_City",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(now);

  return (
    <span className="text-[21px] font-normal leading-[18px] tracking-[-0.6px] text-[#0f0f0f]">
      CDMX {formatted}
    </span>
  );
}
