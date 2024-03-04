export type Coords = {
  x: number;
  y: number;
}

// Export this from here only!
export type HypotenuseAndLegs = {
  hypotenuse: number;
  legs: Coords;
}

// Export this from here only!
type TriangleLegs = {
  x: number;
  y: number;
}

const radianValue = Math.PI/180;

function getRadians(degrees: number) {
  return degrees * radianValue;
}

function getDegrees(radians: number) {
  return radians / radianValue;
}

function getSin(direction: number) {
  return Math.sin(getRadians(direction));
}

function getCos(direction: number) {
  return direction === 90 ? 0 : Math.cos(getRadians(direction)) * -1;
}

export function utilities(distance: number, direction: number): TriangleLegs {
  return {
    x: getSin(direction) * distance,
    y: getCos(direction) * distance,
  }
}

export function getHypotenuseAndLegs(source: Coords, destination: Coords): HypotenuseAndLegs {
  const legs = {
    x: destination.x - source.x,
    y: destination.y - source.y, // ?
    // x: source.x - destination.x,
    // y: (source.y - destination.y) * -1, // ?
  };

  const hypotenuse = Math.sqrt(legs.x * legs.x + legs.y * legs.y);
  return { hypotenuse, legs };
}

// Seems to require simplification:
export function getMovingOffsets(hypotenuseAndLegs: HypotenuseAndLegs, speed: number): Coords {
  const { hypotenuse, legs: diff } = hypotenuseAndLegs;

  let distance = hypotenuse > speed ? speed : hypotenuse;

  const coefficients = {
    x: diff.x / hypotenuse,
    y: diff.y / hypotenuse,
  }

  return {
    x: coefficients.x * distance,
    y: coefficients.y * distance,
  }
}

// console.log('1-->', getMovingOffsets(getHypotenuseAndLegs({ x: 20, y: 20 }, { x: 10, y: 10 }), 1));
// console.log('2-->', getMovingOffsets(getHypotenuseAndLegs({ x: 20, y: 10 }, { x: 10, y: 20 }), 1));
// console.log('3-->', getMovingOffsets(getHypotenuseAndLegs({ x: 10, y: 10 }, { x: 20, y: 20 }), 1));
// console.log('4-->', getMovingOffsets(getHypotenuseAndLegs({ x: 10, y: 20 }, { x: 20, y: 10 }), 1));
