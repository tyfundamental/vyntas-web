// Hero visual: an oscilloscope-style screen. One signal trace draws once on load,
// with the five things every Vyntas test measures marked along it.

const W = 560
const H = 360

// A signal that starts noisy and settles: the "measure before you conclude" idea.
function buildPath() {
  const pts: [number, number][] = []
  const n = 220
  for (let i = 0; i <= n; i++) {
    const t = i / n
    const x = 24 + t * (W - 48)
    const decay = Math.exp(-3.2 * t)
    const noise =
      Math.sin(t * 61) * 0.55 + Math.sin(t * 137 + 1.3) * 0.3 + Math.sin(t * 23 + 0.4) * 0.6
    const settle = Math.sin(t * 9.5) * 18 * (1 - decay) * 0.35
    const y = H * 0.66 - (noise * 78 * decay + settle) - t * 120
    pts.push([x, y])
  }
  return pts
}

const pts = buildPath()
const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
const markerIdx = [30, 72, 114, 156, 206]

export default function Trace({ markers, label }: { markers: string[]; label: string }) {
  return (
    <figure className="scope" aria-label={`${label}: ${markers.join(', ')}`}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-hidden="true">
        <defs>
          <pattern id="minor" width="14" height="14" patternUnits="userSpaceOnUse">
            <path d="M14 0H0V14" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </pattern>
          <pattern id="major" width="70" height="72" patternUnits="userSpaceOnUse">
            <path d="M70 0H0V72" fill="none" stroke="rgba(255,255,255,0.11)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#minor)" />
        <rect width={W} height={H} fill="url(#major)" />
        <line x1="0" y1={H / 2} x2={W} y2={H / 2} stroke="rgba(255,255,255,0.18)" strokeDasharray="2 5" />
        <path className="scope-glow" d={d} />
        <path className="scope-line" d={d} pathLength={1} />
        {markerIdx.map((idx, i) => {
          const [x, y] = pts[idx]
          const above = i % 2 === 1
          const ty = above ? 34 : H - 22
          const anchor = i === 0 ? 'start' : i === markerIdx.length - 1 ? 'end' : 'middle'
          const tx = i === 0 ? x - 10 : i === markerIdx.length - 1 ? x + 10 : x
          return (
            <g key={i} className="scope-marker" style={{ animationDelay: `${0.5 + i * 0.28}s` }}>
              <line
                x1={x}
                y1={above ? ty + 10 : y + 8}
                x2={x}
                y2={above ? y - 8 : ty - 20}
                stroke="rgba(255,255,255,0.35)"
                strokeDasharray="3 4"
              />
              <circle cx={x} cy={y} r="4.5" />
              <text x={tx} y={ty} textAnchor={anchor}>
                {markers[i]}
              </text>
            </g>
          )
        })}
      </svg>
      <figcaption>{label}</figcaption>
    </figure>
  )
}
