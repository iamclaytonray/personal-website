// Abstract cartographic map of the operating region.
// Uses a fabricated equirectangular projection (85°E → 135°E, 25°N → -10°S)
// mapped onto a 900×540 viewBox.
//
// Positions are approximate — this is a schematic, not a survey.

type City = {
  name: string;
  label?: string;
  lat: number;
  lon: number;
  ref?: boolean; // just a reference dot, no label
};

const cities: City[] = [
  { name: "Bangkok", label: "BANGKOK", lat: 13.75, lon: 100.5 },
  { name: "Chiang Mai", label: "CHIANG MAI", lat: 18.79, lon: 98.98, ref: true },
  { name: "Hanoi", label: "HANOI", lat: 21.03, lon: 105.85 },
  { name: "Ho Chi Minh City", label: "HO CHI MINH", lat: 10.76, lon: 106.6 },
  { name: "Vientiane", label: "VIENTIANE", lat: 17.97, lon: 102.6, ref: true },
  { name: "Phnom Penh", label: "PHNOM PENH", lat: 11.55, lon: 104.92, ref: true },
  { name: "Yangon", label: "YANGON", lat: 16.8, lon: 96.15, ref: true },
  { name: "Kuala Lumpur", label: "KUALA LUMPUR", lat: 3.14, lon: 101.69 },
  { name: "Singapore", label: "SINGAPORE", lat: 1.29, lon: 103.85 },
  { name: "Jakarta", label: "JAKARTA", lat: -6.2, lon: 106.8 },
  { name: "Manila", label: "MANILA", lat: 14.6, lon: 120.97 },
  { name: "Taipei", label: "TAIPEI", lat: 25, lon: 121.5, ref: true },
  { name: "Hong Kong", label: "HONG KONG", lat: 22.3, lon: 114.17, ref: true },
];

// projection helpers — viewBox 900 × 540
const W = 900;
const H = 540;
const LON_MIN = 85;
const LON_MAX = 135;
const LAT_MIN = -10;
const LAT_MAX = 25;

const px = (lon: number) => ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * W;
const py = (lat: number) => ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H;

export function FieldMap() {
  const bangkok = cities.find((c) => c.name === "Bangkok")!;
  const bkx = px(bangkok.lon);
  const bky = py(bangkok.lat);

  // Tampa is outside the map — represented as an off-frame marker with an arc
  const tampaX = 36;
  const tampaY = 42;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className="block h-auto w-full"
      aria-label="Schematic map of Southeast Asia centered on Bangkok"
      role="img"
    >
      {/* Plate number corner */}
      <g>
        <text
          x={24}
          y={30}
          fontFamily="var(--font-mono)"
          fontSize={11}
          fill="var(--color-ink)"
          letterSpacing="1.8"
        >
          PL. II — FIELD MAP
        </text>
        <text
          x={W - 24}
          y={30}
          textAnchor="end"
          fontFamily="var(--font-mono)"
          fontSize={11}
          fill="var(--color-ink)"
          letterSpacing="1.4"
        >
          EQUIRECTANGULAR / APPROX
        </text>
      </g>

      {/* Latitude / longitude grid */}
      <g stroke="var(--color-ink)" strokeWidth={0.4} opacity={0.22}>
        {Array.from({ length: 6 }).map((_, i) => {
          const lon = LON_MIN + (i + 1) * 8;
          return (
            <line
              key={`x-${i}`}
              x1={px(lon)}
              y1={50}
              x2={px(lon)}
              y2={H - 50}
            />
          );
        })}
        {Array.from({ length: 4 }).map((_, i) => {
          const lat = LAT_MAX - (i + 1) * 7;
          return (
            <line
              key={`y-${i}`}
              x1={40}
              y1={py(lat)}
              x2={W - 40}
              y2={py(lat)}
            />
          );
        })}
      </g>

      {/* Latitude labels (left edge) */}
      <g
        fontFamily="var(--font-mono)"
        fontSize={9}
        fill="var(--color-mute)"
        letterSpacing="0.6"
      >
        {[20, 10, 0, -10].map((lat, i) => (
          <text key={i} x={44} y={py(lat) - 4}>
            {Math.abs(lat)}°{lat >= 0 ? "N" : "S"}
          </text>
        ))}
      </g>

      {/* Longitude labels (bottom edge) */}
      <g
        fontFamily="var(--font-mono)"
        fontSize={9}
        fill="var(--color-mute)"
        letterSpacing="0.6"
      >
        {[95, 105, 115, 125].map((lon, i) => (
          <text
            key={i}
            x={px(lon)}
            y={H - 56}
            textAnchor="middle"
          >
            {lon}°E
          </text>
        ))}
      </g>

      {/* Inner frame */}
      <rect
        x={40}
        y={50}
        width={W - 80}
        height={H - 100}
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth={0.9}
        opacity={0.5}
      />

      {/* Corner crosses on the inner frame */}
      {[
        [40, 50],
        [W - 40, 50],
        [40, H - 50],
        [W - 40, H - 50],
      ].map(([x, y], i) => (
        <g key={i} stroke="var(--color-ink)" strokeWidth={1}>
          <line x1={x - 5} y1={y} x2={x + 5} y2={y} />
          <line x1={x} y1={y - 5} x2={x} y2={y + 5} />
        </g>
      ))}

      {/* Cities */}
      {cities.map((c) => {
        const x = px(c.lon);
        const y = py(c.lat);
        const isBkk = c.name === "Bangkok";
        if (isBkk) return null;
        return (
          <g key={c.name}>
            <circle
              cx={x}
              cy={y}
              r={c.ref ? 1.6 : 2.6}
              fill="var(--color-ink)"
            />
            {!c.ref && c.label && (
              <text
                x={x + 8}
                y={y + 3}
                fontFamily="var(--font-mono)"
                fontSize={9}
                fill="var(--color-ink)"
                letterSpacing="0.8"
              >
                {c.label}
              </text>
            )}
            {c.ref && c.label && (
              <text
                x={x + 6}
                y={y - 5}
                fontFamily="var(--font-mono)"
                fontSize={8}
                fill="var(--color-mute)"
                letterSpacing="0.4"
              >
                {c.label}
              </text>
            )}
          </g>
        );
      })}

      {/* Bangkok — the prominent crosshair */}
      <g>
        {/* Concentric range rings */}
        {[28, 56, 100].map((r, i) => (
          <circle
            key={r}
            cx={bkx}
            cy={bky}
            r={r}
            fill="none"
            stroke="var(--color-red)"
            strokeWidth={0.6}
            opacity={0.3 - i * 0.08}
          />
        ))}
        {/* Crosshair */}
        <line
          x1={bkx - 18}
          y1={bky}
          x2={bkx + 18}
          y2={bky}
          stroke="var(--color-red)"
          strokeWidth={1.25}
        />
        <line
          x1={bkx}
          y1={bky - 18}
          x2={bkx}
          y2={bky + 18}
          stroke="var(--color-red)"
          strokeWidth={1.25}
        />
        <circle
          cx={bkx}
          cy={bky}
          r={3.6}
          fill="var(--color-red)"
          stroke="var(--color-paper)"
          strokeWidth={1}
        />
        {/* Callout label */}
        <g>
          <line
            x1={bkx + 12}
            y1={bky - 12}
            x2={bkx + 72}
            y2={bky - 48}
            stroke="var(--color-red)"
            strokeWidth={0.8}
          />
          <rect
            x={bkx + 70}
            y={bky - 66}
            width={146}
            height={24}
            fill="var(--color-paper)"
            stroke="var(--color-red)"
            strokeWidth={0.9}
          />
          <text
            x={bkx + 78}
            y={bky - 50}
            fontFamily="var(--font-mono)"
            fontSize={10}
            fill="var(--color-red)"
            fontWeight={600}
            letterSpacing="1.2"
          >
            ST-001 · HQ · BKK
          </text>
        </g>
      </g>

      {/* Tampa — ghost marker off-frame with dashed arc */}
      <g>
        <line
          x1={tampaX}
          y1={tampaY}
          x2={bkx - 20}
          y2={bky - 20}
          stroke="var(--color-mute)"
          strokeWidth={0.8}
          strokeDasharray="3 4"
          opacity={0.7}
        />
        <circle
          cx={tampaX}
          cy={tampaY}
          r={3}
          fill="none"
          stroke="var(--color-mute)"
          strokeWidth={1}
        />
        <text
          x={tampaX + 8}
          y={tampaY + 4}
          fontFamily="var(--font-mono)"
          fontSize={9}
          fill="var(--color-mute)"
          letterSpacing="0.8"
        >
          ST-002 · TPA · BETA
        </text>
        <text
          x={tampaX + 8}
          y={tampaY + 16}
          fontFamily="var(--font-mono)"
          fontSize={7}
          fill="var(--color-mute-2)"
          letterSpacing="0.3"
        >
          ≈ 15,100 km
        </text>
      </g>

      {/* Compass rose (bottom right) */}
      <g transform={`translate(${W - 82}, ${H - 92})`}>
        <circle
          cx={0}
          cy={0}
          r={26}
          fill="var(--color-paper)"
          stroke="var(--color-ink)"
          strokeWidth={0.9}
        />
        <circle
          cx={0}
          cy={0}
          r={18}
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth={0.5}
          opacity={0.4}
        />
        {/* Rose points */}
        <g stroke="var(--color-ink)" strokeWidth={0.6} fill="var(--color-ink)">
          {/* N */}
          <polygon points="0,-24 -3,-2 3,-2" fill="var(--color-red)" stroke="none" />
          {/* S */}
          <polygon points="0,24 -3,2 3,2" />
          {/* E */}
          <polygon points="24,0 2,-3 2,3" />
          {/* W */}
          <polygon points="-24,0 -2,-3 -2,3" />
          {/* diagonals thin */}
          <line x1={-16} y1={-16} x2={-6} y2={-6} />
          <line x1={16} y1={-16} x2={6} y2={-6} />
          <line x1={-16} y1={16} x2={-6} y2={6} />
          <line x1={16} y1={16} x2={6} y2={6} />
        </g>
        <text
          x={0}
          y={-30}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize={8}
          fill="var(--color-ink)"
          letterSpacing="1"
          fontWeight={600}
        >
          N
        </text>
      </g>

      {/* Scale bar (bottom left) */}
      <g transform={`translate(60, ${H - 76})`}>
        <line
          x1={0}
          y1={0}
          x2={160}
          y2={0}
          stroke="var(--color-ink)"
          strokeWidth={1.2}
        />
        {[0, 40, 80, 120, 160].map((x) => (
          <line
            key={x}
            x1={x}
            y1={-3}
            x2={x}
            y2={3}
            stroke="var(--color-ink)"
            strokeWidth={1}
          />
        ))}
        <text
          x={0}
          y={16}
          fontFamily="var(--font-mono)"
          fontSize={8}
          fill="var(--color-ink-3)"
          letterSpacing="0.6"
        >
          0
        </text>
        <text
          x={160}
          y={16}
          textAnchor="end"
          fontFamily="var(--font-mono)"
          fontSize={8}
          fill="var(--color-ink-3)"
          letterSpacing="0.6"
        >
          1000 km
        </text>
        <text
          x={0}
          y={-8}
          fontFamily="var(--font-mono)"
          fontSize={7}
          fill="var(--color-mute)"
          letterSpacing="0.6"
        >
          SCALE
        </text>
      </g>
    </svg>
  );
}
