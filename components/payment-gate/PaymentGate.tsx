"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const CARD_IMAGE = "/ECOSOC.png";

export default function PaymentGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [success, setSuccess] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const unlock = useCallback(() => {
    setSuccess(true);
    setTimeout(() => setUnlocked(true), 1200);
  }, []);

  const cardOverDropZone = useCallback(() => {
    const card = cardRef.current;
    const zone = dropZoneRef.current;
    if (!card || !zone) return false;
    const cr = card.getBoundingClientRect();
    const zr = zone.getBoundingClientRect();
    return (
      cr.left < zr.right &&
      cr.right > zr.left &&
      cr.top < zr.bottom &&
      cr.bottom > zr.top
    );
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      const card = cardRef.current;
      if (!card) return;
      isDragging.current = true;
      const r = card.getBoundingClientRect();
      dragOffset.current = { x: e.clientX - r.left, y: e.clientY - r.top };
      setPos({ x: r.left, y: r.top });
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      setPos({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    },
    []
  );

  const handlePointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (cardOverDropZone()) {
      unlock();
    } else {
      setPos(null);
    }
  }, [cardOverDropZone, unlock]);

  return (
    <AnimatePresence mode="wait">
      {!unlocked ? (
        <motion.div
          key="gate"
          role="dialog"
          aria-labelledby="gate-title"
          aria-describedby="gate-desc"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--un-deep-blue)] p-6"
        >
        <div className="relative flex flex-col items-center text-center">
          <h2
            id="gate-title"
            className="text-xl font-bold tracking-tight text-white md:text-2xl"
          >
            Delegate access
          </h2>
          <p
            id="gate-desc"
            className="mt-2 max-w-sm text-sm text-white/80"
          >
            Drag your ECOSOC committee card onto the reader to continue.
          </p>

          {/* Terminal / reader with drop zone */}
          <div className="relative mt-6 inline-block min-h-[200px]">
            <div
              ref={dropZoneRef}
              className="absolute inset-0"
              aria-hidden
            />
            <div className="relative min-h-[180px] min-w-[280px] md:min-w-[320px]">
              <Image
                src="/terminal.png"
                alt="Payment terminal — drop your card here"
                width={320}
                height={280}
                className="block h-auto w-full min-w-[280px] max-w-[320px] object-contain"
                style={{ minHeight: 180 }}
              />
            </div>
          </div>

          {/* Draggable card */}
          <motion.div
            ref={cardRef}
            role="img"
            aria-label="ECOSOC committee card — drag onto reader"
            className="fixed z-10 cursor-grab touch-none select-none active:cursor-grabbing"
            style={{
              width: "clamp(100px, 22vw, 140px)",
              ...(pos
                ? { left: pos.x, top: pos.y, transform: "none" }
                : {
                    left: "50%",
                    top: "55%",
                    transform: "translate(-50%, -50%)",
                  }),
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onPointerCancel={handlePointerUp}
            animate={success ? { scale: [1, 1.05, 1], opacity: 0.9 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="ecosoc-gate-card-wrap overflow-hidden rounded-xl">
              <div className="aspect-[1.586/1] relative w-full">
                <img
                  src={CARD_IMAGE}
                  alt=""
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-contain p-1"
                />
              </div>
            </div>
          </motion.div>

          <p className="mt-32 text-xs text-white/60 md:mt-36">
            Drag the card onto the reader to tap to pay
          </p>

          <AnimatePresence>
            {success && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 font-semibold text-emerald-300"
              >
                Payment accepted. Welcome.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={unlock}
            className="mt-6 text-sm text-white/60 underline underline-offset-2 transition-colors hover:text-white/90"
          >
            Skip — enter without card
          </button>
        </div>
      </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
