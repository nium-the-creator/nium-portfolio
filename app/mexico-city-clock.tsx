"use client";

import { useEffect, useState } from "react";

type MexicoCityClockProps = {
  compact?: boolean;
  mobile?: boolean;
};

const nigerianTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const nigerianMobileTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

export function MexicoCityClock({ compact, mobile }: MexicoCityClockProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    const initialId = window.setTimeout(update, 0);
    const intervalId = window.setInterval(update, 1000);
    return () => {
      window.clearTimeout(initialId);
      window.clearInterval(intervalId);
    };
  }, []);

  const formatted = now
    ? mobile
      ? nigerianMobileTimeFormatter.format(now)
      : nigerianTimeFormatter.format(now)
    : mobile
      ? "--:-- --"
      : "--:--:-- --";

  return (
    <span
      className={`font-normal leading-[18px] tracking-[-0.6px] text-foreground tabular-nums ${
        mobile ? "text-[11px]" : compact ? "text-[15px]" : "text-[21px]"
      }`}
    >
      LAGOS {formatted}
    </span>
  );
}
