"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], summary, label, [data-cursor="hover"]';
const EDITABLE_SELECTOR =
  'input, textarea, select, [contenteditable="true"], [contenteditable=""]';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const supportsPointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!cursor || !supportsPointer || reduceMotion) return;

    let rafId: number | null = null;
    let x = -100;
    let y = -100;

    document.documentElement.classList.add("has-custom-cursor");

    const render = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      rafId = null;
    };

    const scheduleRender = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(render);
      }
    };

    const moveCursor = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      scheduleRender();

      const target =
        event.target instanceof Element ? event.target : undefined;
      const overEditable = Boolean(target?.closest(EDITABLE_SELECTOR));
      const overInteractive = Boolean(
        !overEditable && target?.closest(INTERACTIVE_SELECTOR),
      );

      cursor.classList.toggle("is-visible", !overEditable);
      cursor.classList.toggle("is-active", overInteractive);
    };

    const hideCursor = () => {
      cursor.classList.remove("is-visible", "is-active", "is-pressed");
    };

    const pressCursor = () => cursor.classList.add("is-pressed");
    const releaseCursor = () => cursor.classList.remove("is-pressed");

    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("pointerleave", hideCursor);
    window.addEventListener("blur", hideCursor);
    window.addEventListener("pointerdown", pressCursor, { passive: true });
    window.addEventListener("pointerup", releaseCursor, { passive: true });

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
      window.removeEventListener("pointerdown", pressCursor);
      window.removeEventListener("pointerup", releaseCursor);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor-dot" />
    </div>
  );
}
