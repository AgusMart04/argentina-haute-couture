import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SolDeMayo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <g fill="currentColor">
        <circle cx="50" cy="50" r="14" />
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * 360) / 16;
          return (
            <rect
              key={i}
              x="49"
              y="6"
              width="2"
              height="22"
              rx="1"
              transform={`rotate(${a} 50 50)`}
            />
          );
        })}
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * 360) / 16 + 11.25;
          return (
            <polygon
              key={`w${i}`}
              points="50,10 51.5,24 48.5,24"
              transform={`rotate(${a} 50 50)`}
            />
          );
        })}
      </g>
    </svg>
  );
}
