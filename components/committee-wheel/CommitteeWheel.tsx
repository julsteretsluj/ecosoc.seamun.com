"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { SEAMUN_COMMITTEES } from "@/data/committees";

const TOTAL = SEAMUN_COMMITTEES.length;
const WHEEL_CX = 300;
const WHEEL_CY = 300;
const WHEEL_SIZE = 600;
const VINYL_RADIUS = 240; // outer edge of record
const CENTER_LABEL_RADIUS = 88; // paper label in the middle
const LABELS_RADIUS = 270; // committee names outside the vinyl circle
const LABEL_ARC_SPAN = 32; // degrees of arc each curved label spans
const CENTER_HOLE_RADIUS = 10; // spindle hole
const ANGLE_PER = 360 / TOTAL; // degrees per committee
const DRAG_THRESHOLD_PX = 8; // min movement to start drag (so clicks on labels still work)

// Full circle: labels evenly around; index 0 at top (90°), then clockwise.
const getAngle = (i: number) =>
  TOTAL <= 1 ? 90 : 90 - (360 * i) / TOTAL;

/** SVG path "d" for an arc at LABELS_RADIUS from (angle - span/2) to (angle + span/2). Sweep 0 = counter-clockwise so text curves outward. */
function getArcPath(angleDeg: number, spanDeg: number): string {
  const half = spanDeg / 2;
  const r = LABELS_RADIUS;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const x1 = WHEEL_CX + r * Math.cos(toRad(angleDeg - half));
  const y1 = WHEEL_CY - r * Math.sin(toRad(angleDeg - half));
  const x2 = WHEEL_CX + r * Math.cos(toRad(angleDeg + half));
  const y2 = WHEEL_CY - r * Math.sin(toRad(angleDeg + half));
  return `M ${x1} ${y1} A ${r} ${r} 0 0 0 ${x2} ${y2}`;
}

/** Pointer angle in degrees: 90 = top, same convention as getAngle. */
function getPointerAngle(clientX: number, clientY: number, rect: DOMRect): number {
  const cx = rect.left + (WHEEL_CX / WHEEL_SIZE) * rect.width;
  const cy = rect.top + (WHEEL_CY / WHEEL_SIZE) * rect.height;
  const dx = clientX - cx;
  const dy = cy - clientY; // screen Y is down, so invert for "up = positive"
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

const initialIndex = SEAMUN_COMMITTEES.findIndex((c) => c.isCurrent);
const defaultIndex = initialIndex >= 0 ? initialIndex : 0;

export default function CommitteeWheel({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(defaultIndex);
  const [entered, setEntered] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  // Drag state: only capture pointer after movement passes threshold so label clicks still work
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartIndex, setDragStartIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStart = useRef<{ index: number; lastAngle: number } | null>(null);

  const committee = SEAMUN_COMMITTEES[index] ?? SEAMUN_COMMITTEES[0];
  const isCurrent = committee.isCurrent;

  const go = useCallback((delta: number) => {
    setIndex((i) => (i + delta + TOTAL) % TOTAL);
  }, []);

  const pickRandom = useCallback(() => {
    setIndex(Math.floor(Math.random() * TOTAL));
  }, []);

  const handleEnter = useCallback(() => {
    if (committee.isCurrent) {
      setEntered(true);
    } else if (committee.href) {
      window.location.href = committee.href;
    }
  }, [committee]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!wheelRef.current) return;
      const rect = wheelRef.current.getBoundingClientRect();
      const angle = getPointerAngle(e.clientX, e.clientY, rect);
      dragStart.current = { index, lastAngle: angle };
      setDragStartIndex(index);
      setDragOffset(0);
      setIsDragging(false);
    },
    [index]
  );

  const hasCapture = useRef(false);
  const dragOffsetRef = useRef(0);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragStart.current || !wheelRef.current) return;
    const rect = wheelRef.current.getBoundingClientRect();
    const angle = getPointerAngle(e.clientX, e.clientY, rect);
    const { lastAngle } = dragStart.current;
    let delta = angle - lastAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    dragStart.current.lastAngle = angle;
    setDragOffset((prev) => {
      const next = prev + delta;
      dragOffsetRef.current = next;
      const movePx = Math.abs(next) * (rect.width / 360);
      if (!hasCapture.current && movePx >= DRAG_THRESHOLD_PX) {
        hasCapture.current = true;
        setIsDragging(true);
        setDragStartIndex(dragStart.current!.index);
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      }
      return next;
    });
  }, []);

  const commitDrag = useCallback(() => {
    if (!dragStart.current) return;
    if (hasCapture.current) {
      hasCapture.current = false;
      const offset = dragOffsetRef.current;
      const steps = Math.round(offset / ANGLE_PER);
      const startIdx = dragStart.current.index;
      setIndex((startIdx + steps + TOTAL * 100) % TOTAL);
    }
    dragOffsetRef.current = 0;
    setDragOffset(0);
    setIsDragging(false);
    dragStart.current = null;
  }, []);

  const onPointerUp = useCallback(() => {
    commitDrag();
  }, [commitDrag]);

  const onPointerLeave = useCallback(() => {
    if (dragStart.current) commitDrag();
  }, [commitDrag]);

  const displayIndex = isDragging
    ? (dragStartIndex + Math.round(dragOffset / ANGLE_PER) + TOTAL * 100) % TOTAL
    : index;
  const selectedAngle = getAngle(index);
  const rotationDeg = 90 - selectedAngle + (isDragging ? dragOffset : 0);
  const displayCommittee = SEAMUN_COMMITTEES[displayIndex] ?? SEAMUN_COMMITTEES[0];

  return (
    <AnimatePresence mode="wait">
      {!entered ? (
        <motion.div
          key="wheel"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
          className="fixed inset-0 z-[110] flex min-h-screen flex-col overflow-auto bg-[var(--un-deep-blue)] pt-6 pb-4"
        >
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              SEAMUN I 2027
            </h1>
            <p className="mt-1 text-sm text-white/70">Choose your committee</p>
          </div>

          {/* Full circle wheel: center logo + rings + labels */}
          <div className="relative mx-auto mt-6 flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4">
            <div
              ref={wheelRef}
              className="relative overflow-visible touch-none select-none cursor-grab active:cursor-grabbing"
              style={{ width: WHEEL_SIZE, height: WHEEL_SIZE, maxWidth: "100%" }}
              onPointerDownCapture={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerLeave}
              onPointerCancel={onPointerUp}
            >
              {/* Vinyl record: disc + grooves (SVG) */}
              <svg
                className="absolute left-0 top-0 h-full w-full pointer-events-none"
                viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Vinyl disc */}
                <defs>
                  <radialGradient id="vinylGradient" cx="35%" cy="35%" r="70%">
                    <stop offset="0%" stopColor="#2a2a2a" />
                    <stop offset="70%" stopColor="#0f0f0f" />
                    <stop offset="100%" stopColor="#0a0a0a" />
                  </radialGradient>
                  <filter id="vinylShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
                  </filter>
                </defs>
                <circle
                  cx={WHEEL_CX}
                  cy={WHEEL_CY}
                  r={VINYL_RADIUS}
                  fill="url(#vinylGradient)"
                  filter="url(#vinylShadow)"
                />
                {/* Grooves */}
                {Array.from({ length: 120 }, (_, i) => {
                  const r = CENTER_LABEL_RADIUS + 12 + i * 1.15;
                  if (r >= VINYL_RADIUS - 2) return null;
                  return (
                    <circle
                      key={i}
                      cx={WHEEL_CX}
                      cy={WHEEL_CY}
                      r={r}
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="0.5"
                    />
                  );
                })}
                {/* Center spindle hole */}
                <circle
                  cx={WHEEL_CX}
                  cy={WHEEL_CY}
                  r={CENTER_HOLE_RADIUS}
                  fill="#0a0a0a"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                />
              </svg>

              {/* Center label (paper): selected committee logo + name — static, not rotating */}
              <div
                className="absolute flex flex-col items-center justify-center gap-1.5 rounded-full border border-amber-200/30 bg-amber-50/95 shadow-inner ring-2 ring-black/10 pointer-events-none"
                style={{
                  left: WHEEL_CX,
                  top: WHEEL_CY,
                  width: CENTER_LABEL_RADIUS * 2,
                  height: CENTER_LABEL_RADIUS * 2,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center shrink-0">
                  {displayCommittee.logo ? (
                    <motion.img
                      key={displayCommittee.id}
                      src={`/committee-logos/${displayCommittee.logo}`}
                      alt=""
                      className="h-full w-full object-contain"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  ) : (
                    <span className="text-center text-xs font-bold text-amber-900/80">
                      {displayCommittee.shortName ?? displayCommittee.name}
                    </span>
                  )}
                </div>
                <motion.span
                  key={displayCommittee.id}
                  className="text-center text-xs font-semibold text-amber-900/90 max-w-[90%] truncate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {displayCommittee.shortName ?? displayCommittee.name}
                </motion.span>
              </div>

              {/* Rotating: curved labels surrounding the vinyl (SVG text on path) */}
              <motion.div
                className="absolute left-0 top-0"
                style={{
                  width: WHEEL_SIZE,
                  height: WHEEL_SIZE,
                  transformOrigin: `${WHEEL_CX}px ${WHEEL_CY}px`,
                }}
                animate={{ rotate: rotationDeg }}
                transition={
                  isDragging
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 280, damping: 30 }
                }
              >
                <svg
                  className="absolute left-0 top-0 h-full w-full overflow-visible"
                  viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden
                >
                  {SEAMUN_COMMITTEES.map((c, i) => {
                    const angle = getAngle(i);
                    const isSelected = i === displayIndex;
                    const arcD = getArcPath(angle, LABEL_ARC_SPAN);
                    const pathId = `label-path-${c.id}`;
                    const label = c.shortName ?? c.name;
                    return (
                      <g
                        key={c.id}
                        onClick={() => setIndex(i)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setIndex(i);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={label}
                        aria-pressed={isSelected}
                        style={{ cursor: "pointer" }}
                      >
                        <path id={pathId} d={arcD} fill="none" />
                        <text
                          fill={isSelected ? "rgb(254 243 199)" : "rgba(255,255,255,0.6)"}
                          fontSize={14}
                          fontFamily="system-ui, sans-serif"
                          fontWeight="500"
                          letterSpacing="0.15em"
                          style={{
                            textTransform: "uppercase",
                            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
                          }}
                        >
                          <textPath
                            href={`#${pathId}`}
                            startOffset="50%"
                            textAnchor="middle"
                          >
                            {label}
                          </textPath>
                        </text>
                        {/* Invisible wide stroke for easier click/tap */}
                        <path
                          d={arcD}
                          fill="none"
                          stroke="transparent"
                          strokeWidth={28}
                          style={{ pointerEvents: "stroke" }}
                        />
                        {isSelected && (
                          <circle
                            cx={WHEEL_CX + (LABELS_RADIUS + 14) * Math.cos((angle * Math.PI) / 180)}
                            cy={WHEEL_CY - (LABELS_RADIUS + 14) * Math.sin((angle * Math.PI) / 180)}
                            r={4}
                            fill="#fbbf24"
                            style={{ filter: "drop-shadow(0 0 2px rgba(0,0,0,0.5))" }}
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>
              </motion.div>
            </div>

            {/* Prev / Play (random) / Next */}
            <div className="mt-2 flex w-full max-w-[600px] items-center justify-between gap-2 px-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="rounded-full p-3 text-white/70 hover:bg-white/10 hover:text-white"
                aria-label="Previous committee"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={pickRandom}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Random committee"
                title="Pick a random committee"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="rounded-full p-3 text-white/70 hover:bg-white/10 hover:text-white"
                aria-label="Next committee"
              >
                ›
              </button>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-4 flex flex-col items-center gap-3 px-4">
            <button
              type="button"
              onClick={handleEnter}
              className="rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-[var(--un-deep-blue)] shadow-lg transition-all hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-white/80"
            >
              {isCurrent ? "Enter profile" : "Visit site"}
            </button>
            {isCurrent && (
              <p className="text-xs text-white/60">
                ECOSOC committee portal — topics, secretariat, resources
              </p>
            )}
          </div>

          <a
            href="https://seamun.com"
            target="_blank"
            rel="noreferrer"
            className="mt-4 block text-center text-sm text-white/50 underline-offset-2 hover:text-white/80"
          >
            seamun.com
          </a>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
