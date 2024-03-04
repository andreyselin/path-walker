export type Coords = {
    x: number;
    y: number;
};
export type HypotenuseAndLegs = {
    hypotenuse: number;
    legs: Coords;
};
type TriangleLegs = {
    x: number;
    y: number;
};
export declare function utilities(distance: number, direction: number): TriangleLegs;
export declare function getHypotenuseAndLegs(source: Coords, destination: Coords): HypotenuseAndLegs;
export declare function getMovingOffsets(hypotenuseAndLegs: HypotenuseAndLegs, speed: number): Coords;
export {};
