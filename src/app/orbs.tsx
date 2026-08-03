/**
 * Wireframe "orb" glyphs that sit inline inside the display headline, the way
 * the reference site drops rotating 3D wireframes between words.
 * Pure SVG + CSS rotation — no WebGL needed at this size.
 */

type OrbProps = { className?: string };

export function OrbSphere({ className = "" }: OrbProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <g
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.85"
        className="spin-slow"
        style={{ transformOrigin: "50px 50px" }}
      >
        <circle cx="50" cy="50" r="34" />
        <ellipse cx="50" cy="50" rx="10" ry="34" />
        <ellipse cx="50" cy="50" rx="22" ry="34" />
        <ellipse cx="50" cy="50" rx="34" ry="12" />
        <ellipse
          cx="50"
          cy="50"
          rx="34"
          ry="20"
          transform="rotate(28 50 50)"
        />
      </g>
    </svg>
  );
}

export function OrbDiscs({ className = "" }: OrbProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <g
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.85"
        className="spin-slow"
        style={{ transformOrigin: "50px 50px", animationDuration: "34s" }}
      >
        {Array.from({ length: 7 }, (_, i) => (
          <ellipse
            key={`a${i}`}
            cx={38 + i * 0.6}
            cy={40 + i * 1.6}
            rx="17"
            ry="7"
            transform={`rotate(-24 ${38 + i * 0.6} ${40 + i * 1.6})`}
          />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <ellipse
            key={`b${i}`}
            cx={62 - i * 0.6}
            cy={60 - i * 1.6}
            rx="17"
            ry="7"
            transform={`rotate(-24 ${62 - i * 0.6} ${60 - i * 1.6})`}
          />
        ))}
      </g>
    </svg>
  );
}

export function OrbLens({ className = "" }: OrbProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <g
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.85"
        className="spin-slow"
        style={{ transformOrigin: "50px 50px", animationDuration: "40s" }}
      >
        {[0, 45, 90, 135].map((deg) => (
          <ellipse
            key={deg}
            cx="50"
            cy="50"
            rx="34"
            ry="15"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="15" />
      </g>
    </svg>
  );
}

/**
 * Seed-of-life mandala. `pathClass` is applied to every stroke so the scroll
 * engine can grab them and draw the figure in as the section scrubs.
 */
export function Mandala({
  className = "",
  pathClass = "",
}: {
  className?: string;
  pathClass?: string;
}) {
  const r = 26;
  const petals = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i;
    return { cx: 50 + r * Math.cos(angle), cy: 50 + r * Math.sin(angle) };
  });

  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="0.7" vectorEffect="non-scaling-stroke">
        <circle className={pathClass} cx="50" cy="50" r={r} />
        {petals.map((p, i) => (
          <circle
            key={i}
            className={pathClass}
            cx={p.cx}
            cy={p.cy}
            r={r}
          />
        ))}
        <circle className={pathClass} cx="50" cy="50" r={r * 2} opacity="0.55" />
      </g>
    </svg>
  );
}
