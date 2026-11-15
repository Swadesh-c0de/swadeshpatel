import SpiderWeb from "@/components/SpiderWeb";
import { webStyles } from "@/lib/spider-web";

const coordinate = (value) => value.toFixed(3);
const ceilingPoints = Array.from({ length: 9 }, (_, index) => {
  const angle = index * Math.PI / 8;
  return [180 - Math.cos(angle) * 180, Math.sin(angle) * 116];
});

function ceilingRing(radius) {
  return ceilingPoints.slice(1).map(([x, y], index) => {
    const [previousX, previousY] = ceilingPoints[index];
    const ax = 180 + (previousX - 180) * radius;
    const ay = previousY * radius;
    const bx = 180 + (x - 180) * radius;
    const by = y * radius;
    return `M${coordinate(ax)} ${coordinate(ay)} Q${coordinate(180 + ((ax + bx) / 2 - 180) * 0.96)} ${coordinate((ay + by) / 2 * 0.94)} ${coordinate(bx)} ${coordinate(by)}`;
  }).join(" ");
}

// Additional silk is server-rendered; only the original spider needs animation.
export default function PageWebs({ variant = "home" }) {
  const style = webStyles[variant] || webStyles.home;
  const corner = style.mirror ? "right" : "left";

  return (
    <>
      <SpiderWeb variant={variant} />
      <svg
        className={`page-web-decoration page-web-decoration--${corner}`}
        style={{ position: "absolute", top: 0, [corner]: 0, width: "var(--corner-web-width, clamp(130px, 17vw, 240px))", height: "auto", pointerEvents: "none" }}
        data-web-position={corner}
        width="240"
        height="240"
        viewBox="0 0 360 360"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g transform={corner === "left" ? "translate(360 0) scale(-1 1)" : undefined} stroke="currentColor" strokeWidth={style.stroke} strokeLinecap="round">
          {style.spokes.map(({ d, opacity }, index) => <path key={`spoke-${index}`} d={d} opacity={opacity} />)}
          {style.rings.map(({ d, opacity }, index) => <path key={`ring-${index}`} d={d} opacity={opacity} />)}
        </g>
      </svg>
      <svg
        className="page-web-decoration page-web-decoration--center"
        style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "var(--ceiling-web-width, clamp(140px, 19vw, 270px))", height: "auto", pointerEvents: "none" }}
        data-web-position="center"
        width="270"
        height="90"
        viewBox="0 0 360 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        aria-hidden="true"
        focusable="false"
      >
        {ceilingPoints.map(([x, y], index) => (
          <path key={index} d={`M180 0 L${coordinate(x)} ${coordinate(y)}`} opacity="0.65" />
        ))}
        {style.radii.map((radius, index) => <path key={index} d={ceilingRing(radius)} opacity="0.55" />)}
        <path d={ceilingRing(1)} opacity="0.7" />
      </svg>
    </>
  );
}
