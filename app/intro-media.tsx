"use client";

import { useEffect, useRef, useState } from "react";

type IntroMediaProps = {
  videoSrc?: string;
};

export function IntroMedia({ videoSrc }: IntroMediaProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video || !videoSrc) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [videoSrc]);

  return (
    <div
      ref={rootRef}
      className="relative aspect-[691/482] w-full overflow-hidden rounded-[33px] bg-card"
    >
      {videoSrc ? (
        <video
          ref={videoRef}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          disablePictureInPicture
          loop
          muted
          playsInline
          preload="auto"
          src={videoSrc}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
        />
      ) : null}

      <div
        className={`absolute inset-0 bg-card transition-opacity duration-300 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
