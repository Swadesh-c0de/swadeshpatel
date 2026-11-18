import { cornerWeb } from "@/lib/spider-web";

export default function CornerWeb({ className = "" }) {
  return (
    <svg className={`corner-web ${className}`} viewBox="0 0 180 180" fill="none" stroke="currentColor" strokeWidth="0.65" aria-hidden="true" focusable="false">
      {cornerWeb.spokes.map((d, index) => <path key={`s${index}`} d={d} pathLength="1" opacity="0.65" />)}
      {cornerWeb.rings.map((d, index) => <path key={`r${index}`} d={d} pathLength="1" opacity={0.35 + index * 0.06} />)}
    </svg>
  );
}
