import { useMemo } from 'react';

interface WebGraphicProps {
  spokes?: number;
  rings?: number;
  className?: string;
}

/**
 * Паутина, сгенерированная из радиальных нитей и провисающих колец.
 * Рисуется один раз (stroke-dashoffset в CSS), дальше статична — телефону не тяжело.
 */
export function WebGraphic({ spokes = 14, rings = 8, className }: WebGraphicProps) {
  const { spokePaths, ringPaths } = useMemo(() => {
    const c = 200;
    const R = 196;
    // Слегка неровные углы, чтобы паутина выглядела живой, но детерминированно
    const angles = Array.from({ length: spokes }, (_, i) => (i / spokes) * Math.PI * 2 + Math.sin(i * 2.3) * 0.08);
    const pt = (a: number, r: number) => [c + Math.cos(a) * r, c + Math.sin(a) * r] as const;

    const spokePaths = angles.map((a) => {
      const [x, y] = pt(a, R);
      return `M${c} ${c} L${x.toFixed(1)} ${y.toFixed(1)}`;
    });

    const ringPaths = Array.from({ length: rings }, (_, k) => {
      const r = (R * (k + 1)) / rings;
      let d = '';
      angles.forEach((a, i) => {
        const b = angles[(i + 1) % spokes] + (i === spokes - 1 ? Math.PI * 2 : 0);
        const [x1, y1] = pt(a, r);
        const [x2, y2] = pt(b, r);
        // Провис нити к центру
        const [qx, qy] = pt((a + b) / 2, r * 0.9);
        d += `${i === 0 ? `M${x1.toFixed(1)} ${y1.toFixed(1)}` : ''} Q${qx.toFixed(1)} ${qy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
      });
      return d;
    });

    return { spokePaths, ringPaths };
  }, [spokes, rings]);

  return (
    <svg className={className} viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        {spokePaths.map((d, i) => (
          <path key={`s${i}`} d={d} pathLength={1} className="web-thread" style={{ animationDelay: `${i * 40}ms` }} />
        ))}
        {ringPaths.map((d, i) => (
          <path
            key={`r${i}`}
            d={d}
            pathLength={1}
            className="web-thread web-ring"
            style={{ animationDelay: `${400 + i * 110}ms` }}
          />
        ))}
      </g>
    </svg>
  );
}
