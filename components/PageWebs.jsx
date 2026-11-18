import SpiderWeb from "@/components/SpiderWeb";
import WebResidents from "@/components/WebResidents";
import { ceilingWeb, webStyle as style } from "@/lib/spider-web";

// Static silk and persistent residents share one foreground layer across routes.
export default function PageWebs() {
  const corner = style.mirror ? "right" : "left";

  return (
    <div className="web-overlay" aria-hidden="true">
      <SpiderWeb />
      <WebResidents />
      <svg
        className={`page-web-decoration page-web-decoration--${corner}`}
        data-web-position={corner}
        width="240"
        height="240"
        viewBox="0 0 360 360"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g transform={corner === "left" ? "translate(360 0) scale(-1 1)" : undefined} stroke="currentColor" strokeWidth={style.stroke} strokeLinecap="round">
          {style.spokes.map(({ d, opacity }, index) => <path key={`spoke-${index}`} d={d} opacity={opacity} pathLength="1" />)}
          {style.rings.map(({ d, opacity }, index) => <path key={`ring-${index}`} d={d} opacity={opacity} pathLength="1" />)}
        </g>
      </svg>
      <svg
        className="page-web-decoration page-web-decoration--center"
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
        {ceilingWeb.spokes.map((d, index) => <path key={index} d={d} opacity="0.65" />)}
        {ceilingWeb.rings.map((d, index) => <path key={index} d={d} opacity={index === ceilingWeb.rings.length - 1 ? "0.7" : "0.55"} />)}
      </svg>
    </div>
  );
}
