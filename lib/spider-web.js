const HOME_HUB = { x: 205, y: 89 };
const HOME_ANCHORS = [
  [0, 0], [77, 0], [157, 0], [237, 0], [320, 0],
  [360, 39], [360, 112], [360, 190], [360, 282], [360, 350],
];
export const coordinate = (value) => value.toFixed(3);

const sharedStyle = {
  hub: HOME_HUB,
  anchors: HOME_ANCHORS,
  radii: [0.13, 0.24, 0.36, 0.49, 0.63, 0.78, 0.94],
  bend: [-3, 3], sag: 0.09, variation: 0.035,
  restY: 260, angle: 0, scale: 1, idle: 17, lift: 24, retreat: 105,
  mirror: false, stroke: 0.8, phase: 0,
};

function createGeometry(style) {
  const { hub, anchors, radii, bend } = style;
  const point = ([x, y], radius) => ({
    x: hub.x + (x - hub.x) * radius + 2 * radius * (1 - radius) * bend[0],
    y: hub.y + (y - hub.y) * radius + 2 * radius * (1 - radius) * bend[1],
  });
  const spokes = anchors.map(([x, y], index) => ({
    d: `M${hub.x} ${hub.y} Q${coordinate((hub.x + x) / 2 + bend[0])} ${coordinate((hub.y + y) / 2 + bend[1])} ${x} ${y}`,
    opacity: coordinate(0.5 + (index % 3) * 0.15),
  }));
  const rings = radii.flatMap((radius, ring) => anchors.slice(1).map((anchor, index) => {
    const a = point(anchors[index], radius);
    const b = point(anchor, radius);
    const sag = style.sag + Math.sin(ring * 5 + index * 3) * style.variation;
    return {
      d: `M${coordinate(a.x)},${coordinate(a.y)} Q${coordinate((a.x + b.x) / 2 * (1 - sag) + hub.x * sag)},${coordinate((a.y + b.y) / 2 * (1 - sag) + hub.y * sag)} ${coordinate(b.x)},${coordinate(b.y)}`,
      opacity: coordinate(0.28 + ((ring * 3 + index * 7) % 6) * 0.085),
    };
  }));
  return { ...style, spokes, rings };
}

export const webStyle = createGeometry(sharedStyle);

// The thread terminates at the spider's head after rotation and scaling.
export function threadPath(x, y, angle = 0, velocity = 0, style = webStyle) {
  const { hub, scale } = style;
  const radians = angle * Math.PI / 180;
  const endX = x + Math.sin(radians) * 10 * scale;
  const endY = y - Math.cos(radians) * 10 * scale;
  const dx = endX - hub.x;
  const dy = endY - hub.y;
  const length = Math.hypot(dx, dy) || 1;
  const bow = Math.max(-1.4, Math.min(1.4, velocity * 0.6));
  const bendX = -dy / length * bow;
  const bendY = dx / length * bow;
  return `M${hub.x} ${hub.y} C${coordinate(hub.x + dx * 0.32 + bendX)} ${coordinate(hub.y + dy * 0.32 + bendY)} ${coordinate(endX - dx * 0.28 + bendX * 0.45)} ${coordinate(endY - dy * 0.28 + bendY * 0.45)} ${coordinate(endX)} ${coordinate(endY)}`;
}

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

export const ceilingWeb = {
  spokes: ceilingPoints.map(([x, y]) => `M180 0 L${coordinate(x)} ${coordinate(y)}`),
  rings: [...webStyle.radii, 1].map(ceilingRing),
};

// A true quarter web: its radial threads terminate on two viewport edges.
const cornerRays = Array.from({ length: 8 }, (_, index) => {
  const angle = index / 7 * Math.PI / 2;
  return [Math.cos(angle) * 178, Math.sin(angle) * 178];
});
export const cornerWeb = {
  spokes: cornerRays.map(([x, y]) => `M0 0 L${coordinate(x)} ${coordinate(y)}`),
  rings: [0.12, 0.23, 0.36, 0.51, 0.68, 0.85, 1].map(radius =>
    cornerRays.slice(1).map(([x, y], index) => {
      const [ax, ay] = cornerRays[index];
      return `M${coordinate(ax * radius)} ${coordinate(ay * radius)} Q${coordinate((ax + x) * radius * 0.46)} ${coordinate((ay + y) * radius * 0.46)} ${coordinate(x * radius)} ${coordinate(y * radius)}`;
    }).join(" ")
  ),
};
