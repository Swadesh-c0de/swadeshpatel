const HOME_HUB = { x: 205, y: 89 };
const HOME_ANCHORS = [
  [0, 0], [77, 0], [157, 0], [237, 0], [320, 0],
  [360, 39], [360, 112], [360, 190], [360, 282], [360, 350],
];
const coordinate = (value) => value.toFixed(3);

const styles = {
  home: {
    hub: HOME_HUB,
    anchors: HOME_ANCHORS,
    radii: [0.13, 0.24, 0.36, 0.49, 0.63, 0.78, 0.94],
    bend: [-3, 3], sag: 0.09, variation: 0.035,
    restY: 260, angle: 0, scale: 1, idle: 17, lift: 24, retreat: 105,
    mirror: false, stroke: 0.8, phase: 0,
  },
  about: {
    hub: { x: 236, y: 56 },
    anchors: [[0, 0], [90, 0], [178, 0], [270, 0], [360, 0], [360, 72], [360, 154], [360, 240]],
    radii: [0.22, 0.43, 0.65, 0.88],
    bend: [-2, 3], sag: 0.12, variation: 0.025,
    restY: 140, angle: -6, scale: 0.68, idle: 8, lift: 12, retreat: 32,
    mirror: true, stroke: 0.65, phase: 0.7,
  },
  projects: {
    hub: { x: 224, y: 82 },
    anchors: [[12, 0], [64, 0], [120, 0], [180, 0], [245, 0], [310, 0], [360, 24], [360, 85], [360, 155], [360, 235], [360, 315]],
    radii: [0.1, 0.2, 0.31, 0.43, 0.56, 0.7, 0.84, 0.95],
    bend: [-3, 3], sag: 0.075, variation: 0.02,
    restY: 210, angle: 8, scale: 0.84, idle: 12, lift: 16, retreat: 60,
    mirror: false, stroke: 0.7, phase: 1.4,
  },
  lab: {
    hub: { x: 228, y: 92 },
    anchors: [[0, 0], [104, 0], [210, 0], [316, 0], [360, 57], [360, 155], [360, 270], [360, 355]],
    radii: [0.16, 0.35, 0.58, 0.83],
    bend: [0, 0], sag: 0.035, variation: 0.01,
    restY: 190, angle: -12, scale: 0.7, idle: 6, lift: 10, retreat: 38,
    mirror: true, stroke: 0.9, phase: 2.1,
  },
  contact: {
    hub: { x: 244, y: 48 },
    anchors: [[0, 0], [66, 0], [141, 0], [220, 0], [295, 0], [360, 0], [360, 56], [360, 126], [360, 225]],
    radii: [0.18, 0.34, 0.53, 0.74, 0.92],
    bend: [-2, 2], sag: 0.11, variation: 0.025,
    restY: 195, angle: 4, scale: 0.65, idle: 10, lift: 12, retreat: 65,
    mirror: false, stroke: 0.55, phase: 2.8,
  },
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

export const webStyles = Object.fromEntries(
  Object.entries(styles).map(([name, style]) => [name, createGeometry(style)])
);

// The thread terminates at the spider's head after rotation and scaling.
export function threadPath(x, y, angle = 0, velocity = 0, style = webStyles.home) {
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
